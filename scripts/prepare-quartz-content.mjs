#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const publicDirs = ["entities", "concepts", "comparisons", "queries"];
const wikiLinkPattern = /!?\[\[([^\]\n]+)\]\]/g;
const rootPages = [
  { source: "index.md", destination: "index.md", transform: transformIndex },
  { source: "outcome.md", destination: "OUTCOME.md" },
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
  return `---\ntitle: ${title}\ncreated: 2026-05-04\nupdated: 2026-05-04\ntype: ${type}\ntags: [domain-medicine, cognition, protocol]\nsources: []\nconfidence: medium\n---\n\n`;
}

function transformIndex(content) {
  const siteLinks =
    "Site pages: [[about/editorial|About / editorial rules]] and [[updates/changelog|Updates / changelog]].";
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

function renderHistoricalWikilinkAsText(rawTarget) {
  const [targetPart, alias] = rawTarget.split("|");
  const label = alias?.trim() || splitTarget(targetPart ?? rawTarget) || rawTarget.trim();
  return `\`${label}\``;
}

async function sanitizeChangelogLinks(outputDirectory) {
  const outputPath = path.join(repoRoot, outputDirectory);
  const changelogRelativePath = "updates/changelog.md";
  const changelogPath = path.join(outputPath, changelogRelativePath);
  const changelogStat = await fs.stat(changelogPath).catch(() => null);
  if (!changelogStat?.isFile()) return;

  const files = await listMarkdownFiles(outputPath);
  const { pagesByPath, pagesByStem } = buildPageMaps(files);
  const content = await fs.readFile(changelogPath, "utf8");
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
    await fs.writeFile(changelogPath, sanitized);
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

async function copyFile(source, destination, transform = (content) => content) {
  const sourcePath = path.join(repoRoot, source);
  const destinationPath = path.join(repoRoot, destination);
  const content = await fs.readFile(sourcePath, "utf8");
  await fs.mkdir(path.dirname(destinationPath), { recursive: true });
  await fs.writeFile(destinationPath, normalizeFrontmatter(transform(content)));
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
      await copyFile(childSource, childDestination);
    }
  }
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

  const outputPath = path.join(repoRoot, outputDirectory);
  await fs.rm(outputPath, { recursive: true, force: true });
  await fs.mkdir(outputPath, { recursive: true });

  for (const page of rootPages) {
    await copyFile(
      page.source,
      path.join(outputDirectory, page.destination),
      page.transform,
    );
  }

  for (const directory of publicDirs) {
    await copyDirectory(directory, path.join(outputDirectory, directory));
  }

  await sanitizeChangelogLinks(outputDirectory);

  console.log(`Prepared Quartz content in ${outputDirectory}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
