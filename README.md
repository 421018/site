# 42 Chain — official website

Informational website for the 42 Chain protocol, built with [Astro](https://astro.build) 7 and published as a static site. The site is in Spanish; the codebase, tooling and documentation are in English.

**All content lives in Markdown files.** Adding, editing, reordering or removing a page only means editing files in `src/content/`: the main menu, side index, previous/next links and footer are generated from them.

## Getting started

```bash
nvm use            # Node 24 (see .nvmrc; Astro 7 requires ≥ 22.23.4)
npm install
npm run dev        # http://localhost:4321
```

| Command | What it does |
|---|---|
| `npm run dev` | Local server with live reload (drafts included) |
| `npm run build` | Builds the site into `dist/` |
| `npm run preview` | Serves `dist/` locally |
| `npm run check` | Type-checks code and templates |
| `npm run check:links` | Checks internal links and anchors in the built site (run after `build`) |
| `npm run verify` | All three checks above. This is what CI runs on every pull request |

## Editing content

### Where things live

| What | File |
|---|---|
| Interior pages | `src/content/pages/<section>/<page>.md` |
| Home page text | `src/content/home.md` |
| Site-wide text: brand, footer, page labels, 404 | `src/content/site.md` |
| Domain, external URLs, repository | `src/config.ts` |

The file path is the page URL. Folder and file names are public URLs, so they stay in Spanish:

| File | URL |
|---|---|
| `protocolo/index.md` | `/protocolo` |
| `protocolo/consenso.mdx` | `/protocolo/consenso` |
| `codigo-abierto/verificar.md` | `/codigo-abierto/verificar` |

### Adding a page

1. Create the file in its section folder, e.g. `src/content/pages/protocolo/staking-liquido.md`.
2. Add the frontmatter:

```md
---
title: "Staking líquido"
summary: "One sentence that sums up the page. Shown under the title and to search engines."
weight: 25           # order within the section (lower comes first)
---

## Primera sección {#primera}

Text…
```

That's it: the page shows up in the side index, in previous/next and in the footer.

Frontmatter fields:

| Field | Required | Purpose |
|---|---|---|
| `title` | yes | Page title |
| `summary` | yes | Subtitle and meta description |
| `weight` | no | Order within the section. The section's `index.md` always comes first |
| `menuTitle` | no | Label in the side index and footer, when it should differ from the title |
| `updated` | no | "Last reviewed" date. Defaults to the date of the file's last commit |
| `draft` | no | `true` shows the page in `npm run dev` and leaves it out of the published site |

### Sections

Each folder is a section, described by a `section:` block in its `index.md`:

```yaml
section:
  label: Protocolo        # name in the main menu
  weight: 1               # order in the main menu and footer
  accent: "#5BF0C8"       # accent color on dark backgrounds
  ink: "#0A7A5E"          # link color on the light reading surface
  numbered: true          # numbers pages in the side index
  sequential: true        # shows previous / next at the end of each page
  links:                  # extra links below a separator in the side index
    - { label: "Documentación ↗", href: /docs }
  attachTo: proyecto      # optional: list this section inside another one instead of the main menu
```

To add a section, create the folder and its `index.md` with that block.

### Writing

- Each `##` starts a numbered section. The text in braces is the anchor: `## Canales oficiales {#canales}` is linked as `/codigo-abierto/verificar#canales`. Before renaming an anchor, search for links to it; `npm run verify` reports any that break.
- Internal links use absolute paths: `/protocolo/gobernanza#ciclo`.
- `/docs` and `/consola` redirect to the URLs set in `src/config.ts`.
- Small inline badge: `_Independiente_{.badge}`.

### Content blocks

Special elements are written as `:::` blocks, never as HTML:

```md
:::note[Antes de confiar en un mensaje]
Ningún canal del proyecto te pedirá tus llaves.
:::

:::faq[¿Qué es 42 Chain?]
Una red pública de infraestructura. [Visión general](/protocolo)
:::

:::lore[Bitácora del motor]
El motor funciona con improbabilidad. El gas dice cuánta pide cada maniobra.
:::

:::diagram[Las cinco piezas del motor.]{name="motor"}
:::

:::figure[Un municipio registra cada intervención en el alumbrado.]
![Farolas de una calle al atardecer](../../../assets/images/alumbrado.jpg)
:::

:::aside
[Operar un nodo →](/implementar/nodos)
:::

:::status[Borrador]
Pendiente de revisión legal.
:::

:::facts
- **1 bloque** Finalidad
- **> 2/3** Poder de voto para confirmar
:::

:::timeline{current="Hoy"}
- **Año** Hito
  Descripción breve del hito.
- **Hoy** Situación actual
  Descripción breve.
:::
```

| Block | Renders as |
|---|---|
| `:::note[label]` | Highlighted box with a label |
| `:::faq[question]` | Collapsible FAQ entry |
| `:::aside` | Small mono text: "read more" links, pending placeholders, clarifications |
| `:::status[status]` | Status badge followed by a short sentence |
| `:::lore[heading]` | Narrative aside from the protocol's sci-fi lore, set apart from technical text. At most one per page, always after the technical explanation, and only in Protocolo, Tarifas and "Por qué 42". Never the only place a technical fact is stated; no price, value or scarcity |
| `:::diagram[caption]{name="…"}` | Inserts `src/content/diagrams/<name>.html` (preferred: responsive) or `<name>.svg`, with the caption. Diagram text is content too; every diagram must also be explained in the page text |
| `:::figure[caption]` | Wraps a Markdown image with its caption. Images live in `src/assets/images/` and are optimized at build time; they must be local (the CSP only allows the site's own images). Record author and license in `src/assets/images/CREDITS.md` |
| `:::facts` | Key figures in columns |
| `:::timeline` | Timeline; `current="…"` highlights the milestone with that date |

Blocks work the same in `.md` and `.mdx` files. They are defined in `src/lib/content-blocks.ts`.

### Interactive components (MDX)

`.mdx` files can include Astro components. The Consensus and Governance pages use them for their simulators:

```mdx
import VoteSim from '../../../components/VoteSim.astro';

<VoteSim />
```

### When something is wrong

The build stops and names the file and the problem: a misspelled field, a folder without `index.md`, an unknown `:::` block or a FAQ without a question. CI runs the same checks on every pull request, so errors never reach the published site.

## Code structure

```
src/
  config.ts                 Domain, language, external URLs, repository
  content.config.ts         Content schema (valid and required fields)
  content/site.md           Site-wide text: brand, footer, page labels, 404
  content/home.md           Home page text
  content/pages/            Interior pages, one folder per section
  lib/site.ts               Menu, side index, previous/next and footer, derived from content
  lib/content-blocks.ts     ::: content blocks
  styles/global.css         Styles and color tokens (:root)
  layouts/Base.astro        Shared <head>: metadata, fonts, section colors
  layouts/Doc.astro         Interior page layout
  components/               Header, footer, side index and simulators
  scripts/hero-network.ts   Home page background animation
  pages/index.astro         Home page layout
  pages/[...slug].astro     Generates every interior page
  pages/robots.txt.ts       robots.txt pointing to the sitemap
```

Technical notes:

- Markdown is processed by Sätteri, Astro 7's native Markdown processor.
- Fonts (Geist and Geist Mono) are downloaded at build time and served from the site itself.
- Astro emits a Content-Security-Policy with hashes for its scripts on every page. Any new external or inline script must be checked against it (`astro.config.mjs → security.csp`).
- The simulators' visible text is Spanish and lives in their components, since each message is tied to a state of the calculation.

## Deploying to Cloudflare Pages

1. Push the repository to GitHub.
2. In Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** and pick the repository.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION = 24`
4. Add the custom domain under **Custom domains**.

`public/_headers` sets the security headers (HSTS, framing, content type) and long-term caching for hashed assets.

The "last reviewed" date comes from git history. If the platform clones without full history, every page shows the date of the latest commit; set `updated:` on pages where the date matters.

## Before going live

Values in `[brackets]` are placeholders. The main ones:

- `src/config.ts`: domain, docs and console URLs, repository. The domain also sets the sitemap and `robots.txt` URLs.
- Network data: Chain IDs (EVM and native) for mainnet and testnet, endpoints, decimals and block time (`src/content/home.md` and `implementar/`).
- Project channels: site, docs, repository and security email (`codigo-abierto/verificar.md`, `codigo-abierto/seguridad.md`).
- Repository URL (`[organization]`) in `src/config.ts`, `NOTICE` and `.github/ISSUE_TEMPLATE/config.yml`.
- Contact emails in `SECURITY.md` (`[security email]`) and `CODE_OF_CONDUCT.md` (`[conduct email]`).
- Licenses of the documentation site and the console (`legal/index.md`).
- Hosting provider named in the privacy section (`legal/index.md`).
- Custom implementation providers (`implementar/implementaciones.md`) and RPC/explorer providers (`implementar/conectarse.md`).
- Social sharing image (`og:image`).

To find them all: `grep -rn "\[" src/content src/config.ts NOTICE SECURITY.md CODE_OF_CONDUCT.md .github`.

## Languages

The site is in Spanish and Astro's i18n config is enabled (`astro.config.mjs`). Adding another language requires adapting `src/lib/site.ts` so language folders (`src/content/pages/en/…`) are not read as sections, plus a translated `site.md` and `home.md`.

## Contributing

Contributions are welcome, from fixing a typo in the browser to adding sections. See [CONTRIBUTING.md](CONTRIBUTING.md) (it includes a short guide in Spanish for content editors), the [Code of Conduct](CODE_OF_CONDUCT.md) and, for vulnerabilities, [SECURITY.md](SECURITY.md).

## License

| What | License |
|---|---|
| Source code (everything outside `src/content/`) | [Apache License 2.0](LICENSE) |
| Content (everything under `src/content/`) | [CC BY 4.0](LICENSE-CONTENT) |

Copyright 2026 The 42 Chain contributors. See [NOTICE](NOTICE).

## Conventions

- Code, file names, frontmatter keys, block names, comments, error messages, documentation and commit messages: **English**.
- Visitor-facing text and page URLs: **Spanish**.
