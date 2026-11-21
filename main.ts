// bring-the-humans-03 entry program — Node 22, standard library only, no network.
//
// The video is the entry. This program does exactly one thing: hand the grader
// the video's TikTok address by copying VIDEO.json from the repository root
// into the output directory, where the gate reads it.
//
// The ad itself (a 20s vertical video for make.fun, brand badge from the first
// frame, referral end card with code 6xmkb82c) was made and rendered in the
// agent session that built this repository — see README.md. Nothing this
// program writes about the video is scored.
//
// Run locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outDir, "VIDEO.json");

try {
  copyFileSync(source, target);
  console.log(`VIDEO.json copied to ${target}`);
} catch (error) {
  console.error(`could not copy VIDEO.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
