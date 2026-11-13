// Checks every internal link and #anchor in the built site (run `npm run build` first).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); });
walk(DIST);

const route = (f) => '/' + f.slice(DIST.length + 1).replace(/index\.html$/, '').replace(/\/$/, '');
const pages = new Map(files.map((f) => [route(f).replace(/\/$/, '') || '/', readFileSync(f, 'utf8')]));
const ids = (html) => new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

let bad = 0;
for (const [from, html] of pages) {
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:)/.test(href) || href.startsWith('/_astro') || href === '/favicon.svg') continue;
    const [path, hash] = href.split('#');
    const target = path === '' ? from : (path.replace(/\/$/, '') || '/');
    const page = pages.get(target);
    if (!page) { console.log(`✗ ${from} → ${href} (page not found)`); bad++; continue; }
    if (hash && !ids(page).has(hash)) { console.log(`✗ ${from} → ${href} (anchor not found)`); bad++; }
  }
}
console.log(bad ? `\n${bad} broken link(s)` : `✓ ${pages.size} pages, all internal links OK`);
process.exit(bad ? 1 : 0);
