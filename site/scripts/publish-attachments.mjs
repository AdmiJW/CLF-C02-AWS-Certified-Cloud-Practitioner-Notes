import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import { discoverNotes, REPO_ROOT } from '../src/lib/discovery.mjs';
import { attachmentsFromTree } from '../src/lib/markdown.mjs';

const parser = unified().use(remarkParse).use(remarkGfm);
const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const assets = new Map();
for (const note of await discoverNotes()) {
  for (const asset of await attachmentsFromTree(parser.parse(note.body), path.join(REPO_ROOT, note.sourcePath))) assets.set(asset.relative, asset);
}
for (const asset of assets.values()) {
  const target = path.join(dist, asset.relative);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(asset.absolute, target);
}
console.log(`Published ${assets.size} referenced attachments.`);
