/**
 * Astro integration of the shared engine. It exposes the app's settings to the
 * kit's layouts and components as `virtual:42chain/kit`, so the same components
 * serve every app without importing an app's own config file.
 *
 *   integrations: [kit({ lang: 'es', ogLocale: 'es_ES', editBase: '…/edit/main/apps/site/' })]
 */
import type { AstroIntegration } from 'astro';
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
    },
  };
}
