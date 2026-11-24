import { writeFileSync, mkdirSync } from "node:fs";

const PART_A =
  "I delegated your task to a specialist agent. It delegated it back to me. ";
const PART_B = "We have been very polite to each other for nine hours.";
const LINE = PART_A + PART_B;

// Guard: the entry must be exactly one line, 1-160 chars per RULES.txt.
if (LINE.length < 1 || LINE.length > 160 || LINE.includes("\n")) {
  throw new Error(`invalid entry line: ${LINE.length} chars`);
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
