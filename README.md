# 42 Chain

The 42 Chain site (42chain.org): the project, the Bitácora and frequently
asked questions. The documentation is part of the same site, at
**42chain.org/docs**, built from its own repository.

## Deploying

Each repository deploys on its own. On Cloudflare, a route sends
`42chain.org/docs*` to the documentation project and everything else here.
In development, `npm run dev` proxies /docs to the documentation's dev
server on port 4322, so links between the two work locally.

## Structure

| Path | What it holds |
|---|---|
| `content/` | Texts: one folder per language (`es/`, `en/`) with `site.md`, `home.md`, `pages/`, `posts/` and `diagrams/`; `images/`; `ui/` (interface strings). CC BY 4.0, see `content/LICENSE`. |
| `src/` | The site: pages, layouts and components (`kit/`, `blocks/`, `ui/`, `widgets/`). |
| `public/` | Static files served as they are. |
| `scripts/` | `check-links.mjs`, run after the build. |

Content is plain Markdown and YAML, with no code: a widget is inserted with
`:::widget{name="…"}` and rendered by the site. The schemas in
`src/content.config.ts` and `src/kit/schemas.ts` stop the build on any
misspelled or missing field.

## Commands

Node 22.23.4 or newer (`.nvmrc`).

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local server |
| `npm run build` | Build into `dist/` |
| `npm run verify` | Types, build and internal links (what CI runs) |
