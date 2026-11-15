/**
 * Content model. Everything the site shows comes from these collections:
 *
 * - `pages`: one Markdown file per interior page under the catalog's site/<lang>/pages/.
 *   The folder is the section and the file path is the URL. The `index.md` of
 *   each folder also describes its section (`section:` block).
 * - `posts`: the blog ("Bitácora"), one Markdown file per post under site/<lang>/bitacora/.
 * - `home`: the text of the home page (site/<lang>/home.md, frontmatter only).
 * - `site`: site-wide text: brand, footer, interface labels, 404 (site/<lang>/site.md).
 * - `networks`, `services`, `providers`: network parameters and the public
 *   provider directory, from the catalog's network/ folder.
 *
 * The schemas are strict: a misspelled or missing field stops the build with
 * the file and field name.
 */
import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { dataFile, networkSchema, providerSchema, serviceSchema } from '@42chain/network/schemas';
import { pageSchema, pagesLoader, perLanguage, postSchema, postsLoader, siteTextSchema } from '@42chain/kit/schemas';
import { catalogPath } from '@42chain/kit/catalog';
import { iconNames } from '@42chain/ui/art/icons.ts';

const pages = defineCollection({ loader: pagesLoader(catalogPath('site')), schema: pageSchema });
const posts = defineCollection({ loader: postsLoader(catalogPath('site')), schema: ({ image }) => postSchema(image) });

const cta = z.object({ label: z.string(), href: z.string() }).strict();
const icon = z.enum(iconNames);
const block = { kicker: z.string(), title: z.string(), lead: z.string().optional(), link: cta.optional() };

const home = defineCollection({
  loader: perLanguage(catalogPath('site'), 'home.md'),
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
        })
        .strict(),
      /** Strip of verifiable protocol figures under the hero. */
      figures: z.array(z.object({ value: z.string(), label: z.string() }).strict()).min(3).max(6),
      /** The engine, piece by piece: one tab per piece. */
      engine: z
        .object({
          ...block,
          pieces: z
            .array(
              z
                .object({ icon, label: z.string(), title: z.string(), text: z.string(), points: z.array(z.string()).default([]), link: cta })
                .strict(),
            )
            .min(2),
        })
        .strict(),
      build: z
        .object({
          ...block,
          code: z.object({ file: z.string(), label: z.string(), text: z.string() }).strict(),
          /** Second link next to the first, e.g. the console. */
          secondary: cta.optional(),
        })
        .strict(),
      uses: z
        .object({
          ...block,
          stories: z.array(
            z
              .object({
                /** Short label on the card, e.g. "Registros verificables". */
                tag: z.string().optional(),
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
      start: z.object({ ...block, paths: z.array(z.object({ icon, label: z.string(), text: z.string(), href: z.string() }).strict()) }).strict(),
      name: z.object({ ...block }).strict(),
      closing: z.object({ title: z.string(), primary: cta, secondary: cta }).strict(),
    })
    .strict(),
});

const site = defineCollection({
  loader: perLanguage(catalogPath('site'), 'site.md'),
  schema: siteTextSchema,
});

const networks = defineCollection({ loader: file(dataFile('networks')), schema: networkSchema });
const services = defineCollection({ loader: file(dataFile('services')), schema: serviceSchema });
const providers = defineCollection({ loader: file(dataFile('providers')), schema: providerSchema });

export const collections = { pages, posts, home, site, networks, services, providers };
