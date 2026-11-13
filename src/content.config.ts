import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    group: z.enum(['protocolo', 'desarrolladores', 'comunidad', 'proyecto', 'legal']),
    slug: z.string().optional(), // becomes the route (entry id), e.g. protocolo/consenso
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { pages };
