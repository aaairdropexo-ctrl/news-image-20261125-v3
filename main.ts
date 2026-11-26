// Entry program for news-image-20261125 (v3).
// The entry image is drawn at build time and shipped in this repository;
// the program only copies it to the grader's output directory.
// Standard library only, no network, deterministic: the same bytes out
// on every run.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const source = new URL("./entry.png", import.meta.url);
copyFileSync(source, join(outDir, "entry.png"));
