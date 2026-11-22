/**
 * Content model. Everything 42chain.org shows comes from these collections,
 * one set per area: the site (content/site/) and the documentation
 * (content/docs/, served under /docs).
 *
 * The site:
 * - `pages`: one Markdown file per interior page under site/<lang>/pages/.
 *   The folder is the section and the file path is the URL. The `index.md` of
 *   each folder also describes its section (`section:` block).
 * - `posts`: the blog, one Markdown file per post under site/<lang>/posts/.
 * - `home`: the text of the home page (site/<lang>/home.md, frontmatter only).
 * - `project`: the text of the project page, /about (site/<lang>/project.md, frontmatter only).
 * - `site`: site-wide text: brand, footer, interface labels, 404 (site/<lang>/site.md).
 *
 * The documentation: `docsPages`, `docsHome` and `docsSite`, the same kinds of
 * files under docs/<lang>/, plus the network data in docs/network/
 * (`networks`, `services`, `providers`), which the console uses too.
 *
 * The console: `consoleSite` (console/<lang>/site.md) and `consoleText`
 * (console/<lang>/console.md), the texts of its screens.
 *
 * The schemas are strict: a misspelled or missing field stops the build with
 * the file and field name.
 */
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { pageSchema, pagesLoader, perLanguage, postSchema, postsLoader, siteTextSchema } from './kit/schemas';
import { file } from 'astro/loaders';
import { catalogPath } from './kit/catalog';
import { iconNames } from './art/icons';
import { dataFile, networkSchema, providerSchema, serviceSchema } from './network/schemas';

const pages = defineCollection({ loader: pagesLoader(catalogPath('site')), schema: pageSchema });
const posts = defineCollection({ loader: postsLoader(catalogPath('site')), schema: ({ image }) => postSchema(image) });

const cta = z.object({ label: z.string(), href: z.string() }).strict();

/** A block of text: paragraphs separated by a blank line. */
const prose = z.string();
/** The illustration of Infinite Drive: the engine, its kicker word and who can be a node. */
const engineArt = z.object({ name: z.string(), kicker: z.string(), labels: z.array(z.string()).min(1).max(6), aria: z.string() }).strict();

const home = defineCollection({
  loader: perLanguage(catalogPath('site'), 'home.md'),
  schema: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      /** The cover: kept as it is. */
      hero: z.object({ eyebrow: z.string(), title: z.string(), lead: z.string(), primary: cta, secondary: cta }).strict(),
      /** The network, now: live figures and the latest blocks, read from the browser. */
      live: z
        .object({
          kicker: z.string(),
          title: z.string(),
          lead: z.string(),
          height: z.string(),
          pace: z.string(),
          online: z.string(),
          /** "{n} s": the time per block. */
          seconds: z.string(),
          /** Label of a block in the stream: "Bloque {n}". */
          block: z.string(),
          /** Shown until the first reading arrives, and when no provider answers. */
          waiting: z.string(),
          unavailable: z.string(),
          link: cta,
        })
        .strict(),
      /** The editorial: why now, and the central idea said once. */
      editorial: z.object({ kicker: z.string(), title: z.string(), body: prose, statement: z.string(), aside: z.string().optional() }).strict(),
      /** Infinite Drive as a mechanism, drawn. */
      engine: z.object({ kicker: z.string(), title: z.string(), lead: z.string(), art: engineArt, caption: z.string(), link: cta }).strict(),
      /** What we believe: a few convictions (the project page has them all). */
      beliefs: z.object({ kicker: z.string(), title: z.string(), lead: z.string(), items: z.array(z.object({ title: z.string(), text: z.string() }).strict()).min(1).max(3), link: cta }).strict(),
      /** A story from the blog, full width: the featured post. */
      story: z.object({ kicker: z.string(), link: z.string() }).strict(),
      /** Where we are going, told as a scene. */
      vision: z.object({ kicker: z.string(), title: z.string(), body: prose, link: cta }).strict(),
      /** What is being worked on now. */
      work: z.object({ kicker: z.string(), title: z.string(), body: prose, link: cta }).strict(),
      /** Latest entries from the blog; the posts come from the blog itself. */
      blog: z.object({ kicker: z.string(), title: z.string(), link: cta }).strict(),
      /** Ways in: one card per kind of visitor. */
      paths: z
        .object({
          kicker: z.string(),
          title: z.string(),
          items: z.array(z.object({ icon: z.enum(iconNames), title: z.string(), text: z.string(), href: z.string() }).strict()).min(2).max(4),
        })
        .strict(),
      name: z.object({ kicker: z.string(), title: z.string(), lead: z.string(), link: cta }).strict(),
      closing: z.object({ title: z.string(), lead: z.string().optional(), primary: cta, secondary: cta }).strict(),
    })
    .strict(),
});

/** The project page (/about): the same kind of structured text as the home page. */
const project = defineCollection({
  loader: perLanguage(catalogPath('site'), 'project.md'),
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
  loader: perLanguage(catalogPath('site'), 'site.md'),
  schema: siteTextSchema,
});

/* ---------- the documentation (/docs) ---------- */

const docsPages = defineCollection({ loader: pagesLoader(catalogPath('docs')), schema: pageSchema });
const docsHome = defineCollection({
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
const docsSite = defineCollection({ loader: perLanguage(catalogPath('docs'), 'site.md'), schema: siteTextSchema });
const networks = defineCollection({ loader: file(dataFile('networks')), schema: networkSchema });
const services = defineCollection({ loader: file(dataFile('services')), schema: serviceSchema });
const providers = defineCollection({ loader: file(dataFile('providers')), schema: providerSchema });

/* ---------- the console (/console) ---------- */

const head = z.object({ kicker: z.string(), title: z.string(), lead: z.string() }).strict();
const consoleSite = defineCollection({ loader: perLanguage(catalogPath('console'), 'site.md'), schema: siteTextSchema });
/** The texts of the console's screens (console/<lang>/console.md); the screens themselves are code. */
const consoleText = defineCollection({
  loader: perLanguage(catalogPath('console'), 'console.md'),
  schema: z
    .object({
      nav: z.object({ overview: z.string(), status: z.string(), events: z.string(), networks: z.string(), tools: z.string() }).strict(),
      overview: head.extend({ live: z.string(), cards: z.object({ status: z.string(), events: z.string(), networks: z.string(), tools: z.string() }).strict() }).strict(),
      status: head
        .extend({
          height: z.string(), blockTime: z.string(), online: z.string(), gas: z.string(),
          provider: z.string(), endpoint: z.string(), state: z.string(), latency: z.string(),
          ok: z.string(), behind: z.string(), down: z.string(), downNote: z.string(), wrongChain: z.string(), checking: z.string(),
          /** "{n} s" */
          seconds: z.string(),
          /** "Updated at {time}" */
          updated: z.string(),
          noscript: z.string(),
        })
        .strict(),
      events: head.extend({ empty: z.string(), emptyText: z.string(), types: z.string(), typeNames: z.array(z.string()).min(1) }).strict(),
      networks: head.extend({ params: z.string(), wallet: z.string(), directory: z.string() }).strict(),
      tools: head,
    })
    .strict(),
});

export const collections = { pages, posts, home, project, site, docsPages, docsHome, docsSite, networks, services, providers, consoleSite, consoleText };
