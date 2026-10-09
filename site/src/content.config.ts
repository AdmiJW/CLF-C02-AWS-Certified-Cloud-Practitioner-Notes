import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { NOTE_PATTERN } from './lib/config.mjs';

const notes = defineCollection({
  loader: glob({
    base: '..',
    pattern: NOTE_PATTERN,
    generateId: ({ entry }) => entry.replace(/\.md$/i, '')
  })
});

export const collections = { notes };
