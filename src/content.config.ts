import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	cars: defineCollection({
		loader: glob({ pattern: '**/*.md', base: './src/content/cars' }),
		schema: z.object({
			name: z.string().describe('車名（例：スプリンタートレノ）'),
			model: z.string().describe('型式（例：AE86）'),
			maker: z.string().describe('メーカー（例：トヨタ）'),
			years: z.string().describe('販売期間（例：1983-1987）'),
			engine: z.string().describe('エンジン型式（例：4A-GEU）'),
			drivetrain: z.enum(['FF', 'FR', 'MR', 'RR', '4WD']).describe('駆動方式'),
			weightKg: z.number().positive().describe('車両重量（kg）'),
			powerPs: z.number().positive().describe('最高出力（PS）'),
			blurb: z.string().describe('一覧用の1文紹介'),
			relatedTheory: z
				.array(z.string())
				.default([])
				.describe('関連する解説記事のslug（例：theory/grip）'),
		}),
	}),
};
