import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const output = fileURLToPath(new URL('../out/', import.meta.url));
const assets = new Set();
let pageCount = 0;

async function checkPages(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await checkPages(filename);
    } else if (entry.name.endsWith('.html')) {
      const html = await readFile(filename, 'utf8');
      const references = [...html.matchAll(/(?:src|href)="(\/brand\/[^"?]+)(?:\?[^" ]*)?"/g)];
      assert.ok(references.length, `Missing brand assets: ${filename}`);
      assert.match(html, /rel="icon"[^>]+type="image\/png"/, `Missing PNG favicon: ${filename}`);
      for (const [, url] of references) assets.add(decodeURIComponent(url));
      pageCount += 1;
    }
  }
}

await checkPages(output);
assert.ok(pageCount > 0, 'Build the website before checking brand assets.');
for (const asset of assets) {
  // Reading metadata alone does not detect the truncated PNGs this check guards against.
  const decoded = await sharp(path.join(output, asset)).raw().toBuffer({ resolveWithObject: true });
  assert.ok(decoded.info.width > 0 && decoded.info.height > 0, `Invalid image: ${asset}`);
  console.log(`Decoded ${asset}: ${decoded.info.width}x${decoded.info.height}`);
}
console.log(`Brand assets and favicons passed on ${pageCount} exported pages.`);
