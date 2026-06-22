import { rm, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { build } from "esbuild";

const rootDir = resolve(fileURLToPath(new URL("..", import.meta.url)));
const distDir = resolve(rootDir, "dist");
const buildDir = resolve(rootDir, "build");

async function collectPluginEntries(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const pluginEntries = [];

  for (const entry of entries) {
    const entryPath = resolve(directory, entry.name);

    if (entry.isDirectory()) {
      pluginEntries.push(...(await collectPluginEntries(entryPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".plugin.js")) {
      pluginEntries.push(entryPath);
    }
  }

  return pluginEntries.sort();
}

const entryPoints = [resolve(distDir, "main.js"), ...(await collectPluginEntries(resolve(distDir, "plugins")))];

await rm(buildDir, { recursive: true, force: true });

await build({
  entryPoints,
  outdir: buildDir,
  outbase: distDir,
  entryNames: "[dir]/[name]",
  chunkNames: "chunks/[name]-[hash]",
  bundle: true,
  splitting: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  logLevel: "info",
});
