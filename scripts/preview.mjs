#!/usr/bin/env node
/**
 * Serves both built apps on one origin, as in production: the site at /,
 * the documentation at /docs. Run `npm run build` first (or `npm run preview`,
 * which builds and then serves). Static files only: no live reload.
 *
 *   node scripts/preview.mjs [--port 4300]
 */
import { createServer } from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { extname, join, normalize } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const pi = process.argv.indexOf('--port');
const PORT = pi > 0 ? Number(process.argv[pi + 1]) : 4300;
const APPS = [
  { base: '/docs', dir: join(root, 'apps/docs/dist') },
  { base: '', dir: join(root, 'apps/site/dist') },
];
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.json': 'application/json', '.xml': 'application/xml', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.woff': 'font/woff', '.txt': 'text/plain; charset=utf-8', '.wasm': 'application/wasm',
  '.pf_meta': 'application/octet-stream', '.pf_index': 'application/octet-stream', '.pf_fragment': 'application/octet-stream', '.pagefind': 'application/octet-stream',
};

const isFile = (p) => { try { return statSync(p).isFile(); } catch { return false; } };

createServer((req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const app = APPS.find((a) => a.base === '' || path === a.base || path.startsWith(a.base + '/'));
  const rel = normalize(path.slice(app.base.length) || '/').replace(/^(\.\.[/\\])+/, '');
  const candidates = [join(app.dir, rel), join(app.dir, rel + '.html'), join(app.dir, rel, 'index.html')];
  let file = candidates.find(isFile);
  let status = 200;
  if (!file) {
    // The 404 page of the language (/es/…) or the default one.
    const lang = rel.match(/^\/(es)(\/|$)/)?.[1];
    file = [lang && join(app.dir, lang, '404.html'), join(app.dir, '404.html')].find((f) => f && isFile(f));
    status = 404;
  }
  if (!file) { res.writeHead(404).end('Not found'); return; }
  res.writeHead(status, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`Both sites, as in production: http://localhost:${PORT} (documentation at /docs)`));
