/**
 * Content model. Everything the site shows comes from these collections:
 *
 * - `pages`: one Markdown/MDX file per interior page under src/content/pages/.
 *   The folder is the section and the file path is the URL. The `index.md` of
 *   each folder also describes its section (`section:` block).
 * - `home`: the text of the home page (src/content/home.md, frontmatter only).
 * - `site`: site-wide text: brand, footer, interface labels, 404 (src/content/site.md).
 *
 * The schemas are strict: a misspelled or missing field stops the build with
 * the file and field name.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const color = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'use a 6-digit hex color, e.g. "#5BF0C8"');
const link = z.object({ label: z.string(), href: z.string() }).strict();

/** Section settings, only valid in a folder's index.md. */
const section = z
  .object({
    /** Name in the main menu, the side index header and the page kicker. */
    label: z.string(),
    /** Position in the main menu and the footer (lower goes first). */
    weight: z.number().int(),
    /** Accent on dark backgrounds and link color on the reading surface. */
    accent: color.optional(),
    ink: color.optional(),
    /** Number the pages in the side index (1, 2, 3…). */
    numbered: z.boolean().default(false),
    /** Show "previous / next" at the end of each page. */
    sequential: z.boolean().default(false),
    /** Extra links below a separator in the side index (and in the footer). */
    links: z.array(link).default([]),
    /**
     * Show this section's pages inside another section's side index instead of
     * in the main menu (e.g. `legal` lives under `proyecto`). Colors and menu
     * highlight are inherited from that section unless set here.
     */
    attachTo: z.string().optional(),
  })
  .strict();

const pages = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/pages',
    // The file path is the URL: protocolo/index.md → protocolo, protocolo/consenso.mdx → protocolo/consenso
    generateId: ({ entry }) => entry.replace(/\.mdx?$/, '').replace(/(^|\/)index$/, ''),
  }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string(),
      /** Label in the side index and footer, when it differs from the title. */
      menuTitle: z.string().optional(),
      /** Order inside the section (lower goes first). The index page always goes first. */
      weight: z.number().int().default(100),
      /** Optional. Without it, the "last reviewed" date is the file's last commit date. */
      updated: z.coerce.date().optional(),
      /** Drafts are visible with `npm run dev` and left out of the published site. */
      draft: z.boolean().default(false),
      section: section.optional(),
    })
    .strict(),
});

const cta = z.object({ label: z.string(), href: z.string() }).strict();
const block = { kicker: z.string(), title: z.string(), lead: z.string().optional(), link: cta.optional() };

const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content' }),
  schema: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      hero: z.object({ eyebrow: z.string(), title: z.string(), lead: z.string(), primary: cta, secondary: cta }).strict(),
      build: z
        .object({
          ...block,
          code: z.object({ file: z.string(), label: z.string(), text: z.string() }).strict(),
          facts: z.array(z.object({ value: z.string(), label: z.string() }).strict()),
        })
        .strict(),
      uses: z.object({ ...block, stories: z.array(z.object({ title: z.string(), text: z.string() }).strict()) }).strict(),
      people: z.object({ ...block, rows: z.array(z.object({ who: z.string(), what: z.string() }).strict()) }).strict(),
      start: z.object({ ...block, paths: z.array(z.object({ label: z.string(), text: z.string(), href: z.string() }).strict()) }).strict(),
      name: z.object({ ...block }).strict(),
      closing: z.object({ title: z.string(), primary: cta, secondary: cta }).strict(),
    })
    .strict(),
});

const site = defineCollection({
  loader: glob({ pattern: 'site.md', base: './src/content' }),
  schema: z
    .object({
      name: z.string(),
      tagline: z.string(),
      description: z.string(),
      header: z.object({ homeLink: z.string(), mainNav: z.string(), menuButton: z.string() }).strict(),
      footer: z.object({ credit: z.string(), license: z.string(), note: z.string() }).strict(),
      page: z.object({ lastReviewed: z.string(), editPage: z.string(), previous: z.string(), next: z.string(), chapters: z.string() }).strict(),
      notFound: z.object({ title: z.string(), label: z.string(), heading: z.string(), action: z.string() }).strict(),
    })
    .strict(),
});

export const collections = { pages, home, site };
