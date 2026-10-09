import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import preact from '@astrojs/preact';

export default defineConfig({
  // 仮の公開URL。本番URL確定後に置き換える（#6）
  site: 'https://study-d.workers.dev',
  integrations: [
    preact(),
    starlight({
      title: 'StudyD',
      locales: { root: { label: '日本語', lang: 'ja' } },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/iori-sutani/study-d' }],
      components: {
        Head: './src/components/Head.astro',
        Footer: './src/components/SiteFooter.astro',
      },
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
				label: '名車図鑑',
				items: [
				{ label: 'スプリンタートレノ AE86', link: '/cars/ae86-sprinter-trueno/' },
				{ label: 'RX-7 FD3S', link: '/cars/fd3s-rx-7/' },
				{ label: 'スカイラインGT-R R32', link: '/cars/bnr32-skyline-gt-r/' },
				{ label: 'シルビア S13', link: '/cars/s13-silvia/' },
				{ label: 'シビック EG6', link: '/cars/eg6-civic/' },
				{ label: 'ロードスター NA6CE', link: '/cars/na6ce-roadster/' },
				],
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