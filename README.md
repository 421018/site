# 42 Chain — sitio oficial

Sitio informativo del protocolo 42 Chain. Está hecho con [Astro](https://astro.build) y se publica como sitio estático.

## Empezar

```bash
nvm use            # Node 22 (ver .nvmrc)
npm install
npm run dev        # http://localhost:4321
```

Otros comandos:

| Comando | Qué hace |
|---|---|
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Sirve `dist/` en local |
| `npm run check:links` | Revisa los enlaces internos y las anclas del sitio generado (después de `build`) |

## Estructura

```
src/
  config.ts                 Dominio, enlaces externos y repositorio (valores a completar)
  data/nav.ts               Menú, índice lateral de cada sección y pie de página
  styles/global.css         Estilos y colores (tokens en :root)
  layouts/Base.astro        <head> común
  layouts/Doc.astro         Plantilla de las páginas interiores
  components/               Encabezado, pie, índice lateral y simuladores
  scripts/hero-network.ts   Animación de fondo de la portada
  pages/index.astro         Portada
  pages/[...slug].astro     Genera cada página interior a partir del contenido
  content/pages/            Contenido de las páginas interiores (Markdown)
```

## Editar el contenido

Cada página interior es un archivo en `src/content/pages/`. La ruta del archivo define la dirección:

| Archivo | Dirección |
|---|---|
| `protocolo/index.md` | `/protocolo` |
| `protocolo/consenso.mdx` | `/protocolo/consenso` |
| `proyecto/contacto.md` | `/proyecto/contacto` |

El encabezado de cada archivo define el título, el resumen y la sección:

```md
---
title: "Contacto y soporte"
summary: "Qué canales son oficiales…"
group: proyecto            # protocolo | desarrolladores | comunidad | proyecto | legal
slug: proyecto/contacto
updated: 2026-11-13        # opcional; se muestra como "Última revisión"
---
```

Reglas del contenido:

- Cada `##` abre una sección numerada. El texto entre llaves es el ancla: `## Canales oficiales {#canales}` se enlaza como `/proyecto/contacto#canales`. No cambies un ancla sin buscar antes quién la enlaza.
- Los enlaces internos usan rutas absolutas: `/protocolo/gobernanza#suministro`.
- `/docs` y `/consola` redirigen a las direcciones definidas en `src/config.ts`.
- Los archivos `.mdx` (Consenso y Gobernanza) incluyen los simuladores interactivos. En ellos, los títulos de sección se escriben como `<h2 id="…">…</h2>`.
- Las notas, avisos y preguntas frecuentes usan HTML dentro del Markdown (`<div class="note">`, `<p class="msg">`, `<details class="faq">`).

Para agregar una página: crea el archivo y agrégala en `src/data/nav.ts`.

## Publicar en Cloudflare Pages

1. Sube el repositorio a GitHub.
2. En Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** y elige el repositorio.
3. Configuración de compilación:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Variable de entorno: `NODE_VERSION = 22`
4. Agrega el dominio propio en **Custom domains**.

`public/_headers` define encabezados de seguridad básicos para Cloudflare Pages.

## Pendientes antes de publicar

Los valores entre `[corchetes]` son marcadores. Los principales:

- `src/config.ts`: dominio, direcciones de la documentación y la Consola, y repositorio.
- Datos de la red: Chain ID (EVM y nativo) de la red principal y de pruebas, endpoints, decimales y tiempo de bloque (portada y `desarrolladores/`).
- Canales oficiales: X, foro, correo de contacto y correo de seguridad (`proyecto/contacto.md`).
- Licencia del contenido del sitio (archivo `LICENSE`) y de la documentación.

Para encontrarlos todos: `grep -rn "\[" src/content src/pages src/config.ts`.

## Idiomas

El sitio está en español. La configuración de Astro ya tiene i18n activado (`astro.config.mjs`); para agregar inglés, se suma `en` a `locales` y el contenido traducido en `src/content/pages/en/`.
