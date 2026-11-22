# 42 Chain websites

The code of 42chain.org: the site and its documentation, one project on one
domain.

| Path | What it is | Served at |
|---|---|---|
| `apps/site` | The site: home, project, blog, questions | `42chain.org` |
| `apps/docs` | The documentation (Astro `base: '/docs'`) | `42chain.org/docs` |
| `packages/base` | What both share: links and languages, content schemas, header, base layout, search, illustrations, Markdown directives and the link checker | — |

Each app keeps what is its own: its pages and layouts, its footer, its
stylesheet (`src/styles/global.css`, injected on every page by the kit
integration) and its widgets. Apps import the shared code as
`@42chain/base/…` (an npm workspace).

Content still lives in each app's `content/` folder. The plan is to move the
content that changes often (documentation, blog posts) to repositories of
its own; network events already have theirs (`42chain-events`).

## Commands

Node 22.23.4 or newer (`.nvmrc`). Run them from the repository root.

| Command | What it does |
|---|---|
| `npm install` | Install every workspace |
| `npm run dev` | Both dev servers: site on port 4321, documentation on 4322 at `/docs` |
| `npm run dev:site`, `npm run dev:docs` | Only one of them |
| `npm run build` | Build both apps into their `dist/` |
| `npm run verify` | Types, build and internal links for both (what CI runs) |
| `npm run preview` | Build both and serve them on one origin, as in production: http://localhost:4300, documentation at `/docs` (no live reload) |
| `npm run serve` | The same, without building again |

In development (`npm run dev`) the two apps run on separate servers, and links
between them point at the other one, so the documentation opens on port 4322.
They cannot share one dev server: both use the same internal paths for their
scripts (`/@vite/client`, `/src/…`) and would clash. To see the site as it will
be published, on one address, use `npm run preview`.

## Deploying

Two Cloudflare projects from this repository, one per app (root directory
`apps/site` or `apps/docs`); a route sends `42chain.org/docs*` to the
documentation project. Builds need the full git history: each page's "last
reviewed" date comes from its file's last commit.
