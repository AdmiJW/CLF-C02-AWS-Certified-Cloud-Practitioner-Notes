import path from 'node:path';
import { access } from 'node:fs/promises';
import { REPO_ROOT } from './discovery.mjs';
import { withBase } from './config.mjs';

export function walk(node, visit) {
  visit(node);
  if (Array.isArray(node.children)) for (const child of node.children) walk(child, visit);
}

export function normalizeHeadings() {
  return tree => {
    let hasH1 = false;
    walk(tree, node => { if (node.type === 'heading' && node.depth === 1) hasH1 = true; });
    if (hasH1) walk(tree, node => { if (node.type === 'heading') node.depth = Math.min(6, node.depth + 1); });
  };
}

export function resolveAttachment(url, sourcePath, root = REPO_ROOT) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(url)) return null;
  const [pathname] = url.split(/[?#]/);
  const absolute = path.resolve(pathname.startsWith('/') ? root : path.dirname(sourcePath), decodeURIComponent(pathname).replace(/^\//, ''));
  const relative = path.relative(root, absolute);
  if (relative.startsWith('..') || path.isAbsolute(relative)) throw new Error(`Image outside the repository: ${url}`);
  const suffix = url.slice(pathname.length);
  return { absolute, relative, url: withBase(relative.split(path.sep).map(encodeURIComponent).join('/')) + suffix };
}

export async function attachmentsFromTree(tree, sourcePath, root = REPO_ROOT) {
  const assets = [];
  const imageDefinitions = new Set();
  walk(tree, node => { if (node.type === 'imageReference') imageDefinitions.add(node.identifier); });
  walk(tree, node => {
    if (node.type !== 'image' && !(node.type === 'definition' && imageDefinitions.has(node.identifier))) return;
    const asset = resolveAttachment(node.url, sourcePath, root);
    if (asset) assets.push({ ...asset, node });
  });
  for (const asset of assets) {
    try { await access(asset.absolute); }
    catch { throw new Error(`Missing attachment in ${path.basename(sourcePath)}: ${asset.relative}`); }
  }
  return assets;
}

export function publishImages() {
  return async (tree, file) => {
    const source = String(file.path || file.history?.[0] || '');
    for (const asset of await attachmentsFromTree(tree, source)) {
      asset.node.url = asset.url;
      if (asset.node.type === 'image' && !asset.node.alt) asset.node.alt = path.basename(asset.relative).replace(/\.[^.]+$/, '').replaceAll('-', ' ');
    }
  };
}

export function readerElements() {
  return tree => {
    walk(tree, node => {
      if (node.type !== 'element') return;
      if (/^h[2-6]$/.test(node.tagName) && node.properties?.id) {
        const label = [];
        walk(node, part => { if (part.type === 'text') label.push(part.value); });
        node.children.push({ type: 'element', tagName: 'a', properties: {
          href: `#${node.properties.id}`, className: ['heading-anchor'], ariaLabel: `Link to ${label.join('')}`
        }, children: [] });
      }
      if (node.tagName === 'table' && !node.data?.readerWrapped) {
        const table = { ...node, properties: { ...node.properties }, children: node.children, data: { readerWrapped: true } };
        node.tagName = 'div';
        node.properties = { className: ['table-scroll'], tabIndex: 0, role: 'region', ariaLabel: 'Scrollable table' };
        node.children = [table];
      }
    });
  };
}
