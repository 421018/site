/**
 * Content model. Everything the site shows comes from these collections:
 *
 * - `pages`: one Markdown file per interior page under content/<lang>/pages/.
 *   The folder is the section and the file path is the URL. The `index.md` of
 *   each folder also describes its section (`section:` block).
 * - `posts`: the blog ("Bitácora"), one Markdown file per post under content/<lang>/posts/.
 * - `home`: the text of the home page (content/<lang>/home.md, frontmatter only).
 * - `project`: the text of the project page, /about (content/<lang>/project.md, frontmatter only).
 * - `site`: site-wide text: brand, footer, interface labels, 404 (content/<lang>/site.md).
 *
 * The schemas are strict: a misspelled or missing field stops the build with
 * the file and field name.
 */
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { pageSchema, pagesLoader, perLanguage, postSchema, postsLoader, siteTextSchema } from '@42chain/base/kit/schemas';
import { catalogPath } from '@42chain/base/kit/catalog';

const pages = defineCollection({ loader: pagesLoader(catalogPath()), schema: pageSchema });
const posts = defineCollection({ loader: postsLoader(catalogPath()), schema: ({ image }) => postSchema(image) });

const cta = z.object({ label: z.string(), href: z.string() }).strict();

/** A block of text: paragraphs separated by a blank line. */
const prose = z.string();
/** The illustration of Infinite Drive: the engine, its kicker word and who can be a node. */
const engineArt = z.object({ name: z.string(), kicker: z.string(), labels: z.array(z.string()).min(1).max(6), aria: z.string() }).strict();

const home = defineCollection({
  loader: perLanguage(catalogPath(), 'home.md'),
  schema: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      /** The cover: kept as it is. */
      hero: z.object({ eyebrow: z.string(), title: z.string(), lead: z.string(), primary: cta, secondary: cta }).strict(),
      /** The editorial: why now, and the central idea said once. */
      editorial: z.object({ kicker: z.string(), title: z.string(), body: prose, statement: z.string(), aside: z.string().optional() }).strict(),
      /** Infinite Drive as a mechanism, drawn. */
      engine: z.object({ kicker: z.string(), title: z.string(), lead: z.string(), art: engineArt, caption: z.string(), link: cta }).strict(),
      /** What we believe: a few convictions (the project page has them all). */
      beliefs: z.object({ kicker: z.string(), title: z.string(), lead: z.string(), items: z.array(z.object({ title: z.string(), text: z.string() }).strict()).min(1).max(3), link: cta }).strict(),
      /** A story from the Bitácora, full width: the featured post. */
      story: z.object({ kicker: z.string(), link: z.string() }).strict(),
      /** Where we are going, told as a scene. */
      vision: z.object({ kicker: z.string(), title: z.string(), body: prose, link: cta }).strict(),
      /** What is being worked on now. */
      work: z.object({ kicker: z.string(), title: z.string(), body: prose, link: cta }).strict(),
      /** Latest entries from the Bitácora (the blog); the posts come from the blog itself. */
      log: z.object({ kicker: z.string(), title: z.string(), link: cta }).strict(),
      name: z.object({ kicker: z.string(), title: z.string(), lead: z.string(), link: cta }).strict(),
      closing: z.object({ title: z.string(), lead: z.string().optional(), primary: cta, secondary: cta }).strict(),
    })
    .strict(),
});

/** The project page (/about): the same kind of structured text as the home page. */
const project = defineCollection({
  loader: perLanguage(catalogPath(), 'project.md'),
  schema: z
    .object({
      title: z.string(),
      description: z.string(),
      kicker: z.string(),
      what: z.object({ id: z.string(), kicker: z.string(), title: z.string(), body: prose, art: engineArt, caption: z.string() }).strict(),
      beliefs: z.object({ id: z.string(), kicker: z.string(), title: z.string(), body: prose, sources: z.array(cta).length(2), items: z.array(z.object({ icon: z.enum(['open', 'privacy', 'code', 'vote', 'verify', 'node']), title: z.string(), text: z.string(), source: z.string() }).strict()).min(1), note: z.string() }).strict(),
      quote: z.string(),
      organization: z.object({ id: z.string(), kicker: z.string(), title: z.string(), body: prose, cards: z.array(z.object({ title: z.string(), text: z.string() }).strict()).length(4) }).strict(),
      work: z.object({ id: z.string(), kicker: z.string(), title: z.string(), body: prose, steps: z.array(z.string()).min(2) }).strict(),
      vision: z.object({ id: z.string(), kicker: z.string(), title: z.string(), body: prose }).strict(),
      doors: z.array(z.object({ kicker: z.string(), title: z.string(), text: z.string(), href: z.string() }).strict()).length(2),
    })
    .strict(),
});

const site = defineCollection({
  loader: perLanguage(catalogPath(), 'site.md'),
  schema: siteTextSchema,
});


export const collections = { pages, posts, home, project, site };
