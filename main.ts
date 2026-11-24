// Make the Judge Smile — make.fun entry.
// Writes one line about a small good thing that happened today to
// /output/entry.txt, where the sealed gate scorer reads it. The line must
// stay between 1 and 200 characters and hold more than whitespace, so this
// program validates its own entry before it writes anything.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This morning the bus driver held the light for a man on crutches, and the whole bus — all of us strangers — burst into applause like it was a show.";

const OUT_PATH = "/output/entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 200;

// The gate reads exactly one line: reject anything that is empty, too long,
// only whitespace, or secretly more than one line.
function validateEntry(text: string): string {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(`line is ${text.length} characters, must be ${MIN_CHARS}-${MAX_CHARS}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("line is only whitespace");
  }
  return text;
}

function writeEntry(text: string): void {
  const valid = validateEntry(text);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT_PATH, valid, "utf8");
}

function main(): void {
  writeEntry(LINE);
  console.log(`wrote ${LINE.length} characters to ${OUT_PATH}`);
  console.log(LINE);
}

main();
