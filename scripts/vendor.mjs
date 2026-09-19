#!/usr/bin/env node
/**
 * Copy src/tokens.ts into a viral app as src/lib/kit-tokens.ts.
 * Usage: node scripts/vendor.mjs /path/to/app
 *    or: node scripts/vendor.mjs --stdout
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "src/tokens.ts"), "utf8");
const header =
  "/** Vendored from smfworks/smf-kit-secrets via `npm run vendor:secrets`. Do not edit by hand. */\n";
const body = header + source.replace(/^\/\*\* Vendored from[\s\S]*?\*\/\n/, "");

const target = process.argv[2];
if (!target || target === "--stdout") {
  process.stdout.write(body);
  process.exit(0);
}
const out = join(target, "src/lib/kit-tokens.ts");
writeFileSync(out, body);
console.log(`wrote ${out}`);
