import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { createMarkdownProcessor, rehypeHeadingIds } from '@astrojs/markdown-remark';
import { discoverNotes, describeNote, orderAndValidate } from '../src/lib/discovery.mjs';
import { normalizeHeadings, readerElements, attachmentsFromTree, resolveAttachment } from '../src/lib/markdown.mjs';
import { BASE_PATH } from '../src/lib/config.mjs';

async function fixture(run) {
  const root = await mkdtemp(path.join(tmpdir(), 'clf-site-tests-'));
  try { return await run(root); }
  finally {
    const relative = path.relative(tmpdir(), root);
    if (relative.startsWith('..') || path.isAbsolute(relative) || !path.basename(root).startsWith('clf-site-tests-')) throw new Error('Invalid fixture cleanup path');
    await rm(root, { recursive: true, force: true });
  }
}
test('discovers only flat numbered Markdown; future chapters work without registration', async () => fixture(async root => {
  await mkdir(path.join(root, 'site'));
  await mkdir(path.join(root, '01 - Group'));
  for (const name of ['00 - Course Introduction.md', '09 - Zulu.md', '10 - Alpha.md', 'README.md', 'WEBSITE-HANDOFF.md', 'site/11 - Ignore.md', '01 - Group/02 - Ignore.md']) await writeFile(path.join(root, name), '# Notes\n\nA source paragraph.');
  assert.deepEqual((await discoverNotes(root)).map(note => note.number), ['00', '09', '10']);
  await writeFile(path.join(root, '11 - A new chapter.md'), '# New\n\nNew chapter text.');
  const notes = await discoverNotes(root);
  assert.equal(notes.length, 4);
  assert.equal(notes.at(-1).route, '/notes/a-new-chapter/');
  assert.equal(notes[0].isIntroduction, true);
}));
test('route collisions fail with both filenames', () => {
  assert.throws(() => orderAndValidate([describeNote('01 - Same Topic.md', ''), describeNote('02 - Same-Topic.md', '')]), /Route collision: 01 - Same Topic\.md and 02 - Same-Topic\.md/);
});
test('render-time normalization preserves text and yields unique static anchors', async () => {
  const source = '# Repeated\n\n## Subsection\n\nUnicode: 云 ☁ **important**.\n\n# Repeated\n\n###### Deep heading\n\n| A | B |\n| - | - |\n| x | y |';
  const renderer = await createMarkdownProcessor({ remarkPlugins: [normalizeHeadings], rehypePlugins: [rehypeHeadingIds, readerElements], syntaxHighlight: false });
  const result = await renderer.render(source);
  assert.deepEqual(result.metadata.headings.map(heading => [heading.depth, heading.slug]), [[2, 'repeated'], [3, 'subsection'], [2, 'repeated-1'], [6, 'deep-heading']]);
  assert.ok(!result.code.includes('<h1'));
  assert.match(result.code, /class="heading-anchor"/);
  assert.match(result.code, /Unicode: 云 ☁/);
  assert.match(result.code, /class="table-scroll"/);
  assert.equal((result.code.match(/<table/g) ?? []).length, 1);
});
test('headings already below H1 retain their hierarchy', async () => {
  const renderer = await createMarkdownProcessor({ remarkPlugins: [normalizeHeadings], syntaxHighlight: false });
  assert.deepEqual((await renderer.render('## Section\n\n### Detail')).metadata.headings.map(heading => heading.depth), [2, 3]);
});
test('attachments preserve case, spaces, Unicode and reference-image syntax', async () => fixture(async root => {
  await mkdir(path.join(root, 'Attachments'));
  await writeFile(path.join(root, 'Attachments', 'Cloud 图.PNG'), 'fixture');
  const source = path.join(root, '01 - Test.md');
  const codeFence = String.fromCharCode(96);
  const tree = unified().use(remarkParse).parse('![Diagram](./Attachments/Cloud%20%E5%9B%BE.PNG)\n\n![Reference][cloud]\n\n[cloud]: ./Attachments/Cloud%20%E5%9B%BE.PNG\n\n' + codeFence + '![not an image](missing.png)' + codeFence);
  const assets = await attachmentsFromTree(tree, source, root);
  assert.equal(assets.length, 2);
  assert.equal(assets[0].url, BASE_PATH + 'Attachments/Cloud%20%E5%9B%BE.PNG');
  assert.equal(resolveAttachment('https://example.com/image.png', source, root), null);
}));
test('missing local attachments stop publishing', async () => fixture(async root => {
  const tree = unified().use(remarkParse).parse('![Missing](./Attachments/Absent.png)');
  await assert.rejects(attachmentsFromTree(tree, path.join(root, '01 - Test.md'), root), /Missing attachment/);
}));
test('attachments cannot escape the repository', () => {
  assert.throws(() => resolveAttachment('../../outside.png', path.join(tmpdir(), 'clf-root', '01 - Test.md'), path.join(tmpdir(), 'clf-root')), /outside the repository/);
});
