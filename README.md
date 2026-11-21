# 42 Chain

The 42 Chain site (42chain.org): the project, the Bitácora and frequently
asked questions. The technical documentation and tools live in 42 Protocol
(42protocol.dev), a separate repository.

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
