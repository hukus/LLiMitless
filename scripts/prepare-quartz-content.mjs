#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const publicDirs = ["entities", "concepts", "comparisons", "queries"];
const rawSourceDirs = ["raw/articles", "raw/papers", "raw/transcripts"];
const publicSourceRoot = "sources";
const generatedDate = "2026-05-06";
const wikiLinkPattern = /!?\[\[([^\]\n]+)\]\]/g;
const rawSourcePathPattern =
  /\braw\/(?:articles|papers|transcripts)\/[^\s\]\[()`,;]+?\.md/g;
const markdownRawSourceLinkPattern =
  /\[([^\]\n]+)\]\(([^)\n]*raw\/(?:articles|papers|transcripts)\/[^\s)\n]+?\.md)(#[^)]+)?\)/g;
const codeRawSourcePathPattern =
  /`([^`\n]*raw\/(?:articles|papers|transcripts)\/[^\s`\n]+?\.md)`/g;
const inlineProvenancePattern =
  /\^\[([^\]\n]*raw\/(?:articles|papers|transcripts)\/[^\s\]\n]+?\.md)\]/g;
const absoluteRawSourcePathPattern =
  /(?:\/[^\s\]\[()`,;]+)*\/(raw\/(?:articles|papers|transcripts)\/[^\s\]\[()`,;]+?\.md)/g;
let rawSourceFiles = new Map();
const rootPages = [
  { source: "index.md", destination: "index.md", transform: transformIndex },
  {
    source: "outcome.md",
    destination: "OUTCOME.md",
    linkRawSources: true,
    appendSourceNotes: true,
  },
  {
    source: "SCHEMA.md",
    destination: "about/editorial.md",
    transform: transformSchema,
  },
  {
    source: "log.md",
    destination: "updates/changelog.md",
    transform: transformLog,
  },
];

function getArg(name, fallback) {
  const index = process.argv.indexOf(name);
  if (index === -1) return fallback;
  const value = process.argv[index + 1];
  if (!value || value.startsWith("--")) {
    throw new Error(`Missing value for ${name}`);
  }
  return value;
}

function frontmatter(title, type = "summary") {
  return `---\ntitle: ${title}\ncreated: ${generatedDate}\nupdated: ${generatedDate}\ntype: ${type}\ntags: [domain-medicine, cognition, protocol]\nsources: []\nconfidence: medium\n---\n\n`;
}

function transformIndex(content) {
  const siteLinks =
    "Site pages: [[about/editorial|About / editorial rules]], [[updates/changelog|Updates / changelog]], and [[source-notes|Source notes]].";
  if (content.includes(siteLinks)) return content;
  return content.replace(
    /(These hub pages are the fastest way to move between the wiki's main clusters\.\n)/,
    `$1\n${siteLinks}\n`,
  );
}

function transformSchema(content) {
  return `${frontmatter("About / Editorial Rules")}${content}`;
}

function transformLog(content) {
  const normalized = content
    .replace(/\[\[index\]\]/g, "`index.md`")
    .replace(/\[\[TODO\]\]/g, "`TODO.md`")
    .replace(/\[\[IDEAS\]\]/g, "`IDEAS.md`");

  return `${frontmatter("Updates / Changelog")}# Updates / Changelog\n\n${normalized}`;
}

function normalizeTarget(value) {
  return value
    .trim()
    .replace(/\\/g, "/")
    .replace(/\.md$/i, "")
    .split("/")
    .map((segment) => segment.trim().replace(/\s+/g, "-").toLowerCase())
    .join("/");
}

function splitTarget(rawTarget) {
  const withoutAlias = rawTarget.split("|")[0].trim();
  const withoutAnchor = withoutAlias.split("#")[0].trim();
  const withoutBlock = withoutAnchor.split("^")[0].trim();
  return withoutBlock;
}

async function listMarkdownFiles(directory, root = directory) {
  const files = [];
  const stat = await fs.stat(directory).catch(() => null);
  if (!stat?.isDirectory()) return files;

  for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listMarkdownFiles(absolute, root)));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(path.relative(root, absolute).replace(/\\/g, "/"));
    }
  }
  return files;
}

async function buildRawSourceFiles() {
  const files = new Map();

  for (const directory of rawSourceDirs) {
    const markdownFiles = await listMarkdownFiles(path.join(repoRoot, directory));
    for (const file of markdownFiles) {
      const source = `${directory}/${file}`;
      const destination = source.replace(/^raw\//, `${publicSourceRoot}/`);
      files.set(source, { source, destination });
    }
  }

  return files;
}

function buildPageMaps(files) {
  const pagesByPath = new Map();
  const pagesByStem = new Map();

  for (const file of files) {
    const pagePath = normalizeTarget(file);
    const stem = pagePath.split("/").at(-1)?.replace(/\.md$/i, "");
    const withoutExtension = pagePath.replace(/\.md$/i, "");
    pagesByPath.set(withoutExtension, file);
    pagesByStem.set(stem, [...(pagesByStem.get(stem) ?? []), file]);
  }

  return { pagesByPath, pagesByStem };
}

function resolveTarget(target, pagesByPath, pagesByStem) {
  const normalized = normalizeTarget(target);
  if (pagesByPath.has(normalized)) return pagesByPath.get(normalized);

  const basename = normalized.split("/").at(-1);
  const stemMatches = pagesByStem.get(basename) ?? [];
  if (stemMatches.length === 1) return stemMatches[0];

  return null;
}

function splitFrontmatter(content) {
  if (!content.startsWith("---\n")) {
    return { frontmatter: "", body: content };
  }

  const closingIndex = content.indexOf("\n---", 4);
  if (closingIndex === -1) {
    return { frontmatter: "", body: content };
  }

  const closingLineEnd = content.indexOf("\n", closingIndex + 4);
  const endIndex =
    closingLineEnd === -1 ? content.length : closingLineEnd + 1;

  return {
    frontmatter: content.slice(0, endIndex),
    body: content.slice(endIndex),
  };
}

function extractRawSourcePath(value) {
  const match = value.match(rawSourcePathPattern);
  if (!match) return null;

  return match.find((rawPath) => rawSourceFiles.has(rawPath)) ?? null;
}

function extractRawSourcePaths(content) {
  const sourcePaths = new Set();

  for (const match of content.matchAll(rawSourcePathPattern)) {
    if (rawSourceFiles.has(match[0])) {
      sourcePaths.add(match[0]);
    }
  }

  return [...sourcePaths].sort();
}

function rawSourceTarget(rawPath) {
  return rawSourceFiles.get(rawPath)?.destination.replace(/\.md$/i, "");
}

function rawSourceLabel(rawPath) {
  return rawPath.split("/").at(-1)?.replace(/\.md$/i, "") ?? rawPath;
}

function sanitizeWikilinkAlias(alias) {
  return alias.replace(/[\]\n\r|]/g, " ").replace(/\s+/g, " ").trim();
}

function rawSourceWikilink(rawPath, alias = rawSourceLabel(rawPath)) {
  const target = rawSourceTarget(rawPath);
  if (!target) return rawPath;

  return `[[${target}|${sanitizeWikilinkAlias(alias)}]]`;
}

function rewriteRawSourceReferences(body) {
  return body
    .replace(markdownRawSourceLinkPattern, (fullMatch, label, rawUrl) => {
      const rawPath = extractRawSourcePath(rawUrl);
      return rawPath ? rawSourceWikilink(rawPath, label) : fullMatch;
    })
    .replace(codeRawSourcePathPattern, (fullMatch, rawValue) => {
      const rawPath = extractRawSourcePath(rawValue);
      return rawPath ? rawSourceWikilink(rawPath) : fullMatch;
    })
    .replace(inlineProvenancePattern, (fullMatch, rawValue) => {
      const rawPath = extractRawSourcePath(rawValue);
      return rawPath ? ` ${rawSourceWikilink(rawPath, "source")}` : fullMatch;
    })
    .replace(absoluteRawSourcePathPattern, (fullMatch, rawPath) => {
      return rawSourceFiles.has(rawPath)
        ? rawSourceWikilink(rawPath)
        : fullMatch;
    })
    .replace(rawSourcePathPattern, (rawPath) => {
      return rawSourceFiles.has(rawPath)
        ? rawSourceWikilink(rawPath)
        : rawPath;
    });
}

function hasSourceSection(body) {
  return /^## Source(?:s| Notes)\b/im.test(body);
}

function appendSourceNotes(content, sourcePaths) {
  if (sourcePaths.length === 0) return content;

  const { frontmatter, body } = splitFrontmatter(content);
  if (hasSourceSection(body)) return content;

  const links = sourcePaths
    .map((rawPath) => `- ${rawSourceWikilink(rawPath)}`)
    .join("\n");

  return `${frontmatter}${body.trimEnd()}\n\n## Source Notes\n\n${links}\n`;
}

function linkRawSources(content, { appendSourceNotes: shouldAppend = false } = {}) {
  const sourcePaths = extractRawSourcePaths(content);
  const withSourceNotes = shouldAppend
    ? appendSourceNotes(content, sourcePaths)
    : content;
  const { frontmatter, body } = splitFrontmatter(withSourceNotes);

  return `${frontmatter}${rewriteRawSourceReferences(body)}`;
}

function renderHistoricalWikilinkAsText(rawTarget) {
  const [targetPart, alias] = rawTarget.split("|");
  const label = alias?.trim() || splitTarget(targetPart ?? rawTarget) || rawTarget.trim();
  return `\`${label}\``;
}

async function sanitizeLooseGeneratedLinks(outputDirectory) {
  const outputPath = path.join(repoRoot, outputDirectory);
  const files = await listMarkdownFiles(outputPath);
  const { pagesByPath, pagesByStem } = buildPageMaps(files);

  for (const file of files) {
    if (file !== "updates/changelog.md" && !file.startsWith(`${publicSourceRoot}/`)) {
      continue;
    }

    const filePath = path.join(outputPath, file);
    const content = await fs.readFile(filePath, "utf8");
    const sanitized = content.replace(wikiLinkPattern, (fullMatch, rawTarget) => {
      const target = splitTarget(rawTarget);
      if (
        !target ||
        target.startsWith("#") ||
        target.startsWith("http://") ||
        target.startsWith("https://")
      ) {
        return fullMatch;
      }

      return resolveTarget(target, pagesByPath, pagesByStem)
        ? fullMatch
        : renderHistoricalWikilinkAsText(rawTarget);
    });

    if (sanitized !== content) {
      await fs.writeFile(filePath, sanitized);
    }
  }
}

function isSafeOutputDirectory(outputDirectory) {
  const resolved = path.resolve(repoRoot, outputDirectory);
  return resolved !== repoRoot && resolved.startsWith(`${repoRoot}${path.sep}`);
}

async function ensureFileExists(file) {
  const absolute = path.join(repoRoot, file);
  const stat = await fs.stat(absolute).catch(() => null);
  if (!stat?.isFile()) {
    throw new Error(`Expected ${file} to exist`);
  }
}

async function copyFile(
  source,
  destination,
  transform = (content) => content,
  options = {},
) {
  const sourcePath = path.join(repoRoot, source);
  const destinationPath = path.join(repoRoot, destination);
  const content = await fs.readFile(sourcePath, "utf8");
  const transformed = normalizeFrontmatter(transform(content));
  const linked = options.linkRawSources
    ? linkRawSources(transformed, {
        appendSourceNotes: options.appendSourceNotes,
      })
    : transformed;

  await fs.mkdir(path.dirname(destinationPath), { recursive: true });
  await fs.writeFile(destinationPath, linked);
}

function normalizeFrontmatter(content) {
  if (!content.startsWith("---\n")) return content;

  const closingIndex = content.indexOf("\n---", 4);
  if (closingIndex === -1) return content;

  const frontmatterBody = content.slice(4, closingIndex);
  const rest = content.slice(closingIndex);
  const seenKeys = new Set();
  let skippingDuplicateBlock = false;
  const normalized = [];

  for (const line of frontmatterBody.split("\n")) {
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):(?:\s|$)/);
    if (keyMatch) {
      skippingDuplicateBlock = false;
      const key = keyMatch[1];
      if (seenKeys.has(key)) {
        skippingDuplicateBlock = true;
        continue;
      }

      seenKeys.add(key);
      if (key === "title") {
        const value = line.slice(line.indexOf(":") + 1).trim();
        if (value.startsWith('"') || value.startsWith("'")) {
          normalized.push(`title: ${value}`);
        } else {
          normalized.push(`title: ${JSON.stringify(value)}`);
        }
        continue;
      }
    } else if (
      skippingDuplicateBlock &&
      (line.trim() === "" ||
        line.startsWith(" ") ||
        line.trim().startsWith("-"))
    ) {
      continue;
    }

    normalized.push(line);
  }

  return `---\n${normalized.join("\n")}${rest}`;
}

async function copyDirectory(source, destination) {
  const sourcePath = path.join(repoRoot, source);
  const destinationPath = path.join(repoRoot, destination);
  await fs.mkdir(destinationPath, { recursive: true });

  for (const entry of await fs.readdir(sourcePath, { withFileTypes: true })) {
    if (entry.name === ".DS_Store") continue;

    const childSource = path.join(source, entry.name);
    const childDestination = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(childSource, childDestination);
    } else if (entry.isFile()) {
      await copyFile(childSource, childDestination, (content) => content, {
        linkRawSources: true,
        appendSourceNotes: true,
      });
    }
  }
}

function titleFromMarkdown(content, fallback) {
  const heading = content.match(/^#\s+(.+)$/m)?.[1]?.trim();
  return heading || fallback;
}

function rawMetadataFromFrontmatter(frontmatter) {
  const metadata = {};
  for (const key of ["source_url", "ingested", "sha256"]) {
    const match = frontmatter.match(new RegExp(`^${key}:\\s*(.+)$`, "m"));
    if (match) {
      metadata[key] = match[1].trim();
    }
  }

  return metadata;
}

function rawSourceFrontmatter(rawPath, content) {
  const { frontmatter, body } = splitFrontmatter(content);
  const metadata = rawMetadataFromFrontmatter(frontmatter);
  const title = titleFromMarkdown(body, rawSourceLabel(rawPath));
  const ingested = metadata.ingested ?? generatedDate;
  const lines = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `created: ${ingested}`,
    `updated: ${ingested}`,
    "type: source",
    "tags: [domain-medicine, cognition]",
    "sources: []",
    "confidence: medium",
  ];

  if (metadata.source_url) {
    lines.push(`source_url: ${JSON.stringify(metadata.source_url)}`);
  }

  if (metadata.ingested) {
    lines.push(`ingested: ${metadata.ingested}`);
  }

  if (metadata.sha256) {
    lines.push(`sha256: ${JSON.stringify(metadata.sha256)}`);
  }

  lines.push("---", "");
  return lines.join("\n");
}

async function copyRawSourceFile(entry, outputDirectory) {
  const sourcePath = path.join(repoRoot, entry.source);
  const destinationPath = path.join(repoRoot, outputDirectory, entry.destination);
  const rawContent = await fs.readFile(sourcePath, "utf8");
  const { body } = splitFrontmatter(rawContent);
  const content = `${rawSourceFrontmatter(entry.source, rawContent)}${rewriteRawSourceReferences(body)}`;

  await fs.mkdir(path.dirname(destinationPath), { recursive: true });
  await fs.writeFile(destinationPath, normalizeFrontmatter(content));
}

async function generateSourceIndex(outputDirectory) {
  const outputPath = path.join(repoRoot, outputDirectory, "source-notes.md");
  const entries = [...rawSourceFiles.values()].sort((a, b) =>
    a.source.localeCompare(b.source),
  );
  const grouped = new Map();

  for (const entry of entries) {
    const category = entry.source.split("/")[1] ?? "notes";
    grouped.set(category, [...(grouped.get(category) ?? []), entry]);
  }

  const lines = [
    frontmatter("Source Notes", "summary").trimEnd(),
    "# Source Notes",
    "",
    "Generated index of public raw-source notes available to the wiki. The canonical editable files remain under `raw/`; this page exposes them for provenance navigation in Quartz.",
    "",
  ];

  for (const [category, categoryEntries] of [...grouped.entries()].sort()) {
    lines.push(`## ${category[0].toUpperCase()}${category.slice(1)}`, "");
    for (const entry of categoryEntries) {
      lines.push(`- ${rawSourceWikilink(entry.source)}`);
    }
    lines.push("");
  }

  await fs.writeFile(outputPath, `${lines.join("\n").trimEnd()}\n`);
}

async function copyRawSources(outputDirectory) {
  for (const entry of [...rawSourceFiles.values()].sort((a, b) =>
    a.source.localeCompare(b.source),
  )) {
    await copyRawSourceFile(entry, outputDirectory);
  }

  await generateSourceIndex(outputDirectory);
}

async function main() {
  const outputDirectory = getArg("--out", ".quartz-content");
  if (!isSafeOutputDirectory(outputDirectory)) {
    throw new Error(
      `Refusing to write outside the repository: ${outputDirectory}`,
    );
  }

  for (const page of rootPages) {
    await ensureFileExists(page.source);
  }
  rawSourceFiles = await buildRawSourceFiles();

  const outputPath = path.join(repoRoot, outputDirectory);
  await fs.rm(outputPath, { recursive: true, force: true });
  await fs.mkdir(outputPath, { recursive: true });

  for (const page of rootPages) {
    await copyFile(
      page.source,
      path.join(outputDirectory, page.destination),
      page.transform,
      {
        linkRawSources: page.linkRawSources,
        appendSourceNotes: page.appendSourceNotes,
      },
    );
  }

  for (const directory of publicDirs) {
    await copyDirectory(directory, path.join(outputDirectory, directory));
  }

  await copyRawSources(outputDirectory);
  await sanitizeLooseGeneratedLinks(outputDirectory);

  console.log(`Prepared Quartz content in ${outputDirectory}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
