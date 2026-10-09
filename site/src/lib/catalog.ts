import { getCollection, type CollectionEntry } from 'astro:content';
import { discoverNotes } from './discovery.mjs';
export { REPOSITORY, withBase } from './config.mjs';
export { readingMinutes } from './discovery.mjs';

export type NoteRecord = Awaited<ReturnType<typeof discoverNotes>>[number] & { entry: CollectionEntry<'notes'> };

export async function getCatalogue() {
  const sources = await discoverNotes();
  const entries = new Map((await getCollection('notes')).map(entry => [entry.id, entry]));
  const notes: NoteRecord[] = sources.map(source => {
    const entry = entries.get(source.id);
    if (!entry) throw new Error(`Chapter not loaded: ${source.sourcePath}`);
    return { ...source, entry };
  });
  if (entries.size !== notes.length) throw new Error('Content loader and chapter discovery disagree.');
  const introduction = notes.find(note => note.isIntroduction);
  if (!introduction) throw new Error('Missing 00 - Course Introduction.md.');
  return { notes, introduction };
}
