/**
 * Image optimization script.
 *
 * Generates WebP versions and responsive sizes of blog images.
 * Run before `vite build` to ensure optimized assets are available.
 *
 * Usage: node scripts/optimize-images.js
 * Requires: sharp (npm install --save-dev sharp)
 */

import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.resolve(__dirname, "../src/assets/blog");

const SMALL_WIDTH = 400;
const WEBP_QUALITY = 80;
const JPEG_QUALITY = 80;

async function optimizeImages() {
  const files = fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".jpg") && !f.endsWith("-sm.jpg"));

  console.log(`Processing ${files.length} images...\n`);

  for (const file of files) {
    const inputPath = path.join(blogDir, file);
    const base = file.replace(".jpg", "");

    // Generate WebP (original size)
    const webpPath = path.join(blogDir, `${base}.webp`);
    await sharp(inputPath).webp({ quality: WEBP_QUALITY }).toFile(webpPath);
    const webpSize = fs.statSync(webpPath).size;

    // Generate small JPG (400px wide)
    const smJpgPath = path.join(blogDir, `${base}-sm.jpg`);
    await sharp(inputPath)
      .resize(SMALL_WIDTH)
      .jpeg({ quality: JPEG_QUALITY })
      .toFile(smJpgPath);

    // Generate small WebP (400px wide)
    const smWebpPath = path.join(blogDir, `${base}-sm.webp`);
    await sharp(inputPath)
      .resize(SMALL_WIDTH)
      .webp({ quality: WEBP_QUALITY })
      .toFile(smWebpPath);

    const origSize = fs.statSync(inputPath).size;
    const savings = (((origSize - webpSize) / origSize) * 100).toFixed(1);
    console.log(
      `  ✓ ${file} (${(origSize / 1024).toFixed(0)}KB → WebP ${(webpSize / 1024).toFixed(0)}KB, -${savings}%)`
    );
  }

  console.log("\nImage optimization complete.");
}

optimizeImages().catch((err) => {
  console.error("Image optimization failed:", err);
  process.exit(1);
});
