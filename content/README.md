# 42 Chain — content

The text and data of [42chain.org](https://42chain.org) and its documentation site. Everything here is plain Markdown and YAML: adding, editing, reordering or removing a page only means editing files in this repository. Menus, side indexes, previous/next links and footers are generated from them.

The sites are in English (at the root) and Spanish (under `/es`). Content is written in Spanish first, the source language; until a page is translated, its English URL shows the Spanish text with a notice. Each language has its own folder; paths and anchors are in English and the same in every language (`/protocol#validation` in English, `/es/protocol#validation` in Spanish). This guide, front matter keys and block names are in English.

> **¿Prefieres leer en español?** [CONTRIBUTING.md](CONTRIBUTING.md) tiene una guía rápida para editar textos.

## How a change gets published

1. You edit a file, from the browser (**Editar esta página ↗** on any page) or locally, and open a pull request.
2. **Validate content** checks it against the [content contract](contract/) and names the file and line of any problem.
3. A preview of the whole site with your change is built, and its links are posted on the pull request.
4. After review, the change is merged and published.

To check your change locally before opening the pull request:

```bash
npm install
npm run validate
```

## Where things live

| What | File |
|---|---|
| Interior pages | `site/<lang>/pages/<section>/<page>.md` |
| Blog posts and use cases | `site/<lang>/posts/<slug>.md` |
| Home page text | `site/<lang>/home.md` |
| Site-wide text: footer, page labels, 404 | `site/<lang>/site.md` |
| Diagrams | `site/<lang>/diagrams/<name>.html` (or `.svg`) |
| Images (shared by every language) | `site/images/` (author and license in `site/images/CREDITS.md`) |
| Documentation site | `docs/<lang>/`, with the same structure |
| Widget and data view text | `ui/<lang>.yaml` |
| Network parameters, service kinds, providers | `network/networks.yaml`, `network/services.yaml`, `network/providers.yaml` |
| Rules the content must follow | `contract/` (generated; don't edit by hand) |

`<lang>` is `es` or `en` (see `contract/languages.json`). The file path is the page URL. Folder and file names are English and identical in every language; English is served at the root and Spanish under `/es`:

| File | URL |
|---|---|
| `site/es/pages/protocol/index.md` | `/es/protocol` |
| `site/es/pages/protocol/index.md` | `/es/protocol` |
| `docs/es/pages/protocol/consensus.md` | `docs.42chain.org/es/protocol/consensus` |
| `docs/es/pages/build/precompiles/index.md` | `docs.42chain.org/build/precompiles` |

## Adding a page

Create the file in its section folder, e.g. `site/es/pages/protocol/liquid-staking.md`:

```md
---
title: "Staking líquido"
summary: "One sentence that sums up the page. Shown under the title and to search engines."
weight: 25           # order within the section (lower comes first)
---

## Primera sección {#first}

Text…
```

The page shows up in the side index, in previous/next and in the footer.

| Field | Required | Purpose |
|---|---|---|
| `title` | yes | Page title |
| `summary` | yes | Subtitle and meta description |
| `weight` | no | Order within the section. The section's `index.md` always comes first |
| `menuTitle` | no | Label in the side index and footer, when it should differ from the title |
| `updated` | no | "Last reviewed" date. Defaults to the date of the file's last commit |
| `draft` | no | `true` leaves the page out of the published site |
| `icon`, `menuText` | no | Icon and short line of the page in the main menu panel (sections with `dropdown: true`) |

## Writing a blog post (Bitácora)

Create `site/es/posts/<slug>.md`, with an English file name: it is the end of the URL.

```md
---
title: "Registros y documentos verificables"
summary: "One or two sentences shown on the card and under the title."
category: caso-de-uso        # caso-de-uso, avance, explicacion, historia (site.md → blog.categories)
date: 2026-11-14             # optional; without it, the date of the file's last commit
image: ../../images/casos/registros.jpg   # optional cover photo
alt: "Diploma enmarcado con un sello dorado"
credit: "Foto: Quilia, Unsplash"
featured: false              # optional; the newest featured post leads the index
---

## El problema {#problem}
```

Use cases (`caso-de-uso`) are served under `/use-cases/<slug>`, shown in that section's gallery and listed in its footer column; every other category under `/log/<slug>`. Posts use the same Markdown and `:::` blocks as pages, and their `##` headings make the "En esta entrada" index. Avances must describe facts that can be verified: versions, approved proposals, parameter changes.

## Translating

Spanish is the source. A translation is the file at the **same path** in another language's folder: `site/en/pages/protocol/index.md` translates `site/es/pages/protocol/index.md`. Nothing else links them; the language switcher and search engines pair them by path.

- Translate the section first: a page needs its section's `index.md` in the same language (with its own `section:` block).
- Keep the anchors as they are (`## The active set {#active-set}`): they are English and shared by every language. Links are written without a language prefix, the same as in Spanish; a link to a page not translated yet leads to its English URL, which shows the Spanish text with a notice.
- A diagram with text needs a copy in `site/en/diagrams/` with the same name; until it exists, the Spanish one is shown.
- Widgets and data views take their text from `ui/<lang>.yaml`, which must have exactly the keys of `ui/es.yaml`. In network data, visitor-facing fields have one value per language: `label: { es: Red principal, en: Mainnet }`.
- Pages without a translation are shown in Spanish at their English URL, with a notice; the language switcher leads to the Spanish page.

## Sections and groups

Each folder in a language's `pages/` is a section, described by a `section:` block in its `index.md`:

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

A section can contain one level of groups: a folder with its own `index.md` (e.g. `construir/precompiles/`), shown in the side index with its pages indented under it.

## Writing

- Each `##` starts a numbered section. The text in braces is the anchor: `## Canales oficiales {#channels}` is linked as `/open-source/verify#channels`. Before renaming an anchor, search for links to it.
- Internal links use absolute paths without a language prefix: `/protocol#rules`. The engine adds the page's (`/es/…` on Spanish pages). Links to the documentation are written `docs:/get-started/connect`, and from the documentation to the site `site:/protocol`. `/docs` and `/consola` go to the documentation and the console.
- Small inline badge: `_Independiente_{.badge}`.
- No HTML, scripts or MDX: special elements are `:::` blocks. The validator rejects `<script>`, `<style>`, `<iframe>`, event handlers and `.mdx` files.

## Content blocks

```md
:::note[Antes de confiar en un mensaje]
Ningún canal del proyecto te pedirá tus llaves.
:::

:::faq[¿Qué es 42 Chain?]
Una red pública de infraestructura. [Qué es el protocolo](/protocol)
:::

:::lore[Bitácora del motor]
El motor funciona con improbabilidad. El gas dice cuánta pide cada maniobra.
:::

:::diagram[Las cinco piezas del motor.]{name="motor"}
:::

:::widget{name="fee-calc"}
:::

:::figure[Un municipio registra cada intervención en el alumbrado.]
![Farolas de una calle al atardecer](../../../images/casos/infraestructura.jpg)
:::

:::aside
[Operar un nodo →](docs:/operate/nodes)
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
| `:::diagram[caption]{name="…"}` | Inserts `<lang>/diagrams/<name>.html` (preferred: responsive) or `<name>.svg`, with the caption; falls back to the Spanish one. Every diagram must also be explained in the page text |
| `:::widget{name="…"}` | An interactive widget or data view. Available names are listed in [`contract/blocks.json`](contract/blocks.json) |
| `:::figure[caption]` | Wraps a local Markdown image with its caption. Record author and license in `images/CREDITS.md` |
| `:::facts` | Key figures in columns |
| `:::timeline` | Timeline; `current="…"` highlights the milestone with that date |

### Widgets

| Name | What it shows |
|---|---|
| `hash-chain` | How blocks are linked by their hashes |
| `consensus-sim` | A consensus round as validators go offline |
| `vote-sim` | A governance vote with quorum and thresholds |
| `ibc-sim` | An IBC transfer step by step, including a timeout |
| `fee-calc` | Transaction fee calculator |
| `unit-converter` | Cups ↔ drops converter |
| `network-switch` | Mainnet / testnet switch for the data views below it |
| `network-params` | Network parameters, from `network/networks.yaml` |
| `provider-directory` | Public endpoints, from `network/providers.yaml` |
| `add-network` | Button to add the network to a wallet |

## Network data and provider directory

| File | What it holds |
|---|---|
| `networks.yaml` | Each network's parameters (name, chain IDs, unit, prefix…). Must match `assets.infinitedrive.xyz/<network>/network-data.json` |
| `services.yaml` | Kinds of public service (EVM RPC, CometBFT RPC, gRPC, explorers, faucets), with label, description and anchor in each language |
| `providers.yaml` | One line per public endpoint: provider, network, service, URL |

To list a new provider, add a line to `providers.yaml`. Order matters: within a network and service, the first entry is the default one, and the "add to wallet" button uses the first EVM RPC and explorer. A provider that names an unknown network or service fails validation.

## License

Content in this repository is licensed under [CC BY 4.0](LICENSE). Copyright 2026 The 42 Chain contributors. The design, code and brand of the sites that publish it are not part of this repository and are not covered by this license.

See [CONTRIBUTING.md](CONTRIBUTING.md), the [Code of Conduct](CODE_OF_CONDUCT.md) and, for vulnerabilities, [SECURITY.md](SECURITY.md).
