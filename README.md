# 42 Chain — website and documentation engine

**Private repository.** The engine, components, design and brand of [42chain.org](https://42chain.org) and its documentation site, built with [Astro](https://astro.build) 7 and published as static sites. The code and this documentation are in English; the sites are in Spanish.

The text and data the sites publish live in a separate, public **content catalog** (`content/`, package `@42chain/catalog`): plain Markdown and YAML, licensed CC BY 4.0, open to pull requests from anyone. Its [README](content/README.md) is the guide for editing content. This repository compiles it; nothing in the catalog is code.

## Getting started

```bash
nvm use            # Node 24 (see .nvmrc; Astro 7 requires ≥ 22.23.4)
npm install
npm run dev        # http://localhost:4321
```

| Command | What it does |
|---|---|
| `npm run dev` | Local server with live reload (drafts included) |
| `npm run build` | Builds the site into `apps/site/dist/` |
| `npm run preview` | Serves `apps/site/dist/` locally |
| `npm run check` | Type-checks code and templates |
| `npm run check:links` | Checks internal links and anchors in the built site (run after `build`) |
| `npm run verify` | All three checks above. This is what CI runs on every pull request |

## The content catalog

`content/` holds everything contributors edit and nothing else. Here it is an npm workspace package; in production it is its own public repository, added back at the same path as a git submodule.

```
content/
  site/        es/ and en/ (site.md, home.md, pages/, diagrams/), images/   (42chain.org)
  docs/        es/ and en/ (site.md, home.md, pages/)                       (documentation)
  ui/          es.yaml, en.yaml: widget and data view text
  network/     networks.yaml, services.yaml, providers.yaml
  contract/    JSON Schemas and block/widget names (generated)
  tools/       validate.mjs: the public validator (ajv + yaml only)
  .github/     validation and preview-request workflows, issue and PR templates
```

The engine reads it through `@42chain/kit/catalog` (`catalogPath()`, `catalogRelative()`). "Editar esta página" links point to the content repository (`EDIT_BASE` in each app's `src/config.ts`).

**Content never carries code.** Pages are `.md` only (MDX would run JavaScript at build time, and previews build untrusted pull requests). Interactive elements are inserted with `:::widget{name="…"}`: the blocks plugin leaves an empty marker, and `@42chain/widgets/Splice.astro` renders the page, cuts it at the markers and places the real component. To add a widget, add its name to `packages/widgets/src/names.ts` and its component to `Splice.astro`.

**The content contract.** `npm run export:contract` writes `content/contract/` from the engine's Zod schemas, block names and widget names. Run it after changing a schema, a block or a widget, and commit the result to the content repository: the public validator (`npm run validate:content`) checks pull requests against it, and the engine applies the same rules, and more, when it builds.

## Code structure

The repository is an npm workspace: two apps (the sites) and the packages they share. Commands run from the root:

| Command | What it does |
|---|---|
| `npm run dev` / `npm run dev:docs` | Local server for the site / the documentation |
| `npm run build` / `npm run build:docs` | Builds the site into `apps/site/dist/` / the docs into `apps/docs/dist/` (with the Pagefind search index) |
| `npm run verify` | Types, build and link check for every app |

```
apps/
  site/                          42chain.org
    astro.config.mjs             Shared config + site URL, redirects, languages, widget names
    src/config.ts                Domain, language, external URLs, content repository (EDIT_BASE)
    src/content.config.ts        Collections read from the catalog (every language): pages, home, site, network data
    src/components/Home.astro    Home page layout, shared by every language
    src/scripts/hero-network.ts  Home page background animation
    src/pages/                   Interior pages, home and 404 per language (en/), robots.txt
    public/_headers              Security headers and caching (Cloudflare Pages)
  docs/                          Documentation: same structure, with Pagefind search
packages/
  kit/       @42chain/kit       Shared engine: layouts, header, footer, side index, search,
                                navigation derived from content (site.ts), content schemas,
                                catalog paths, shared Astro config, link checker (check-links)
  blocks/    @42chain/blocks    ::: content blocks (Sätteri plugin)
  widgets/   @42chain/widgets   Widget names and Splice.astro, which places widgets in pages
  ui/        @42chain/ui        Global styles and color tokens, interactive widgets
  network/   @42chain/network   Network schemas, directory logic and data components
tools/
  export-contract.ts            Writes content/contract/ from the engine's schemas
content/                        Public content catalog (see above)
```

Each app passes its own settings to the kit with the `kit({ lang, ogLocale, editBase, search })` integration in its `astro.config.mjs`; the kit's components read them as `virtual:42chain/kit`. Packages export source files (TypeScript and Astro components), and apps import them by name. The docs app can move to its own repository later and install the packages like any other dependency.

Technical notes:

- Markdown is processed by Sätteri, Astro 7's native Markdown processor.
- Fonts (Geist and Geist Mono) are downloaded at build time and served from the site itself.
- Astro emits a Content-Security-Policy with hashes for its scripts on every page. Any new external or inline script must be checked against it (`apps/site/astro.config.mjs → security.csp`).
- The widgets' visible text lives in the catalog's `ui/<lang>.yaml`; components contain no visitor-facing text.

## Deploying to Cloudflare Pages

1. Push the repository to GitHub, with the content repository as a submodule at `content/`.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** and pick this repository.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `git submodule update --init --remote && npm ci && npm run build`
   - Build output directory: `apps/site/dist`
   - For the documentation, a second Pages project with build command ending in `npm run build:docs` and output directory `apps/docs/dist`.
   - Environment variable: `NODE_VERSION = 24`
4. Add the custom domains under **Custom domains**.
5. To publish when content changes, add a Cloudflare deploy hook for each project and call it from the content repository on pushes to `main`.

`apps/site/public/_headers` sets the security headers (HSTS, framing, content type) and long-term caching for hashed assets.

The "last reviewed" date comes from the content repository's git history. If the platform clones without full history, every page shows the date of the latest commit; set `updated:` on pages where the date matters.

## Pull request previews

Contributors open pull requests in the public content repository, which never sees this repository's code or secrets:

1. `content/.github/workflows/validate.yml` runs the public validator. No secrets.
2. `content/.github/workflows/preview-request.yml` (`pull_request_target`) sends the pull request's repository, commit and number to this repository with `repository_dispatch`. It never checks out or runs the pull request. Secret `PREVIEW_DISPATCH_TOKEN` (fine-grained, this repository only, Contents: read and write); variable `ENGINE_REPOSITORY`.
3. `.github/workflows/content-preview.yml` here checks out the pull request's content into `content/`, validates it, builds both apps and deploys them as Cloudflare Pages preview branches (`pr-<number>`), then comments the links on the pull request. Secrets `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `CONTENT_REPO_TOKEN` (content repository, Pull requests: write); variables `CF_SITE_PROJECT`, `CF_DOCS_PROJECT`.

Building untrusted content is safe because it is data only: no MDX, no scripts (the validator and the engine both reject them), widgets and diagrams resolved by name. Diagrams are HTML/SVG files from the catalog inserted as markup, so they are reviewed like any other change and constrained by the site's CSP.

## Before going live

Values in `[brackets]` are placeholders. The main ones:

- `apps/*/src/config.ts`: domain, docs and console URLs, content repository. The domain also sets the sitemap and `robots.txt` URLs.
- Network data: Chain IDs (EVM and native) for mainnet and testnet, endpoints, decimals and block time (`content/network/networks.yaml`).
- Project channels: site, docs, repository and security email (`content/site/es/pages/open-source/verify.md`, `…/open-source/security.md`).
- Repository URLs (`[organization]`) in `apps/*/src/config.ts` and `content/.github/ISSUE_TEMPLATE/config.yml`.
- Copyright holder of the engine ("The 42 Chain contributors", provisional) in `LICENSE`, `NOTICE` and the legal page: confirm with legal review.
- Contact emails in `content/SECURITY.md` (`[security email]`) and `content/CODE_OF_CONDUCT.md` (`[conduct email]`).
- Licenses of the documentation site and the console (`legal/index.md`).
- Hosting provider named in the privacy section (`legal/index.md`).
- Custom implementation providers (`content/site/es/pages/use-cases/custom-implementations.md`) and RPC/explorer providers (`content/network/providers.yaml`).
- Social sharing image (`og:image`).

To find them all: `grep -rn "\[" content apps/*/src/config.ts LICENSE NOTICE`.

## Languages

English is served at the root and Spanish under `/es`. Paths and anchors are English and identical in every language (`/protocol/consensus`, `/es/protocol/consensus`). Spanish is the **source** language (`SITE.sourceLang`): content is written in Spanish first and is complete there; a page not yet translated into English is shown at its English URL in Spanish, with a notice and a canonical link to the Spanish page. Content links are written without a language prefix and the engine adds the page's. Old URLs redirect. Languages are set per app in `src/config.ts` (`SITE.defaultLang` at the root, `SITE.sourceLang`, `SITE.languages`) and passed to the kit and to Astro's i18n.

- **Catalog:** each app has a folder per language (`content/site/es/`, `content/site/en/`) with `site.md`, `home.md`, `pages/`, `posts/` (site) and `diagrams/`; images are shared. A translation is the file at the same path in another language's folder. Widget text lives in `content/ui/<lang>.yaml`; network data has per-language fields (`{ es, en }`).
- **Engine:** `@42chain/kit/i18n` (`langOf(Astro)`, `langPrefix`, `homeHref`) resolves the language of the page from `Astro.currentLocale`. Page ids are `<lang>/<path>`; `site.ts` builds sections per language and pairs translations by path (`getAlternates()`), which feed the language switcher in the header and the `hreflang` links. `@42chain/kit/dictionary` (`ui(lang)`, `fill()`) reads the widget text; strings needed by client scripts travel in a `data-i18n` attribute.
- **Routes:** `[...slug].astro` serves every page of every language; `index.astro` and `404.astro` exist once per language (`src/pages/es/` for Spanish), rendering the shared `Home.astro` and the kit's `NotFound.astro`.
- **Adding a language:** add it to `SITE.languages` in both apps, create the catalog folders and `ui/<lang>.yaml`, add `src/pages/<lang>/index.astro` and `404.astro`, and run `npm run export:contract`.

## License

This repository is proprietary: all rights reserved (see [LICENSE](LICENSE)). The content catalog in `content/` is licensed separately under [CC BY 4.0](content/LICENSE). Third-party software keeps its own license; see [NOTICE](NOTICE).

## Conventions

- Code, file names, frontmatter keys, block names, comments, error messages, documentation and commit messages: **English**.
- Visitor-facing text and page URLs: **Spanish**.
