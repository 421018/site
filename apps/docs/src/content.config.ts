/**
 * Content model of the documentation site. Interior pages and site-wide text
 * use the shared schemas of @42chain/kit; network data comes from
 * @42chain/network, the same files the main site reads.
 */
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { pageSchema, pagesLoader, perLanguage, siteTextSchema } from '@42chain/kit/schemas';
import { catalogPath } from '@42chain/kit/catalog';
import { dataFile, networkSchema, providerSchema, serviceSchema } from '@42chain/network/schemas';

const pages = defineCollection({ loader: pagesLoader(catalogPath('docs')), schema: pageSchema });
const home = defineCollection({
  loader: perLanguage(catalogPath('docs'), 'home.md'),
  schema: z
    .object({
      eyebrow: z.string(),
      title: z.string(),
      lead: z.string(),
      searchPrompt: z.string(),
      /** "How the protocol is built": its layers, top to bottom. */
      layers: z
        .object({
          title: z.string(),
          items: z.array(z.object({ label: z.string(), text: z.string(), tag: z.string(), href: z.string().optional() }).strict()),
        })
        .strict()
        .optional(),
      /** Title of the quick network data panel (from the catalog's network data). */
      quickData: z.string().optional(),
    })
    .strict(),
});
const site = defineCollection({ loader: perLanguage(catalogPath('docs'), 'site.md'), schema: siteTextSchema });
const networks = defineCollection({ loader: file(dataFile('networks')), schema: networkSchema });
const services = defineCollection({ loader: file(dataFile('services')), schema: serviceSchema });
const providers = defineCollection({ loader: file(dataFile('providers')), schema: providerSchema });

export const collections = { pages, home, site, networks, services, providers };
