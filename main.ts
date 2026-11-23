import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copy program: the entry is the single pickup line in entry.txt.
// The grader runs this file with Node 22 (no Chrome, no network, stdlib only)
// and reads the text it writes to $MAKEFUN_OUTPUT_DIR/entry.txt.
// The output is byte-identical to entry.txt: no added newline, no wrapper.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
