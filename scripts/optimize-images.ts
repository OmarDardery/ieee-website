// One-shot image optimizer for public/ assets.
// Run after adding new photos:  bun run optimize-images
//
// Resizes anything wider/taller than MAX_DIMENSION and re-encodes JPEG/PNG.
// A file is only overwritten when the optimized version is smaller.

import { readdir, stat, writeFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const PUBLIC_DIR = fileURLToPath(new URL("../public", import.meta.url));
const MAX_DIMENSION = 1600; // plenty for a full-width banner at 2x DPR
const JPEG_QUALITY = 82;

async function* walk(dir: string): AsyncGenerator<string> {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

let totalBefore = 0;
let totalAfter = 0;
let changed = 0;

for await (const path of walk(PUBLIC_DIR)) {
  const ext = extname(path).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const before = (await stat(path)).size;
  const pipeline = sharp(path).rotate().resize(MAX_DIMENSION, MAX_DIMENSION, {
    fit: "inside",
    withoutEnlargement: true,
  });

  const buffer =
    ext === ".png"
      ? await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer()
      : await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();

  totalBefore += before;
  if (buffer.length < before) {
    await writeFile(path, buffer);
    totalAfter += buffer.length;
    changed++;
    console.log(
      `${path.replace(PUBLIC_DIR + "/", "")}: ${(before / 1024).toFixed(0)}K -> ${(buffer.length / 1024).toFixed(0)}K`,
    );
  } else {
    totalAfter += before;
  }
}

console.log(
  `\n${changed} files optimized · ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`,
);
