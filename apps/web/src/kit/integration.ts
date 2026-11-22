/**
 * Astro integration of the shared engine. It exposes the app's settings to the
 * kit's layouts and components as `virtual:42chain/kit`, so the same components
 * serve every app without importing an app's own config file.
 *
 *   integrations: [kit({ defaultLang: 'en', …, styles: ['./src/styles/global.css'] })]
 */
import type { AstroIntegration } from 'astro';
import type { KitConfig } from './types';

const ID = 'virtual:42chain/kit';

export function kit({ styles = [], ...config }: KitConfig & { styles?: string[] }): AstroIntegration {
  return {
    name: '@42chain/kit',
    hooks: {
      'astro:config:setup': ({ updateConfig, injectScript, config: astro }) => {
        // The app's own stylesheets (e.g. './src/styles/global.css'), on every page.
        for (const href of styles) injectScript('page-ssr', `import ${JSON.stringify(new URL(href, astro.root).pathname)};`);
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
