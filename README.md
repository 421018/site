# 42 Chain — sitio oficial

Sitio informativo del protocolo 42 Chain. Está hecho con [Astro](https://astro.build) 7 y se publica como sitio estático.

**Todo el contenido vive en archivos Markdown.** Para agregar, cambiar, reordenar o quitar una página basta con editar archivos en `src/content/`: el menú, el índice lateral, los enlaces anterior/siguiente y el pie de página se generan solos.

## Empezar

```bash
nvm use            # Node 24 (ver .nvmrc; Astro 7 exige ≥ 22.23.4)
npm install
npm run dev        # http://localhost:4321
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor local con recarga automática (muestra también los borradores) |
| `npm run build` | Genera el sitio en `dist/` |
| `npm run preview` | Sirve `dist/` en local |
| `npm run check` | Revisa tipos y plantillas |
| `npm run check:links` | Revisa los enlaces internos y las anclas del sitio generado (después de `build`) |
| `npm run verify` | Las tres comprobaciones anteriores juntas. Es lo que ejecuta la CI en cada PR |

## Editar el contenido

### Dónde está cada cosa

| Qué | Archivo |
|---|---|
| Textos de la portada | `src/content/home.md` |
| Páginas interiores | `src/content/pages/<sección>/<página>.md` |
| Dominio, enlaces externos y repositorio | `src/config.ts` |

La ruta del archivo es la dirección de la página:

| Archivo | Dirección |
|---|---|
| `protocolo/index.md` | `/protocolo` |
| `protocolo/consenso.mdx` | `/protocolo/consenso` |
| `proyecto/contacto.md` | `/proyecto/contacto` |

### Agregar una página

1. Crea el archivo en la carpeta de su sección, por ejemplo `src/content/pages/protocolo/staking-liquido.md`.
2. Escribe el encabezado:

```md
---
title: "Staking líquido"
summary: "Una frase que resume la página. Aparece bajo el título y en buscadores."
weight: 25           # orden dentro de la sección (menor va primero)
---

## Primera sección {#primera}

Texto…
```

Listo: la página aparece en el índice lateral, en anterior/siguiente y en el pie.

Campos del encabezado:

| Campo | Obligatorio | Para qué sirve |
|---|---|---|
| `title` | sí | Título de la página |
| `summary` | sí | Resumen bajo el título y descripción para buscadores |
| `weight` | no | Orden dentro de la sección. El `index.md` siempre va primero |
| `menuTitle` | no | Nombre en el índice lateral y el pie, si debe ser distinto del título |
| `updated` | no | Fecha de "Última revisión". Si no se indica, se usa la del último commit del archivo |
| `draft` | no | `true` la muestra en `npm run dev` y la deja fuera del sitio publicado |

### Secciones

Cada carpeta es una sección y su `index.md` la describe con un bloque `section:`:

```yaml
section:
  label: Protocolo        # nombre en el menú principal
  weight: 1               # orden en el menú y el pie
  accent: "#5BF0C8"       # color de acento sobre fondo oscuro
  ink: "#0A7A5E"          # color de los enlaces sobre fondo claro
  numbered: true          # numera las páginas en el índice lateral
  sequential: true        # muestra anterior / siguiente
  links:                  # enlaces extra bajo una línea en el índice lateral
    - { label: "Documentación ↗", href: /docs }
  attachTo: proyecto      # opcional: aparece dentro de otra sección en vez del menú principal
```

Para crear una sección nueva: crea la carpeta y su `index.md` con ese bloque.

### Escribir

- Cada `##` abre una sección numerada. El texto entre llaves es el ancla: `## Canales oficiales {#canales}` se enlaza como `/proyecto/contacto#canales`. No cambies un ancla sin buscar antes quién la enlaza; `npm run verify` avisa si alguna queda rota.
- Los enlaces internos usan rutas absolutas: `/protocolo/gobernanza#suministro`.
- `/docs` y `/consola` redirigen a las direcciones definidas en `src/config.ts`.
- Una etiqueta pequeña dentro del texto: `_Independiente_{.badge}`.

### Bloques de contenido

Para los elementos especiales no se escribe HTML: se usan bloques `:::`.

```md
:::nota[Antes de confiar en un mensaje]
Nadie puede hablar en nombre del proyecto.
:::

:::pregunta[¿Qué es 42 Chain?]
Una red pública de cadena de bloques. [Visión general](/protocolo)
:::

:::aparte
[Operar un nodo →](/desarrolladores/nodos)
:::

:::estado[Borrador]
Pendiente de revisión legal.
:::

:::datos
- **1 bloque** Finalidad
- **> 2/3** Poder de voto para confirmar
:::

:::cronologia{actual="Hoy"}
- **1988** Manifiesto criptoanarquista
  La criptografía como herramienta para proteger la libertad.
- **Hoy** 42 Chain
  Infraestructura pública y abierta.
:::
```

| Bloque | Se ve como |
|---|---|
| `:::nota[título]` | Recuadro destacado con título |
| `:::pregunta[pregunta]` | Pregunta frecuente desplegable |
| `:::aparte` | Texto pequeño en tipografía mono: enlaces "ver más", marcadores pendientes, aclaraciones |
| `:::estado[estado]` | Etiqueta de estado con una frase |
| `:::datos` | Cifras destacadas en columnas |
| `:::cronologia` | Línea de tiempo; `actual="…"` marca el hito actual |

Los bloques funcionan igual en `.md` y en `.mdx`. Se definen en `src/lib/content-blocks.ts`.

### Componentes interactivos (MDX)

Los archivos `.mdx` pueden incluir componentes de Astro. Consenso y Gobernanza los usan para sus simuladores:

```mdx
import VoteSim from '../../../components/VoteSim.astro';

<VoteSim />
```

### Si algo está mal escrito

El build se detiene y dice qué archivo corregir y por qué: un campo con un nombre equivocado, una carpeta sin `index.md`, un bloque `:::` desconocido o una pregunta sin texto. La CI ejecuta las mismas comprobaciones en cada pull request, así que un error no llega al sitio publicado.

## Estructura del código

```
src/
  config.ts                 Dominio, enlaces externos y repositorio
  content.config.ts         Esquema del contenido (campos válidos y obligatorios)
  content/home.md           Textos de la portada
  content/pages/            Páginas interiores, una carpeta por sección
  lib/site.ts               Menú, índice lateral, anterior/siguiente y pie, a partir del contenido
  lib/content-blocks.ts     Bloques ::: del Markdown
  styles/global.css         Estilos y colores (tokens en :root)
  layouts/Base.astro        <head> común: metadatos, fuentes, colores de sección
  layouts/Doc.astro         Plantilla de las páginas interiores
  components/               Encabezado, pie, índice lateral y simuladores
  scripts/hero-network.ts   Animación de fondo de la portada
  pages/index.astro         Diseño de la portada
  pages/[...slug].astro     Genera cada página interior
  pages/robots.txt.ts       robots.txt con el enlace al sitemap
```

Notas técnicas:

- Markdown se procesa con Sätteri, el procesador nativo de Astro 7.
- Las fuentes (Geist y Geist Mono) se descargan al compilar y se sirven desde el propio sitio.
- Astro genera una Content-Security-Policy con hashes de sus scripts en cada página. Un script externo o `<script>` inline nuevo necesita revisarse contra esa política (`astro.config.mjs → security.csp`).

## Publicar en Cloudflare Pages

1. Sube el repositorio a GitHub.
2. En Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** y elige el repositorio.
3. Configuración de compilación:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Variable de entorno: `NODE_VERSION = 24`
4. Agrega el dominio propio en **Custom domains**.

`public/_headers` define los encabezados de seguridad (HSTS, marcos, tipo de contenido) y la caché de los archivos con hash.

"Última revisión" se calcula con el historial de git. Si la plataforma clona el repositorio sin historial completo, todas las páginas mostrarán la fecha del último commit; en ese caso, indica `updated:` en las páginas donde la fecha importe.

## Pendientes antes de publicar

Los valores entre `[corchetes]` son marcadores. Los principales:

- `src/config.ts`: dominio, direcciones de la documentación y la Consola, y repositorio. El dominio también define las direcciones del sitemap y de `robots.txt`.
- Datos de la red: Chain ID (EVM y nativo) de la red principal y de pruebas, endpoints, decimales y tiempo de bloque (`src/content/home.md` y `desarrolladores/`).
- Canales oficiales: X, foro, correo de contacto y correo de seguridad (`proyecto/contacto.md`).
- Licencia del contenido del sitio (archivo `LICENSE`) y de la documentación.
- Imagen para redes sociales (`og:image`).

Para encontrarlos todos: `grep -rn "\[" src/content src/config.ts`.

## Idiomas

El sitio está en español y la configuración de i18n de Astro ya está activa (`astro.config.mjs`). Agregar otro idioma requiere adaptar `src/lib/site.ts` para que las carpetas de idioma (`src/content/pages/en/…`) no se interpreten como secciones.
