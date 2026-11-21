# 42 Chain documentation

The documentation of Infinite Drive, the 42 protocol: technical reference and
tools. It is served under the main site, at **42chain.org/docs** (Astro `base`
`/docs`; languages inside it, `/docs/es/…`). The site at the root of
42chain.org is `apps/site`, in this same repository.

## Deploying

Part of the 42 Chain websites monorepo; see the README at the repository root
for development, building and deploying.

## Structure

| Path | What it holds |
|---|---|
| `content/` | Texts: one folder per language (`es/`, `en/`) with `site.md`, `home.md`, `pages/` and `diagrams/`; `network/` (network parameters, services and the provider directory); `ui/` (interface strings). CC BY 4.0, see `content/LICENSE`. |
| `src/` | The site: pages, layouts and components (`components/`, `layouts/`, `styles/`, `widgets/`, `network/`); the shared code is in `packages/base`. |
| `public/` | Static files served as they are. |

Content is plain Markdown and YAML, with no code: a widget is inserted with
`:::widget{name="…"}` and rendered by the site. The schemas in
`src/content.config.ts`, `packages/base/kit/schemas.ts` and `src/network/schemas.ts`
stop the build on any misspelled or missing field.

## Commands

From the repository root: `npm run dev`, `npm run build`, `npm run verify`.
From this folder, the same scripts run this app only.
