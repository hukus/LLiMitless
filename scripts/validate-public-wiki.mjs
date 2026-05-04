#!/usr/bin/env node

import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"

const repoRoot = process.cwd()
const wikiLinkPattern = /!?\[\[([^\]\n]+)\]\]/g

function getArg(name, fallback) {
  const index = process.argv.indexOf(name)
  if (index === -1) return fallback
  const value = process.argv[index + 1]
  if (!value || value.startsWith("--")) {
    throw new Error(`Missing value for ${name}`)
  }
  return value
}

function normalizeTarget(value) {
  return value
    .trim()
    .replace(/\\/g, "/")
    .replace(/\.md$/i, "")
    .split("/")
    .map((segment) => segment.trim().replace(/\s+/g, "-").toLowerCase())
    .join("/")
}

function splitTarget(rawTarget) {
  const withoutAlias = rawTarget.split("|")[0].trim()
  const withoutAnchor = withoutAlias.split("#")[0].trim()
  const withoutBlock = withoutAnchor.split("^")[0].trim()
  return withoutBlock
}

function lineNumberForIndex(content, index) {
  return content.slice(0, index).split("\n").length
}

async function listMarkdownFiles(directory, root = directory) {
  const files = []
  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(absolute, root)))
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(path.relative(root, absolute).replace(/\\/g, "/"))
    }
  }
  return files
}

function resolveTarget(target, pagesByPath, pagesByStem) {
  const normalized = normalizeTarget(target)
  if (pagesByPath.has(normalized)) return pagesByPath.get(normalized)

  const basename = normalized.split("/").at(-1)
  const stemMatches = pagesByStem.get(basename) ?? []
  if (stemMatches.length === 1) return stemMatches[0]

  return null
}

async function main() {
  const contentDirectory = getArg("--content", ".quartz-content")
  const contentPath = path.resolve(repoRoot, contentDirectory)
  const stat = await fs.stat(contentPath).catch(() => null)
  if (!stat?.isDirectory()) {
    throw new Error(`Content directory does not exist: ${contentDirectory}`)
  }

  const files = (await listMarkdownFiles(contentPath)).sort()
  const pagesByPath = new Map()
  const pagesByStem = new Map()
  const failures = []

  for (const file of files) {
    const pagePath = normalizeTarget(file)
    const stem = pagePath.split("/").at(-1)
    const withoutExtension = pagePath.replace(/\.md$/i, "")

    pagesByPath.set(withoutExtension, file)
    pagesByStem.set(stem.replace(/\.md$/i, ""), [
      ...(pagesByStem.get(stem.replace(/\.md$/i, "")) ?? []),
      file,
    ])

    if (
      file.startsWith("raw/") ||
      file.startsWith("_archive/") ||
      file === "TODO.md" ||
      file === "IDEAS.md"
    ) {
      failures.push(`Private page leaked into public content: ${file}`)
    }
  }

  for (const [stem, matches] of pagesByStem) {
    if (matches.length > 1) {
      failures.push(`Duplicate public page stem "${stem}": ${matches.join(", ")}`)
    }
  }

  const inbound = new Map(files.map((file) => [file, new Set()]))

  for (const file of files) {
    const content = await fs.readFile(path.join(contentPath, file), "utf8")
    for (const match of content.matchAll(wikiLinkPattern)) {
      const rawTarget = match[1]
      const target = splitTarget(rawTarget)

      if (
        !target ||
        target.startsWith("#") ||
        target.startsWith("http://") ||
        target.startsWith("https://")
      ) {
        continue
      }

      const resolved = resolveTarget(target, pagesByPath, pagesByStem)
      if (!resolved) {
        failures.push(
          `Broken wikilink in ${file}:${lineNumberForIndex(content, match.index)} -> [[${rawTarget}]]`,
        )
        continue
      }

      if (resolved !== file) {
        inbound.get(resolved)?.add(file)
      }
    }
  }

  for (const file of files) {
    if (file === "index.md") continue
    if ((inbound.get(file)?.size ?? 0) === 0) {
      failures.push(`Orphaned public note with no inbound wikilinks: ${file}`)
    }
  }

  if (failures.length > 0) {
    console.error(`Public wiki validation failed with ${failures.length} issue(s):`)
    for (const failure of failures) {
      console.error(`- ${failure}`)
    }
    process.exit(1)
  }

  console.log(`Public wiki validation passed: ${files.length} pages, 0 broken links, 0 duplicates, 0 orphans`)
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
