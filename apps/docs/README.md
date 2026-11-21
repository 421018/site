# 42 Chain documentation

The documentation of Infinite Drive, the 42 protocol: technical reference and
tools. It is served under the main site, at **42chain.org/docs** (Astro `base`
`/docs`; languages inside it, `/docs/es/…`). The magazine at the root of
42chain.org lives in its own repository.

## Deploying

Each repository deploys on its own. On Cloudflare, a route sends
`42chain.org/docs*` to this project and everything else to the main site.
Links to the main site are written `site:/…` and resolve to root paths.

## Structure

| Path | What it holds |
|---|---|
| `content/` | Texts: one folder per language (`es/`, `en/`) with `site.md`, `home.md`, `pages/` and `diagrams/`; `network/` (network parameters, services and the provider directory); `ui/` (interface strings). CC BY 4.0, see `content/LICENSE`. |
| `src/` | The site: pages, layouts and components (`kit/`, `blocks/`, `ui/`, `widgets/`, `network/`). |
| `public/` | Static files served as they are. |
| `scripts/` | `check-links.mjs`, run after the build. |

Content is plain Markdown and YAML, with no code: a widget is inserted with
`:::widget{name="…"}` and rendered by the site. The schemas in
`src/content.config.ts`, `src/kit/schemas.ts` and `src/network/schemas.ts`
stop the build on any misspelled or missing field.

## Commands

Node 22.23.4 or newer (`.nvmrc`).

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Local server at http://localhost:4322/docs; links to the main site go to its dev server (port 4321), which should run too |
| `npm run build` | Build into `dist/` and index the search (Pagefind) |
| `npm run verify` | Types, build and internal links (what CI runs) |
