/**
 * Content model of the documentation site. Interior pages and site-wide text
 * use the shared schemas of @42chain/kit; network data comes from
 * @42chain/network, the same files the main site reads.
 */
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { pageSchema, pagesLoader, siteTextSchema } from '@42chain/kit/schemas';
import { catalogPath } from '@42chain/kit/catalog';
import { dataFile, networkSchema, providerSchema, serviceSchema } from '@42chain/network/schemas';

const pages = defineCollection({ loader: pagesLoader(catalogPath('docs', 'pages')), schema: pageSchema });
const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: catalogPath('docs') }),
  schema: z.object({ eyebrow: z.string(), title: z.string(), lead: z.string(), searchPrompt: z.string() }).strict(),
});
const site = defineCollection({ loader: glob({ pattern: 'site.md', base: catalogPath('docs') }), schema: siteTextSchema });
const networks = defineCollection({ loader: file(dataFile('networks')), schema: networkSchema });
const services = defineCollection({ loader: file(dataFile('services')), schema: serviceSchema });
const providers = defineCollection({ loader: file(dataFile('providers')), schema: providerSchema });

export const collections = { pages, home, site, networks, services, providers };
