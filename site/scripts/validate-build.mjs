import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fromHtml } from 'hast-util-from-html';
import { discoverNotes } from '../src/lib/discovery.mjs';
import { BASE_PATH, SITE_ORIGIN, SITE_TITLE, withBase } from '../src/lib/config.mjs';
import { walk } from '../src/lib/markdown.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const required = ['index.html', '404.html', 'favicon.svg', 'robots.txt', 'pagefind/pagefind.js', 'pagefind/pagefind-ui.js', 'pagefind/pagefind-ui.css', 'sitemap-index.xml', 'sitemap-0.xml'];
for (const file of required) await access(path.join(dist, file));
const pages = new Map();
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(file);
    else if (entry.name.endsWith('.html')) {
      const relative = path.relative(dist, file).replaceAll('\\', '/');
      const html = await readFile(file, 'utf8');
      const tree = fromHtml(html);
      const ids = new Set();
      const elements = [];
      walk(tree, node => {
        if (node.type !== 'element') return;
        elements.push(node);
        if (node.properties?.id) {
          if (ids.has(node.properties.id)) throw new Error('Duplicate heading/element ID in ' + relative + ': ' + node.properties.id);
          ids.add(node.properties.id);
        }
      });
      pages.set(relative, { html, elements, ids });
    }
  }
}
await collect(dist);
const notes = await discoverNotes();
const expected = new Set(notes.map(note => note.route.slice(1) + 'index.html'));
const actual = [...pages.keys()].filter(file => file.startsWith('notes/'));
if (actual.length !== expected.size || actual.some(file => !expected.has(file))) throw new Error('Generated chapter pages disagree with the source catalogue.');
for (const note of notes) {
  const file = note.route.slice(1) + 'index.html';
  const page = pages.get(file);
  if (!page) throw new Error('Missing page: ' + note.sourcePath);
  if (page.elements.filter(node => node.tagName === 'h1').length !== 1) throw new Error('Expected one title H1: ' + file);
  if (page.elements.filter(node => Object.hasOwn(node.properties, 'dataPagefindBody')).length !== 1) throw new Error('Expected one article indexing boundary: ' + file);
  const canonical = page.elements.find(node => node.tagName === 'link' && node.properties.rel?.includes('canonical'))?.properties.href;
  if (canonical !== new URL(withBase(note.route), SITE_ORIGIN).href) throw new Error('Wrong canonical URL: ' + file);
  const prose = page.elements.find(node => node.properties.className?.includes('prose'));
  const headings = [];
  walk(prose, node => { if (node.type === 'element' && /^h[2-6]$/.test(node.tagName)) headings.push(node); });
  for (const heading of headings) {
    if (!heading.properties.id || !heading.children.some(child => child.type === 'element' && child.properties?.className?.includes('heading-anchor'))) throw new Error('Missing static heading permalink: ' + file);
  }
}
if (!pages.get('index.html').html.includes(SITE_TITLE)) throw new Error('Homepage identity is missing.');
const broken = [];
for (const [file, page] of pages) {
  const route = file === 'index.html' ? '' : file.replace(/index\.html$/, '');
  const pageUrl = new URL(withBase(route), SITE_ORIGIN);
  for (const node of page.elements) {
    if (node.tagName === 'link' && node.properties.rel?.includes('canonical')) continue;
    for (const attribute of ['href', 'src']) {
      const value = node.properties[attribute];
      if (typeof value !== 'string' || /^(data:|mailto:|tel:|javascript:)/i.test(value)) continue;
      const url = new URL(value, pageUrl);
      if (url.origin !== SITE_ORIGIN) continue;
      if (!url.pathname.startsWith(BASE_PATH)) { broken.push(file + ' -> missing repository base: ' + value); continue; }
      let relative = decodeURIComponent(url.pathname.slice(BASE_PATH.length));
      if (!relative || relative.endsWith('/')) relative += 'index.html';
      const target = path.resolve(dist, relative);
      if (path.relative(dist, target).startsWith('..')) { broken.push(file + ' -> invalid target: ' + value); continue; }
      try { await access(target); }
      catch { broken.push(file + ' -> missing target: ' + value); continue; }
      if (url.hash && pages.has(relative)) {
        const id = decodeURIComponent(url.hash.slice(1));
        if (!pages.get(relative).ids.has(id)) broken.push(file + ' -> missing heading: ' + value);
      }
    }
  }
}
const sitemap = await readFile(path.join(dist, 'sitemap-0.xml'), 'utf8');
for (const note of notes) if (!sitemap.includes(new URL(withBase(note.route), SITE_ORIGIN).href)) broken.push('Missing sitemap chapter: ' + note.sourcePath);
if (broken.length) throw new Error('Invalid output:\n' + broken.slice(0, 30).join('\n'));
console.log('Validated ' + notes.length + ' discovered chapters, static permalinks, indexing boundaries, links, images, canonical URLs, sitemap, and search assets.');
