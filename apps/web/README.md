# 42 Chain

The 42 Chain site (42chain.org): the project, the Bitácora and frequently
asked questions. The documentation is part of the same site, at
**42chain.org/docs**, built from `apps/docs` in this same repository.

## Deploying

Part of the 42 Chain websites monorepo; see the README at the repository root
for development, building and deploying.

## Structure

| Path | What it holds |
|---|---|
| `content/` | Texts: one folder per language (`es/`, `en/`) with `site.md`, `home.md`, `pages/`, `posts/` and `diagrams/`; `images/`; `ui/` (interface strings). CC BY 4.0, see `content/LICENSE`. |
| `src/` | The site: pages, layouts and components (`components/`, `layouts/`, `styles/`, `widgets/`); the shared code is in `packages/base`. |
| `public/` | Static files served as they are. |

Content is plain Markdown and YAML, with no code: a widget is inserted with
`:::widget{name="…"}` and rendered by the site. The schemas in
`src/content.config.ts` and `packages/base/kit/schemas.ts` stop the build on any
misspelled or missing field.

## Commands

From the repository root: `npm run dev`, `npm run build`, `npm run verify`.
From this folder, the same scripts run this app only.
