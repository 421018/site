# 42chain.org

One Astro app for the whole site. It has two areas, each with its own content
and look:

| Area | Served at | Content | Code | Stylesheet |
|---|---|---|---|---|
| The site: home, project, blog, questions | `/`, `/es/…` | `content/site/` | `src/site/` | `@42chain/ui/site.css` |
| The documentation | `/docs`, `/docs/es/…` | `content/docs/` | `src/docs/` | `@42chain/ui/docs.css` |
| The console | `/console`, `/console/es/…` | `content/console/` | `src/console/` | `@42chain/ui/console.css` |

## Structure

| Path | What it holds |
|---|---|
| `content/site/`, `content/docs/` | Each area's texts: one folder per language (`es/`, `en/`) with `site.md`, `home.md`, `pages/` (and the site's `posts/`, the docs' `network/` data). |
| `content/ui/` | Interface strings of widgets, shared. `content/LICENSE`: CC BY 4.0. |
| `src/pages/` | Routes. Pages under `src/pages/docs/` are the documentation; the rest, the site. Each page imports its area's stylesheet first. |
| `src/site/`, `src/docs/` | Each area's components, layouts and widgets (`widgets.ts` lists them). |
| `src/kit/` | The engine both areas share: areas and languages (`i18n.ts`), site structure derived from content (`site.ts`), blog, schemas, Astro configuration, header, side index, search, base layout. |
| `src/art/` | Illustrations and icons. |
| `src/blocks/` | The Markdown `:::` blocks. |
| `scripts/check-links.mjs` | Checks every internal link and anchor after the build. |

Content is plain Markdown and YAML, with no code: a widget is inserted with
`:::widget{name="…"}` and rendered by the site. The schemas in
`src/content.config.ts` and `src/kit/schemas.ts` stop the build on any
misspelled or missing field. Links in content are written without a language
or area prefix (`/protocol/consensus`); `site:/…` and `docs:/…` point to the
other area.

## Commands

Run them from the repository root (the app needs the workspace package
`packages/ui`): `npm run dev` (http://localhost:4321), `npm run build`,
`npm run preview` (the built site on http://localhost:4300), `npm run verify`.
Requirements, background servers and deployment: see the
[repository README](../../README.md).
