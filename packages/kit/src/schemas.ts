/**
 * Content schemas shared by every app. An app registers them in its
 * content.config.ts under these collection names, which the kit's navigation
 * reads: `pages` (interior pages) and `site` (site-wide text).
 *
 *   pages: defineCollection({ loader: pagesLoader(catalogPath('site', 'pages')), schema: pageSchema }),
 *   site: defineCollection({ loader: glob({ pattern: 'site.md', base: catalogPath('site') }), schema: siteTextSchema }),
 *
 * The schemas are strict: a misspelled or missing field stops the build with
 * the file and field name.
 */
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const color = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'use a 6-digit hex color, e.g. "#5BF0C8"');
const link = z.object({ label: z.string(), href: z.string() }).strict();

/** Section settings, only valid in a folder's index.md. */
export const sectionSchema = z
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
     * in the main menu (e.g. `legal` lives under `codigo-abierto`). Colors and
     * menu highlight are inherited from that section unless set here.
     */
    attachTo: z.string().optional(),
  })
  .strict();

export const pageSchema = z
  .object({
    title: z.string(),
    summary: z.string(),
    /** Label in the side index and footer, when it differs from the title. */
    menuTitle: z.string().optional(),
    /** Order inside the section or group (lower goes first). The index page always goes first. */
    weight: z.number().int().default(100),
    /** Optional. Without it, the "last reviewed" date is the file's last commit date. */
    updated: z.coerce.date().optional(),
    /** Drafts are visible with `npm run dev` and left out of the published site. */
    draft: z.boolean().default(false),
    section: sectionSchema.optional(),
  })
  .strict();

/**
 * Loader for an app's pages folder in the catalog. The file path is the URL:
 * protocolo/index.md → protocolo, protocolo/consenso.md → protocolo/consenso,
 * construir/precompiles/index.md → construir/precompiles (a group inside a section).
 */
export const pagesLoader = (base: string) =>
  glob({
    // Plain Markdown only: content never carries code (widgets are ::: blocks).
    pattern: '**/*.md',
    base,
    generateId: ({ entry }) => entry.replace(/\.md$/, '').replace(/(^|\/)index$/, ''),
  });

export const siteTextSchema = z
  .object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    header: z
      .object({
        homeLink: z.string(),
        mainNav: z.string(),
        menuButton: z.string(),
        /** Optional links after the main menu, e.g. back to the main site from the docs. */
        links: z.array(link).default([]),
        /** Placeholder of the search field (apps with search enabled). */
        search: z.string().optional(),
      })
      .strict(),
    footer: z.object({ credit: z.string(), license: z.string(), note: z.string() }).strict(),
    page: z.object({ lastReviewed: z.string(), editPage: z.string(), previous: z.string(), next: z.string(), chapters: z.string() }).strict(),
    notFound: z.object({ title: z.string(), label: z.string(), heading: z.string(), action: z.string() }).strict(),
  })
  .strict();
