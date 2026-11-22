#!/usr/bin/env node
// Checks every internal link and #anchor in the built site (run `npm run build` first).
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
// The app's base path (Astro `base`), e.g. `--base /docs`. Links outside it belong to another app on the same domain.
const bi = process.argv.indexOf('--base');
const BASE = bi > 0 ? process.argv[bi + 1].replace(/\/$/, '') : '';
// Paths served by another app on the same domain when this one is at the root (e.g. `--skip /docs`).
const si = process.argv.indexOf('--skip');
const SKIP = si > 0 ? process.argv[si + 1].replace(/\/$/, '') : '';
if (!existsSync(DIST)) { console.error('✗ dist/ does not exist: run `npm run build` first.'); process.exit(1); }

const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : files.push(p); });
walk(DIST);

const html = files.filter((f) => f.endsWith('.html'));
if (!html.length) { console.error('✗ dist/ contains no pages.'); process.exit(1); }

const route = (f) => '/' + f.slice(DIST.length + 1).replace(/index\.html$/, '').replace(/\/$/, '');
const pages = new Map(html.map((f) => [route(f).replace(/\/$/, '') || '/', readFileSync(f, 'utf8')]));
const assets = new Set(files.map((f) => '/' + f.slice(DIST.length + 1)));
const ids = (doc) => new Set([...doc.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

let bad = 0;
for (const [from, doc] of pages) {
  for (const [, href] of doc.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    let [path, hash] = href.split('#');
    if (SKIP && (path === SKIP || path.startsWith(SKIP + '/'))) continue; // another app on the same domain
    if (BASE && path !== '') {
      if (path !== BASE && !path.startsWith(BASE + '/')) continue; // another app on the same domain
      path = path.slice(BASE.length) || '/';
    }
    if (assets.has(path)) continue;
    const target = path === '' ? from : (path.replace(/\/$/, '') || '/');
    const page = pages.get(target);
    if (!page) { console.log(`✗ ${from} → ${href} (page not found)`); bad++; continue; }
    if (hash && !ids(page).has(hash)) { console.log(`✗ ${from} → ${href} (anchor not found)`); bad++; }
  }
}
console.log(bad ? `\n${bad} broken link(s)` : `✓ ${pages.size} pages, all internal links OK`);
process.exit(bad ? 1 : 0);
