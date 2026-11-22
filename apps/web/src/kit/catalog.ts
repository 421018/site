/**
 * Location of the content: the Markdown and YAML in ./content that the site
 * is built from (texts under CC BY 4.0, see content/LICENSE).
 */
import { join, relative, resolve } from 'node:path';

const root = resolve(process.cwd(), 'content');

/** Absolute path inside content/, e.g. catalogPath('docs', 'es', 'pages'). */
export const catalogPath = (...parts: string[]) => join(root, ...parts);

/** Path of a content file relative to the repository (used by "edit this page"). */
export const catalogRelative = (filePath: string) => relative(process.cwd(), resolve(process.cwd(), filePath)).split('\\').join('/');
