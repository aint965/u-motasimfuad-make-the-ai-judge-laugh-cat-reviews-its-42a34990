import { mkdirSync, writeFileSync } from "node:fs";

// One-star review written by a house cat about its human.
// Round 2 line (revised from round 1): dropped the filler "Every morning"
// and changed "scream" to "yowl" — a cat word, not a human one — so the
// voice is unmistakably feline and the wording is tighter. Specific
// complaint (the 5am food bowl), deadpan shape, sting in the last sentence.
const LINE =
  "One star. He fills my bowl at 5am, then acts surprised when I yowl at 4:59. I am not early. He is late.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
