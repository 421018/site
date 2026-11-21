/**
 * Content model. Everything the site shows comes from these collections:
 *
 * - `pages`: one Markdown file per interior page under content/<lang>/pages/.
 *   The folder is the section and the file path is the URL. The `index.md` of
 *   each folder also describes its section (`section:` block).
 * - `posts`: the blog ("Bitácora"), one Markdown file per post under content/<lang>/posts/.
 * - `home`: the text of the home page (content/<lang>/home.md, frontmatter only).
 * - `site`: site-wide text: brand, footer, interface labels, 404 (content/<lang>/site.md).
 *
 * The schemas are strict: a misspelled or missing field stops the build with
 * the file and field name.
 */
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { pageSchema, pagesLoader, perLanguage, postSchema, postsLoader, siteTextSchema } from './kit/schemas';
import { catalogPath } from './kit/catalog';
import { iconNames } from './ui/art/icons.ts';

const pages = defineCollection({ loader: pagesLoader(catalogPath()), schema: pageSchema });
const posts = defineCollection({ loader: postsLoader(catalogPath()), schema: ({ image }) => postSchema(image) });

const cta = z.object({ label: z.string(), href: z.string() }).strict();
const icon = z.enum(iconNames);
const block = { kicker: z.string(), title: z.string(), lead: z.string().optional(), link: cta.optional() };

const home = defineCollection({
  loader: perLanguage(catalogPath(), 'home.md'),
  schema: z
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
      /** How it works, told in a few paragraphs; the link leads to the technical side. */
      engine: z.object({ ...block, link: cta }).strict(),
      /** Latest entries from the Bitácora (the blog); the posts come from the blog itself. */
      log: z.object({ ...block, link: cta }).strict(),
      start: z.object({ ...block, paths: z.array(z.object({ icon, label: z.string(), text: z.string(), href: z.string() }).strict()) }).strict(),
      name: z.object({ ...block }).strict(),
      closing: z.object({ title: z.string(), lead: z.string().optional(), primary: cta, secondary: cta }).strict(),
    })
    .strict(),
});

const site = defineCollection({
  loader: perLanguage(catalogPath(), 'site.md'),
  schema: siteTextSchema,
});


export const collections = { pages, posts, home, site };
