import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { larandemalSchema } from '../../schemas/larandemal.schema.mjs';

// Källmaterialet ligger utanför site/ (i den projektövergripande content/-mappen),
// i linje med 12-produktionsarkitektur.md: samma innehåll används både av
// webbplatsen och av export-pipelinen (scripts/export-manuscript.mjs).
export const collections = {
	docs: defineCollection({
		loader: glob({
			pattern: '**/[^_]*.{md,mdx}',
			base: new URL('../../content', import.meta.url),
		}),
		schema: docsSchema({
			extend: larandemalSchema,
		}),
	}),
};
