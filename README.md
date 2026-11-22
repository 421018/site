# 42chain.org

The code and content of 42chain.org: one static site with three areas.

| Area | Address | What it is |
|---|---|---|
| Site | `/`, `/es/…` | The project, the blog and frequently asked questions |
| Documentation | `/docs`, `/docs/es/…` | The developers' home: how Infinite Drive works and how to connect, build, integrate and operate |
| Console | `/console`, `/console/es/…` | The network live: status, events, networks and connections, tools |

## Repositories involved

The site's code lives here; the content that changes often lives in
repositories of its own, mounted here as git submodules under `apps/web/content/`.

| Repository | What it holds | Mounted at |
|---|---|---|
| **`42chain-site`** (this one) | The code, the site's own texts (home, project, pages), the interface texts of every area. The only one Cloudflare Pages builds. | |
| `42chain-docs` | The documentation's pages and home, in Markdown. | `apps/web/content/docs` |
| `42chain-blog` | The blog's posts and their images. | `apps/web/content/blog` |
| `42chain-network` | Network data: networks, services, providers (read by the docs, the console and the site's CSP). | `apps/web/content/network` |
| `42chain-events` | The record of network events (spec, schema, examples). The console's Events screen will read it; today it does not. | Not mounted yet |
| [`deep-thought-labs/infinite-app`](https://github.com/deep-thought-labs/infinite-app) | The project's public repository, linked from the footer and the official channels page. | Not part of the build |

All of them must sit in the **same GitHub organization** and be **public**:
`.gitmodules` uses relative URLs (`../42chain-docs.git`), resolved against this
repository's own address, and builds clone them without credentials. Every
build takes the `main` branch of each content repository; merging there and
calling the site's deploy hook (each content repository has a workflow for it)
publishes the change.

Nothing else is needed at build time or at run time: no server, no database,
no secrets. The console reads the network's public RPC services straight from
the visitor's browser.

## What is in this repository

| Path | What it is |
|---|---|
| `apps/web` | The Astro app: routes, components and content of the three areas. See [its README](apps/web/README.md). |
| `apps/web/content` | Texts and data (Markdown and YAML), in English and Spanish: the site's own (`site/`, `console/`, `docs-ui/`, `ui/`) and the three submodules (`docs/`, `blog/`, `network/`). |
| `packages/ui` | `@42chain/ui`, the look: design tokens and each area's stylesheet. See [its README](packages/ui/README.md). |
| `.github/workflows/ci.yml` | CI: types, build and every internal link on each pull request and on `main`. |

It is an npm workspaces monorepo: `apps/web` depends on `packages/ui`, so
**install and build from the repository root**, never from `apps/web`.

## Requirements

- **Node.js 24** (`.nvmrc`; the minimum is 22.23.4, Astro refuses older versions) and npm.
- **git**, with the repository's history: each documentation page's "Last reviewed" date is its file's last commit.
- **Internet access while building**: the fonts (Geist, Geist Mono, Newsreader) are downloaded from Google Fonts at build time and then served from the site itself.

## Local development

```bash
git clone --recurse-submodules https://github.com/<org>/42chain-site.git
cd 42chain-site
nvm install && nvm use   # Node 24, from .nvmrc
npm ci                   # from the repository root
npm run dev              # http://localhost:4321 (docs at /docs, console at /console)
```

Already cloned without the submodules? `git submodule update --init`. To bring
each content repository to its latest `main` (what production builds):
`git submodule update --remote`.

**Editing content in a submodule.** `apps/web/content/docs/` (and `blog/`,
`network/`) is a checkout of its own repository: commit and push there, from
that folder. The site repository then shows the submodule as changed; commit
that pointer too only if you want the site to record that content version (the
production build takes `main` anyway).

| Command (from the root) | What it does |
|---|---|
| `npm run dev` | Development server with live reload on **http://localhost:4321**. |
| `npm run build` | Builds the site into `apps/web/dist/` and the documentation's search index (`dist/docs/pagefind`). |
| `npm run preview` | Builds, then serves `apps/web/dist/` exactly as it will be published, on **http://localhost:4300**. Use it to review before deploying. |
| `npm run verify` | Types, build and every internal link and anchor: what CI runs. Run it before every commit to `main`. |

Things worth knowing:

- **The servers run in the background.** `npm run dev` and `npm run preview` return to the prompt and keep serving. From `apps/web`: `npx astro dev stop` (or `status`, `logs`); the same with `npx astro preview …`.
- **The preview does not refresh by itself.** It serves the last build: run `npm run preview` (or `npm run build`) again after changes.
- **Search in development** uses the index of the last build. Run `npm run build` or `npm run verify` once; until then the search says it needs the published version.
- **After changing a content schema** (`apps/web/src/content.config.ts`, `apps/web/src/kit/schemas.ts`), restart the dev server: it keeps validating with the old schema and pages answer with an error.
- **A link that goes somewhere unexpected** (for example an old `example.org` address) is usually a redirect cached by the browser from an earlier version. Clear the browser's cache for `localhost`.

## Production: Cloudflare Pages

The site is static: Cloudflare Pages builds it from this repository and serves
`apps/web/dist/`. Every push to `main` publishes; every other branch and pull
request gets its own preview address (`<branch>.<project>.pages.dev`).

### Create the project (once)

In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**,
choose this repository, then set:

| Setting | Value | Why |
|---|---|---|
| Production branch | `main` | |
| Framework preset | `None` | The build command below does everything; a preset would replace it. |
| Build command | `git submodule update --init --remote && (git fetch --unshallow \|\| true) && npm run build` | Brings in the content repositories at their `main` (whether or not Cloudflare cloned the submodules), then the site's own history if the clone was shallow, then builds. |
| Build output directory | `apps/web/dist` | |
| Root directory (advanced) | *(empty: the repository root)* | Not `apps/web`: the app needs the workspace package `packages/ui`, which only resolves from the root. |
| Environment variable | `NODE_VERSION` = `24` (Production and Preview) | The build image's default Node is older than the site expects. |

Cloudflare installs the dependencies itself (`npm` with `package-lock.json`)
before running the build command. **Save and Deploy**.

### Rebuild when content changes (once per content repository)

1. In the Pages project: **Settings → Builds → Add deploy hook**, name it after
   the repository (for example `42chain-docs`), branch `main`. Copy its URL.
2. In that content repository on GitHub: **Settings → Secrets and variables →
   Actions → New repository secret**, name `CF_DEPLOY_HOOK`, value the URL.
3. From then on, every push to its `main` runs its **Publish** workflow, which
   calls the hook; the site rebuilds with the new content in a few minutes.

Anyone with a hook URL can start builds: keep it secret, and if it leaks,
delete the hook and create a new one. Each content repository also runs a
**Check** workflow on pull requests: it builds the whole site with the change.

What the build publishes, with no further setup:

- `_headers` (from `apps/web/public/`): security headers (HSTS, `frame-ancestors`, `nosniff`, referrer and permissions policy) and long caching for `/_astro/*`. The Content-Security-Policy itself is a `<meta>` tag in every page.
- `404.html` for the site and `docs/404.html` for the documentation.
- `sitemap-index.xml` and `robots.txt`, with `https://42chain.org` as the base (`SITE.url` in `apps/web/src/config.ts`).
- Old addresses (`/log/…`, `/protocolo/…`, `/consola`…) as small redirect pages.

### The domain

In the project: **Custom domains → Set up a custom domain → `42chain.org`**,
and add `www.42chain.org` too if it should exist. If the domain is already
attached to another Pages project or Worker (it serves a different page today),
remove it there first. With the zone on Cloudflare, DNS is set up for you.

### After each deploy, check

1. `/`, `/docs`, `/console` and their `/es` versions open, with the same header and footer.
2. The documentation's search finds pages (try "validator").
3. The console shows live figures (latest block, time per block): if not, a provider is down or its origin is missing from the CSP (it comes from `providers.yaml`; adding a provider needs a new build).
4. A wrong address shows the 404 page.
5. "Last reviewed" dates come from the content repositories' history. If every page shows the build's own day, the submodules were cloned without history: check the build command.

### Rolling back

**Deployments** → the last good deployment → **⋯ → Rollback to this deployment**.
It takes effect at once; then fix `main` and push.

### Known issue: trailing slashes

Pages are built as `folder/index.html` and linked without a trailing slash
(`/console/status`). Cloudflare Pages serves such a page at `/console/status/`
and redirects the address without the slash to it, so on production every
internal link costs one redirect and the canonical addresses (without slash)
point to a redirect. Locally there is no redirect. To be settled before launch:
build each page as `folder.html` (`build.format: 'file'`) or link with slashes.

## Content and settings

- Site URL, languages, repository links: `apps/web/src/config.ts`.
- Visitor-facing texts: `apps/web/content/<area>/<lang>/` (`site.md` holds the header and footer).
- Network data (networks, services, providers): the `42chain-network` repository, at `apps/web/content/network/`.
- Documentation pages and blog posts: the `42chain-docs` and `42chain-blog` repositories, at `apps/web/content/docs/` and `apps/web/content/blog/`.
- Licenses: code under Apache 2.0 (`LICENSE`), texts and data under CC BY 4.0 (`apps/web/content/LICENSE`). See `NOTICE`.

How to contribute: [CONTRIBUTING.md](CONTRIBUTING.md). Security reports:
[SECURITY.md](SECURITY.md).
