import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: '[サイト名]',
      locales: { root: { label: '日本語', lang: 'ja' } },
      sidebar: [
        { label: '走りの理論', autogenerate: { directory: 'theory' } },
        { label: 'クルマの仕組み', autogenerate: { directory: 'mechanism' } },
        { label: 'その他', items: [
          { label: '用語辞典', slug: 'glossary' },
          { label: '免責事項', slug: 'disclaimer' },
        ]},
      ],
    }),
  ],
});