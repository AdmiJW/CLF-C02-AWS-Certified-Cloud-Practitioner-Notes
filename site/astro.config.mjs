import { defineConfig } from 'astro/config';
import { unified, rehypeHeadingIds } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import { normalizeHeadings, publishImages, readerElements } from './src/lib/markdown.mjs';
import { SITE_ORIGIN, BASE_PATH } from './src/lib/config.mjs';

export default defineConfig({
  site: SITE_ORIGIN,
  base: BASE_PATH,
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    processor: unified({ remarkPlugins: [normalizeHeadings, publishImages], rehypePlugins: [rehypeHeadingIds, readerElements] }),
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
