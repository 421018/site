/**
 * Content schemas shared by every app. An app registers them in its
 * content.config.ts under these collection names, which the kit's navigation
 * reads: `pages` (interior pages) and `site` (site-wide text).
 *
 *   pages: defineCollection({ loader: pagesLoader(catalogPath('site')), schema: pageSchema }),
 *   site: defineCollection({ loader: perLanguage(catalogPath('site'), 'site.md'), schema: siteTextSchema }),
 *
 * The schemas are strict: a misspelled or missing field stops the build with
 * the file and field name.
 */
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { iconNames } from '../art/icons.ts';

const color = z.string().regex(/^#[0-9a-fA-F]{6}$/, 'use a 6-digit hex color, e.g. "#5BF0C8"');
const link = z.object({ label: z.string(), href: z.string() }).strict();
/** A header link; `weight` places it among the sections of the main menu (none: after them). */
const headerLink = z.object({
  label: z.string(),
  href: z.string(),
  weight: z.number().optional(),
  /** Icon of a button to another area (art/areas.ts → areaIcons); without it, that area's own. */
  icon: z.enum(['site', 'docs', 'console', 'developers']).optional(),
}).strict();

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
    /** Show the section in the main menu; false keeps it out (e.g. legal, linked from the footer only). */
    menu: z.boolean().default(true),
    /** In the main menu, open a panel with the section's pages (their icon and menuText). */
    dropdown: z.boolean().default(false),
    /** Show "previous / next" at the end of each page. */
    sequential: z.boolean().default(false),
    /** Extra links below a separator in the side index (and in the footer). */
    links: z.array(link).default([]),
    /**
     * Show this section's pages inside another section's side index instead of
     * in the main menu (e.g. `legal` lives under `open-source`). Colors and
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
    /** Short line under the label in the main menu panel (sections with dropdown: true). */
    menuText: z.string().optional(),
    /** Brand icon next to the page in the main menu panel. */
    icon: z.enum(iconNames).optional(),
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
 * Loader for an app's pages in the catalog, every language at once. The id is
 * the language and the URL path, which is the same in every language (English):
 * es/pages/protocol/consensus.md → es/protocol/consensus (served at
 * /protocol/consensus), en/pages/protocol/consensus.md → en/protocol/consensus
 * (/en/protocol/consensus); es/pages/build/precompiles/index.md → a group.
 */
export const pagesLoader = (base: string) =>
  glob({
    // Plain Markdown only: content never carries code (widgets are ::: blocks).
    pattern: '*/pages/**/*.md',
    base,
    generateId: ({ entry }) => entry.replace(/\.md$/, '').replace(/(^|\/)index$/, '').replace(/^([^/]+)\/pages\//, '$1/'),
  });

/**
 * Blog posts: one Markdown file per post in <lang>/posts/.
 * The id is the language and the file name: es/posts/traceability.md →
 * es/traceability. The URL depends on the category (site.md → blog).
 */
export const postsLoader = (base: string) =>
  glob({ pattern: '*/posts/*.md', base, generateId: ({ entry }) => entry.replace(/\.md$/, '').replace(/\/posts\//, '/') });

/** Post front matter. `image` is a helper from the collection (image()); the contract export passes a string. */
export const postSchema = (image: () => z.ZodTypeAny) =>
  z
    .object({
      title: z.string(),
      summary: z.string(),
      /** One of the category ids in site.md → blog.categories. */
      category: z.string(),
      /** Publication date. Without it, the date of the file's last commit. */
      date: z.coerce.date().optional(),
      /** Optional cover photo (path relative to the post) with its required description and credit. */
      image: image().optional(),
      alt: z.string().optional(),
      credit: z.string().optional(),
      /** Shown large at the top of the blog index (the newest featured post). */
      featured: z.boolean().default(false),
      /**
       * Order in a section gallery and footer (categories with `path`, e.g. use cases).
       * Lower comes first. Blog categories ignore this and sort by date.
       */
      weight: z.number().int().default(100),
      draft: z.boolean().default(false),
    })
    .strict()
    .refine((p) => !p.image || (p.alt && p.credit), 'a post with an image needs "alt" and "credit"');

/** Loader for a per-language file of an app (site.md, home.md); the id is the language: "es", "en". */
export const perLanguage = (base: string, file: string) =>
  glob({ pattern: `*/${file}`, base, generateId: ({ entry }) => entry.split('/')[0] });

export const siteTextSchema = z
  .object({
    /** Name of this language in itself, shown in the language switcher: "Español", "English". */
    language: z.string(),
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    header: z
      .object({
        homeLink: z.string(),
        /** Optional word next to the 42 mark, e.g. "Docs" in the documentation; without it, the mark alone. */
        brand: z.string().optional(),
        /** Label of the "home" item at the start of the main menu and of the breadcrumbs. */
        home: z.string().optional(),
        mainNav: z.string(),
        /** Accessible name of the switch between the three areas (documentation, console). */
        areasNav: z.string().optional(),
        menuButton: z.string(),
        /** Accessible name of the language switcher. */
        languageNav: z.string(),
        /** Accessible name of the button that opens a section's panel: "<section>: <submenu>". */
        submenu: z.string().optional(),
        /** Optional links in the main menu, e.g. the blog, or back to the main site from the docs. */
        links: z.array(headerLink).default([]),
        /** Optional highlighted button at the end of the header, e.g. the documentation. */
        cta: link.optional(),
        /** A notice shown under the header on every page, e.g. "under construction". */
        notice: z.object({ label: z.string(), text: z.string(), close: z.string().optional() }).strict().optional(),
        /** Documentation: accessible names of the theme button. */
        themeDark: z.string().optional(),
        themeLight: z.string().optional(),
        /** Search texts (apps with search enabled). */
        search: z
          .object({
            /** Button label and placeholder of the search field. */
            label: z.string(),
            close: z.string(),
            noResults: z.string(),
            /** Shown when the index is missing (local development without a build). */
            unavailable: z.string(),
          })
          .strict()
          .optional(),
      })
      .strict(),
    /**
     * The footer of the whole site, written once in the site's site.md and
     * shown by every area (site, documentation, console). Licenses are
     * explained on the legal page, not here.
     */
    footer: z
      .object({
        /** The copyright line: "© 2026 The 42 contributors". */
        note: z.string(),
        /** Short line under the mark in the full footer. */
        tagline: z.string().optional(),
        /** The full footer's groups of links (the site). */
        columns: z.array(z.object({ label: z.string(), links: z.array(z.object({ label: z.string(), href: z.string(), text: z.string().optional() }).strict()) }).strict()).optional(),
        /** The full footer's bottom line, next to the copyright (e.g. legal). */
        bottom: z.array(link).default([]),
        /** Label of the "back to top" link in the full footer. */
        backToTop: z.string().optional(),
        /** Official profiles, shown as buttons with the network's logo (large in the full footer). */
        social: z.array(z.object({ network: z.enum(['x', 'github']), label: z.string(), handle: z.string(), href: z.url() }).strict()).default([]),
      })
      .strict()
      .optional(),
    page: z
      .object({
        lastReviewed: z.string(),
        editPage: z.string(),
        previous: z.string(),
        next: z.string(),
        chapters: z.string(),
        /** Notice on a page shown in the source language because it is not translated yet. */
        untranslated: z.string().optional(),
        /** Documentation: index of the page's headings, and the button that copies the page as Markdown. */
        onThisPage: z.string().optional(),
        copyPage: z.string().optional(),
        copied: z.string().optional(),
      })
      .strict(),
    notFound: z.object({ title: z.string(), label: z.string(), heading: z.string(), action: z.string() }).strict(),
    /** The blog, for apps that have one: its URL, texts and categories. */
    blog: z
      .object({
        /** URL segment of the blog: "blog" → /blog (and /es/blog). */
        path: z.string().regex(/^[a-z0-9-]+$/),
        kicker: z.string(),
        title: z.string(),
        lead: z.string(),
        all: z.string(),
        filterLabel: z.string(),
        byline: z.string(),
        /** "{n} min de lectura" */
        readingTime: z.string(),
        onThisPost: z.string(),
        keepReading: z.string(),
        editPost: z.string(),
        /** Label of the band that leads to the next story ("Siguiente historia"). */
        nextStory: z.string().optional(),
        /** Caption before the photo credit: "Imagen ilustrativa." */
        illustrative: z.string(),
        categories: z
          .array(
            z
              .object({
                id: z.string().regex(/^[a-z0-9-]+$/),
                label: z.string(),
                plural: z.string(),
                /** URL segment for this category's posts instead of the blog's, e.g. use-cases. */
                path: z.string().regex(/^[a-z0-9-]+$/).optional(),
              })
              .strict(),
          )
          .min(1),
      })
      .strict()
      .optional(),
  })
  .strict();
