# Contributing to 42 Chain content

Thanks for helping improve the site and the documentation. Most contributions are text changes, and those don't require installing anything.

> **¿Prefieres leer en español?** Hay una guía breve para editar contenido al final: [Guía rápida en español](#guía-rápida-en-español).

## Ways to contribute

| You want to… | Do this |
|---|---|
| Fix a typo or improve a page | Use **Editar esta página ↗** at the top of the page, or edit the file on GitHub, and open a pull request |
| Add a page or a section | Follow [Adding a page](README.md#adding-a-page) in the README and open a pull request |
| List a provider | Add a line to `network/providers.yaml` and open a pull request |
| Translate a page | Follow [Translating](README.md#translating) in the README and open a pull request |
| Report an error or suggest content | [Open an issue](../../issues/new/choose) |
| Suggest a design change or a new widget | [Open an issue](../../issues/new/choose); the design and code are maintained separately |
| Report a security problem | **Don't open an issue.** See [SECURITY.md](SECURITY.md) |

## Editing content from the browser

1. Open the page on the site and click **Editar esta página ↗**. GitHub opens the Markdown file in its editor (it will offer to fork the repository if needed).
2. Make your change. Content is plain Markdown plus a few `:::` blocks, described in the [README](README.md#content-blocks).
3. Describe the change and choose **Propose changes**, then **Create pull request**.
4. Automated checks run on your pull request. If something is wrong (a misspelled field, an unknown block, a broken link), the check names the file and the problem. Fix it in the same pull request.
5. A preview of the site with your change is built and its links are posted on the pull request. Check that your page looks as expected.

## Working locally

```bash
npm install        # Node 22 or later
npm run validate   # run before opening a pull request
```

The validator checks front matter, sections, blocks, widgets, diagrams, images, internal links and network data against the [content contract](contract/). The full site is built by the preview on your pull request.

## Guidelines

**Language.** Visitor-facing text is Spanish. Front matter keys, block names, this documentation and commit messages are English. Page URLs (folder and file names) are Spanish because they are public addresses.

**Content.**

- Write for people who are new to blockchain: short sentences, one idea per paragraph, terms explained the first time they appear.
- Keep claims verifiable. Figures, parameters and dates should match the protocol and its documentation.
- Don't rename an anchor (`{#id}`) or move a page without updating the links that point to it. `npm run validate` reports broken links.
- Use `:::` blocks instead of HTML. Scripts, styles, iframes and MDX are not accepted. If you need an element that doesn't exist, open an issue.
- Don't add personal opinions, promotions or links to third-party projects as if they were endorsed by the project.

**Pull requests.**

- One topic per pull request.
- Clear title in English, in the imperative: "Add staking FAQ entries", "Fix broken link in Interoperabilidad".
- All checks must pass before merging.

## Licensing of contributions

By contributing, you agree that your contribution is licensed under [CC BY 4.0](LICENSE). Only contribute work that you wrote or that you have the right to publish under this license, including images and diagrams (record an image's author and license in `site/images/CREDITS.md`).

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

**Antes de enviar:** si trabajas en tu equipo, `npm run validate` revisa tus cambios. En el pull request aparece además un enlace a una vista previa del sitio con tu cambio.

**Elementos especiales** (notas, preguntas frecuentes, cifras, línea de tiempo): se escriben con bloques `:::`. Los ejemplos están en [Content blocks](README.md#content-blocks).

**Reglas básicas**

- Escribe para quien no conoce blockchain: frases cortas y términos explicados.
- Las cifras y los datos deben coincidir con el protocolo y su documentación.
- No cambies un ancla `{#…}` sin corregir los enlaces que la usan.
- No uses HTML ni código: los elementos especiales se escriben con bloques `:::`.
- Tus textos se publican bajo la licencia [CC BY 4.0](LICENSE).
- En el espacio de discusiones del repositorio solo se tratan temas técnicos. Ahí no se ofrecen ni se contratan servicios; para implementaciones a medida, enlaza a la página [Implementaciones a medida](https://example.org/implementar/implementaciones).

¿Dudas? [Abre un issue](../../issues/new/choose) y pregunta.
