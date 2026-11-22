# @42chain/ui

The look of 42chain.org, in one place.

| File | What it holds |
|---|---|
| `tokens.css` | Design tokens every section shares: the night palette, the two accents (aurora and star) and the type. |
| `base.css` | Rules every section shares: reset, type, night bands, header and menu, buttons, prose, side index, cards, footer. |
| `site.css` | The site (`/`): its paper palette and its own rules (magazine layout, blog, project page). Imports the two above. |
| `docs.css` | The documentation (`/docs`): its light and dark palettes and its own rules (three columns, code, search). Imports the two above. |
| `console.css` | The console (`/console`): a dark working surface (top bar, side menu, panels, status table). Imports the two above. |

Each page loads exactly one section stylesheet, as the first import of its
file in `apps/web/src/pages/` (`@42chain/ui/site.css`,
`@42chain/ui/docs.css` or `@42chain/ui/console.css`), so a section never carries the other's rules.
Components keep their own scoped `<style>` for what belongs only to them.

A rule that both sections need goes in `base.css` (a value both share, in
`tokens.css`); a rule for one section, in its own file. Never repeat a rule in
both section files.
