# 42 Protocol

The 42 Protocol site (42protocol.dev): documentation, technical reference and
tools. The project site, with the Bitácora, is 42 Chain (42chain.org), a
separate repository.

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
| `npm run dev` | Local server |
| `npm run build` | Build into `dist/` and index the search (Pagefind) |
| `npm run verify` | Types, build and internal links (what CI runs) |
