# Contributing to the 42 Chain website

Thanks for helping improve the site. Most contributions are text changes, and those don't require installing anything.

> **¿Prefieres leer en español?** Hay una guía breve para editar contenido al final: [Guía rápida en español](#guía-rápida-en-español).

## Ways to contribute

| You want to… | Do this |
|---|---|
| Fix a typo or improve a page | Use **Editar esta página ↗** at the top of the page, or edit the file on GitHub, and open a pull request |
| Add a page or a section | Follow [Adding a page](README.md#adding-a-page) in the README and open a pull request |
| Report an error or suggest content | [Open an issue](../../issues/new/choose) |
| Change design, layout or behavior | Open an issue first to agree on the approach, then a pull request |
| Report a security problem | **Don't open an issue.** See [SECURITY.md](SECURITY.md) |

## Editing content from the browser

1. Open the page on the site and click **Editar esta página ↗**. GitHub opens the Markdown file in its editor (it will offer to fork the repository if needed).
2. Make your change. Content is plain Markdown plus a few `:::` blocks, described in the [README](README.md#content-blocks).
3. Describe the change and choose **Propose changes**, then **Create pull request**.
4. Automated checks run on your pull request. If something is wrong (a misspelled field, an unknown block, a broken link), the check names the file and the problem. Fix it in the same pull request.

## Working locally

```bash
nvm use            # Node 24
npm install
npm run dev        # http://localhost:4321
npm run verify     # run before opening a pull request: types, build and links
```

## Guidelines

**Language.** Visitor-facing text is Spanish. Code, file names, frontmatter keys, comments, documentation and commit messages are English. Page URLs (content folder and file names) are Spanish because they are public addresses.

**Content.**

- Write for people who are new to blockchain: short sentences, one idea per paragraph, terms explained the first time they appear.
- Keep claims verifiable. Figures, parameters and dates should match the protocol and its documentation.
- Don't rename an anchor (`{#id}`) or move a page without updating the links that point to it. `npm run verify` reports broken links and anchors.
- Use `:::` blocks instead of HTML. If you need an element that doesn't exist, open an issue.
- Don't add personal opinions, promotions or links to third-party projects as if they were endorsed by the project.

**Code.**

- Keep visitor-facing text in `src/content/`, not in templates.
- New scripts or external resources must work with the Content-Security-Policy (`astro.config.mjs → security.csp`).
- Check visual changes on desktop and mobile widths.

**Pull requests.**

- One topic per pull request.
- Clear title in English, in the imperative: "Add staking FAQ entries", "Fix broken link in Interoperabilidad".
- All checks must pass before merging.

## Licensing of contributions

By contributing, you agree that:

- Code contributions are licensed under the [Apache License 2.0](LICENSE).
- Content contributions (anything under `src/content/`) are licensed under [CC BY 4.0](LICENSE-CONTENT).

Only contribute work that you wrote or that you have the right to publish under these licenses.

## Code of conduct

Everyone taking part in this project is expected to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Discussions are for technical topics

The repository's Discussions are open to anyone for technical questions about the protocol, the network, integrations and the site. Paid services are not offered, quoted or arranged there, by maintainers or anyone else. When someone asks for a custom implementation or consulting, reply with a link to the site's [Implementaciones a medida](https://example.org/implementar/implementaciones) page and continue only with the technical part of the question.

Providers listed on that page are independent. Proposing a provider for the list is done with a pull request, like any other content change.

---

## Guía rápida en español

Esta guía es para quienes quieren corregir o agregar **textos** del sitio. No hace falta instalar nada.

**Corregir una página**

1. En la página del sitio, pulsa **Editar esta página ↗**. GitHub abre el archivo en su editor; si te lo pide, acepta crear una copia (*fork*) del repositorio.
2. Haz el cambio. El texto es Markdown normal: `##` para títulos, `**negritas**`, `[enlace](/ruta)`.
3. Al terminar, pulsa **Propose changes** y luego **Create pull request**. Explica brevemente qué cambiaste.
4. Se ejecutan comprobaciones automáticas. Si algo está mal escrito, el mensaje indica el archivo y el problema (en inglés); corrígelo en el mismo pull request.

**Agregar una página:** crea un archivo `.md` en la carpeta de su sección con `title`, `summary` y `weight` en el encabezado. La página aparece sola en los menús. El README tiene el ejemplo completo en [Adding a page](README.md#adding-a-page).

**Elementos especiales** (notas, preguntas frecuentes, cifras, línea de tiempo): se escriben con bloques `:::`. Los ejemplos están en [Content blocks](README.md#content-blocks).

**Reglas básicas**

- Escribe para quien no conoce blockchain: frases cortas y términos explicados.
- Las cifras y los datos deben coincidir con el protocolo y su documentación.
- No cambies un ancla `{#…}` sin corregir los enlaces que la usan.
- Tus textos se publican bajo la licencia [CC BY 4.0](LICENSE-CONTENT).
- En el espacio de discusiones del repositorio solo se tratan temas técnicos. Ahí no se ofrecen ni se contratan servicios; para implementaciones a medida, enlaza a la página [Implementaciones a medida](https://example.org/implementar/implementaciones).

¿Dudas? [Abre un issue](../../issues/new/choose) y pregunta.
