#!/usr/bin/env node
// Repository guard: fails if private documents are tracked or if secrets / PII appear in tracked files.
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const FORBIDDEN_EXTENSIONS = /\.(pdf|docx?|odt|rtf)$/i;
const FORBIDDEN_PATHS = /^(private\/|\.env($|\.(?!example$)))/;
const SKIP_CONTENT_SCAN = /(^package-lock\.json$|\.(png|jpe?g|webp|ico|woff2?)$)/i;

const SECRET_PATTERNS = [
  ["AWS access key", /AKIA[0-9A-Z]{16}/],
  ["GitHub token", /gh[pousr]_[A-Za-z0-9]{36,}/],
  ["Google API key", /AIza[0-9A-Za-z_-]{35}/],
  ["OpenAI / Anthropic key", /sk-(ant-)?[A-Za-z0-9_-]{32,}/],
  ["Slack token", /xox[baprs]-[A-Za-z0-9-]{10,}/],
  ["Private key block", /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
  [
    "Generic secret assignment",
    /(api[_-]?key|secret|password|token)\s*[:=]\s*["'][^"'\s]{12,}["']/i,
  ],
  ["Israeli phone number", /(\+972|\b0)5\d[-\s]?\d{3}[-\s]?\d{4}\b/],
];

function trackedFiles() {
  const tracked = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" });
  const staged = execFileSync(
    "git",
    ["diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z"],
    {
      encoding: "utf8",
    },
  );
  return [...new Set([...tracked.split("\0"), ...staged.split("\0")])].filter(Boolean);
}

const problems = [];

for (const file of trackedFiles()) {
  if (FORBIDDEN_EXTENSIONS.test(file)) problems.push(`Document tracked by git: ${file}`);
  if (FORBIDDEN_PATHS.test(file)) problems.push(`Private path tracked by git: ${file}`);
  if (SKIP_CONTENT_SCAN.test(file) || file === "scripts/guard.mjs") continue;

  let content;
  try {
    content = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  for (const [label, pattern] of SECRET_PATTERNS) {
    if (pattern.test(content)) problems.push(`${label} pattern found in ${file}`);
  }
}

if (problems.length > 0) {
  console.error("guard: FAILED");
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

console.log("guard: OK (no tracked documents, no secret patterns)");
