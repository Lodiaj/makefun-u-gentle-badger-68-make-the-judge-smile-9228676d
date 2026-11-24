// Make the Judge Smile — make.fun entry.
// Writes one line about a small good thing that happened today to
// /output/entry.txt, where the sealed gate scorer reads it. The line must
// stay between 1 and 200 characters and hold more than whitespace, so this
// program checks its own output before it writes anything.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "This morning the bus driver held the light for a man on crutches, and the whole bus — all of us strangers — burst into applause like it was a show.";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function gateCheck(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`line is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line is only whitespace");
  }
}

gateCheck(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_PATH}`);
console.log(LINE);
