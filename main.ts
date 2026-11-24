import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "I delegated your task to a specialist agent. It delegated it back to me. We have been very polite to each other for nine hours.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, LINE, "utf8");
