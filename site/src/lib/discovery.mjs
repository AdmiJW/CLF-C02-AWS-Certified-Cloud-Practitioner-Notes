import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { REPOSITORY, SOURCE_BRANCH, INTRODUCTION_SOURCE } from './config.mjs';

// npm scripts and GitHub Actions run from site/, including bundled prerender code.
export const REPO_ROOT = path.resolve(process.cwd(), '..');

/** @param {string} title */
export function slugify(title) {
  return title.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    .replace(/&/g, ' and ').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
}

/** @param {string} sourcePath @param {string} body */
export function describeNote(sourcePath, body) {
  const match = sourcePath.match(/^(\d{2}) - (.+)\.md$/);
  if (!match) throw new Error(`Unsupported chapter filename: ${sourcePath}`);
  const title = match[2].trim();
  const slug = slugify(title);
  if (!slug) throw new Error(`Chapter title produces an empty route: ${sourcePath}`);
  const paragraph = body.split(/\r?\n\r?\n/).map(block => block.trim())
    .find(block => block && !/^(#|[-*+]\s|\d+\.\s|\||```|>|!\[)/.test(block));
  const description = (paragraph ?? `Study notes for ${title}.`)
    .replace(/[`*_~]/g, '').replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1').replace(/\s+/g, ' ').trim();
  return {
    id: sourcePath.slice(0, -3), sourcePath, number: match[1], order: Number(match[1]), title,
    route: `/notes/${slug}/`, body,
    description: description.length > 170 ? `${description.slice(0, 167).trimEnd()}…` : description,
    wordCount: body.trim().split(/\s+/).filter(Boolean).length,
    isIntroduction: sourcePath === INTRODUCTION_SOURCE,
    sourceUrl: `${REPOSITORY}/blob/${SOURCE_BRANCH}/${encodeURIComponent(sourcePath)}`
  };
}

/** @param {ReturnType<typeof describeNote>[]} notes */
export function orderAndValidate(notes) {
  const ordered = [...notes].sort((a, b) => a.order - b.order || a.sourcePath.localeCompare(b.sourcePath));
  const routes = new Map();
  for (const note of ordered) {
    if (routes.has(note.route)) throw new Error(`Route collision: ${routes.get(note.route)} and ${note.sourcePath} resolve to ${note.route}`);
    routes.set(note.route, note.sourcePath);
  }
  return ordered;
}

/** @param {string} [root] */
export async function discoverNotes(root = REPO_ROOT) {
  const files = (await readdir(root, { withFileTypes: true }))
    .filter(file => file.isFile() && /^\d{2} - .+\.md$/.test(file.name));
  const notes = await Promise.all(files.map(async file => describeNote(file.name, await readFile(path.join(root, file.name), 'utf8'))));
  return orderAndValidate(notes);
}

/** @param {number} words */
export function readingMinutes(words) { return Math.max(1, Math.round(words / 220)); }
