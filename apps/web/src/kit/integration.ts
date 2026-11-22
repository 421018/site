/**
 * Astro integration of the kit. It exposes the site's settings to the kit's
 * layouts and components as `virtual:42chain/kit`, so they do not import the
 * site's config file.
 *
 *   integrations: [kit({ defaultLang: 'en', sourceLang: 'es', languages: { … } })]
 */
import type { AstroIntegration } from 'astro';
import { copyFileSync, existsSync } from 'node:fs';
import type { KitConfig } from './types';

const ID = 'virtual:42chain/kit';

export function kit(config: KitConfig): AstroIntegration {
  return {
    name: '@42chain/kit',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [
              {
                name: '42chain-kit-config',
                resolveId: (id: string) => (id === ID ? '\0' + ID : undefined),
                load: (id: string) => (id === '\0' + ID ? `export default ${JSON.stringify(config)};` : undefined),
              },
            ],
          },
        });
      },
      // Cloudflare serves the nearest 404.html: the documentation gets its own.
      'astro:build:done': ({ dir }) => {
        for (const lang of ['', ...Object.keys(config.languages).filter((l) => l !== config.defaultLang).map((l) => `/${l}`)]) {
          const from = new URL(`./docs${lang}/404/index.html`, dir);
          if (existsSync(from)) copyFileSync(from, new URL(`./docs${lang}/404.html`, dir));
        }
      },
    },
  };
}
