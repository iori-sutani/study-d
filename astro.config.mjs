import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [
    preact(),
    starlight({
      title: '[サイト名]',
      locales: { root: { label: '日本語', lang: 'ja' } },
      sidebar: [
			{
				label: '走りの理論',
				items: [{ autogenerate: { directory: 'theory' } }],
			},
			{
				label: 'クルマの仕組み',
				items: [{ autogenerate: { directory: 'mechanism' } }],
			},
			{
				label: 'その他',
				items: [
				{ label: '用語辞典', slug: 'glossary' },
				{ label: '免責事項', slug: 'disclaimer' },
				],
			},
		],
    }),
  ],
});