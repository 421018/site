/**
 * Content model. Everything the site shows comes from these collections:
 *
 * - `pages`: one Markdown file per interior page under the catalog's site/pages/.
 *   The folder is the section and the file path is the URL. The `index.md` of
 *   each folder also describes its section (`section:` block).
 * - `home`: the text of the home page (site/home.md, frontmatter only).
 * - `site`: site-wide text: brand, footer, interface labels, 404 (site/site.md).
 * - `networks`, `services`, `providers`: network parameters and the public
 *   provider directory, from the catalog's network/ folder.
 *
 * The schemas are strict: a misspelled or missing field stops the build with
 * the file and field name.
 */
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { dataFile, networkSchema, providerSchema, serviceSchema } from '@42chain/network/schemas';
import { pageSchema, pagesLoader, siteTextSchema } from '@42chain/kit/schemas';
import { catalogPath } from '@42chain/kit/catalog';

const pages = defineCollection({ loader: pagesLoader(catalogPath('site', 'pages')), schema: pageSchema });

const cta = z.object({ label: z.string(), href: z.string() }).strict();
const block = { kicker: z.string(), title: z.string(), lead: z.string().optional(), link: cta.optional() };

const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: catalogPath('site') }),
  schema: ({ image }) => z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      hero: z
        .object({
          eyebrow: z.string(),
          title: z.string(),
          lead: z.string(),
          primary: cta,
          secondary: cta,
          /** Technical signature shown under the buttons. */
          specs: z.array(z.string()).optional(),
          /** Label of the illustrative block strip at the bottom of the hero. */
          chainLabel: z.string().optional(),
        })
        .strict(),
      build: z
        .object({
          ...block,
          code: z.object({ file: z.string(), label: z.string(), text: z.string() }).strict(),
          facts: z.array(z.object({ value: z.string(), label: z.string() }).strict()),
        })
        .strict(),
      uses: z
        .object({
          ...block,
          stories: z.array(
            z
              .object({
                title: z.string(),
                text: z.string(),
                /** Optional photo (path relative to home.md) with its required description and credit. */
                image: image().optional(),
                alt: z.string().optional(),
                credit: z.string().optional(),
                /** Optional link to the use case page. */
                href: z.string().optional(),
              })
              .strict()
              .refine((s) => !s.image || (s.alt && s.credit), 'a story with an image needs "alt" and "credit"'),
          ),
        })
        .strict(),
      people: z.object({ ...block, rows: z.array(z.object({ who: z.string(), what: z.string() }).strict()) }).strict(),
      start: z.object({ ...block, paths: z.array(z.object({ label: z.string(), text: z.string(), href: z.string() }).strict()) }).strict(),
      name: z.object({ ...block }).strict(),
      closing: z.object({ title: z.string(), primary: cta, secondary: cta }).strict(),
    })
    .strict(),
});

const site = defineCollection({
  loader: glob({ pattern: 'site.md', base: catalogPath('site') }),
  schema: siteTextSchema,
});

const networks = defineCollection({ loader: file(dataFile('networks')), schema: networkSchema });
const services = defineCollection({ loader: file(dataFile('services')), schema: serviceSchema });
const providers = defineCollection({ loader: file(dataFile('providers')), schema: providerSchema });

export const collections = { pages, home, site, networks, services, providers };
