/**
 * Location of the content catalog (@42chain/catalog): the public Markdown and
 * YAML that the engine turns into the sites. It is resolved through the
 * installed package, so it works the same whether the catalog is a folder of
 * this repository, a git submodule or an npm dependency.
 */
import { createRequire } from 'node:module';
import { dirname, join, relative, resolve } from 'node:path';

const require = createRequire(join(process.cwd(), 'package.json'));
const root = dirname(require.resolve('@42chain/catalog/package.json'));

/** Absolute path inside the catalog, e.g. catalogPath('site', 'pages'). */
export const catalogPath = (...parts: string[]) => join(root, ...parts);

/** Path of a content file relative to the catalog root (used by "edit this page"). */
export const catalogRelative = (filePath: string) => relative(root, resolve(process.cwd(), filePath)).split('\\').join('/');
