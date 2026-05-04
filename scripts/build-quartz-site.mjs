#!/usr/bin/env node

import fs from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { spawn } from "node:child_process"

const repoRoot = process.cwd()

function getArg(name, fallback) {
  const index = process.argv.indexOf(name)
  if (index === -1) return fallback
  const value = process.argv[index + 1]
  if (!value || value.startsWith("--")) {
    throw new Error(`Missing value for ${name}`)
  }
  return value
}

function hasFlag(name) {
  return process.argv.includes(name)
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: "inherit",
      shell: false,
      ...options,
    })
    child.on("error", reject)
    child.on("exit", (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${command} ${args.join(" ")} exited with ${code}`))
    })
  })
}

async function copyQuartzConfig(quartzDirectory) {
  await fs.copyFile(
    path.join(repoRoot, "site/quartz.config.ts"),
    path.join(quartzDirectory, "quartz.config.ts"),
  )
  await fs.copyFile(
    path.join(repoRoot, "site/quartz.layout.ts"),
    path.join(quartzDirectory, "quartz.layout.ts"),
  )
}

async function main() {
  const quartzDirectory = path.resolve(repoRoot, getArg("--quartz-dir", ".quartz"))
  const serve = hasFlag("--serve")
  const skipPrepare = hasFlag("--skip-prepare")
  const port = getArg("--port", "8080")
  const packageFile = path.join(quartzDirectory, "package.json")
  const quartzCli = path.join(quartzDirectory, "quartz/bootstrap-cli.mjs")
  const quartzContent = path.relative(repoRoot, path.join(quartzDirectory, "content"))

  const [packageStat, cliStat] = await Promise.all([
    fs.stat(packageFile).catch(() => null),
    fs.stat(quartzCli).catch(() => null),
  ])

  if (!packageStat?.isFile() || !cliStat?.isFile()) {
    throw new Error(
      `Quartz checkout not found at ${path.relative(repoRoot, quartzDirectory)}. Clone https://github.com/jackyzha0/quartz.git into that directory and run npm ci there first.`,
    )
  }

  if (!skipPrepare) {
    await run("node", ["scripts/prepare-quartz-content.mjs", "--out", quartzContent], {
      cwd: repoRoot,
    })
  }

  await run("node", ["scripts/validate-public-wiki.mjs", "--content", quartzContent], {
    cwd: repoRoot,
  })
  await copyQuartzConfig(quartzDirectory)

  const buildArgs = ["run", "quartz", "--", "build", "-d", "content", "-o", "public"]
  if (serve) {
    buildArgs.push("--serve", "--port", port)
  }

  await run("npm", buildArgs, { cwd: quartzDirectory })
}

main().catch((error) => {
  console.error(error.message)
  process.exit(1)
})
