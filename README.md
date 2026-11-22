# 42chain.org

The code of 42chain.org: one site, with its documentation at `/docs`.

| Path | What it is |
|---|---|
| `apps/web` | The site: one Astro app with two areas, the site (`/`) and the documentation (`/docs`). See its README. |
| `packages/ui` | `@42chain/ui`, the look: shared design tokens and rules, and each area's stylesheet. See its README. |

Content still lives in `apps/web/content/`. The plan is to move the content
that changes often (documentation, blog posts) to repositories of its own,
included under `content/`; network events already have theirs
(`42chain-events`).

## Commands

Node 22.23.4 or newer (`.nvmrc`). Run them from the repository root.

| Command | What it does |
|---|---|
| `npm install` | Install everything |
| `npm run dev` | Development server with live reload: http://localhost:4321, documentation at `/docs` |
| `npm run build` | Build into `apps/web/dist/`, plus the documentation's search index |
| `npm run preview` | Build and serve the result, as it will be published |
| `npm run verify` | Types, build and every internal link (what CI runs) |

## Deploying

One Cloudflare Pages project, root directory `apps/web`, build command
`npm run build`, output `dist`. Builds need the full git history: each page's
"last reviewed" date comes from its file's last commit.
