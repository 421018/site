/**
 * Content model of the documentation site. Interior pages and site-wide text
 * use the schemas in src/kit; network data comes from
 * content/network/ (networks, services, providers).
 */
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { pageSchema, pagesLoader, perLanguage, siteTextSchema } from './kit/schemas';
import { catalogPath } from './kit/catalog';
import { dataFile, networkSchema, providerSchema, serviceSchema } from './network/schemas';

const pages = defineCollection({ loader: pagesLoader(catalogPath()), schema: pageSchema });
const home = defineCollection({
  loader: perLanguage(catalogPath(), 'home.md'),
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
const site = defineCollection({ loader: perLanguage(catalogPath(), 'site.md'), schema: siteTextSchema });
const networks = defineCollection({ loader: file(dataFile('networks')), schema: networkSchema });
const services = defineCollection({ loader: file(dataFile('services')), schema: serviceSchema });
const providers = defineCollection({ loader: file(dataFile('providers')), schema: providerSchema });

export const collections = { pages, home, site, networks, services, providers };
