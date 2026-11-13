/**
 * Site structure, derived from the content files. Nothing here is written by
 * hand: adding, renaming or reordering a Markdown file updates the main menu,
 * the side index, previous/next and the footer on the next build.
 */
import { execFileSync } from 'node:child_process';
import { getCollection, type CollectionEntry } from 'astro:content';

export type Page = CollectionEntry<'pages'>;
export type Link = { href: string; label: string };
export type Section = {
  key: string;
  label: string;
  weight: number;
  href: string;
  accent?: string;
  ink?: string;
  numbered: boolean;
  sequential: boolean;
  /** Section whose main-menu entry and side index this one appears under. */
  home: string;
  pages: Page[];
  links: Link[];
  /** Sections attached under this one (shown after a separator). */
  attached: Section[];
};

const sectionOf = (p: Page) => p.id.split('/')[0];
const isIndex = (p: Page) => !p.id.includes('/');
export const hrefOf = (p: Page) => '/' + p.id;
export const menuLabel = (p: Page) => p.data.menuTitle ?? p.data.title;

let cache: Promise<Map<string, Section>> | undefined;

/** All sections, validated. Throws with a clear message on inconsistent content. */
export function getSections(): Promise<Map<string, Section>> {
  return (cache ??= build());
}

async function build() {
  const pages = await getCollection('pages', (p) => import.meta.env.DEV || !p.data.draft);
  const errors: string[] = [];
  const sections = new Map<string, Section>();

  for (const p of pages) {
    if (p.id === '') errors.push('src/content/pages/index.md: la portada se edita en src/content/home.md.');
    if (isIndex(p)) {
      const s = p.data.section;
      if (!s) { errors.push(`${p.filePath}: el index.md de una sección necesita un bloque "section:".`); continue; }
      sections.set(p.id, {
        key: p.id, label: s.label, weight: s.weight, href: hrefOf(p), accent: s.accent, ink: s.ink,
        numbered: s.numbered, sequential: s.sequential, home: p.id, pages: [], links: s.links, attached: [],
      });
    } else if (p.data.section) {
      errors.push(`${p.filePath}: "section:" solo va en el index.md de la carpeta.`);
    }
  }
  for (const p of pages) {
    const s = sections.get(sectionOf(p));
    if (!s) { if (!isIndex(p)) errors.push(`${p.filePath}: la carpeta "${sectionOf(p)}" no tiene index.md.`); continue; }
    s.pages.push(p);
  }
  for (const s of sections.values()) {
    s.pages.sort((a, b) => Number(!isIndex(a)) - Number(!isIndex(b)) || a.data.weight - b.data.weight || a.id.localeCompare(b.id));
    const parentKey = pages.find((p) => p.id === s.key)?.data.section?.attachTo;
    if (!parentKey) continue;
    const parent = sections.get(parentKey);
    if (!parent) { errors.push(`src/content/pages/${s.key}/index.md: attachTo "${parentKey}" no es una sección.`); continue; }
    s.home = parent.key;
    s.accent ??= parent.accent;
    s.ink ??= parent.ink;
    parent.attached.push(s);
  }
  for (const s of sections.values()) s.attached.sort((a, b) => a.weight - b.weight);

  if (errors.length) throw new Error('Contenido inválido:\n  ' + errors.join('\n  '));
  return sections;
}

/** Sections shown in the main menu and footer, in order. */
export async function getMenu(): Promise<Section[]> {
  return [...(await getSections()).values()].filter((s) => s.home === s.key).sort((a, b) => a.weight - b.weight);
}

export async function getSection(key: string): Promise<Section> {
  const s = (await getSections()).get(key);
  if (!s) throw new Error(`Sección desconocida: ${key}`);
  return s;
}

export const sectionKey = sectionOf;

/** Side index of a section: its own pages, then links and attached sections after a separator. */
export function sideIndex(s: Section) {
  const items = s.pages.map((p, i) => ({ href: hrefOf(p), label: menuLabel(p), n: s.numbered ? String(i + 1) : '' }));
  const refs: Link[] = [...s.links, ...s.attached.flatMap((a) => a.pages.map((p) => ({ href: hrefOf(p), label: menuLabel(p) })))];
  return { label: s.label, items, refs };
}

export function prevNext(s: Section, page: Page) {
  if (!s.sequential) return { prev: null, next: null };
  const i = s.pages.findIndex((p) => p.id === page.id);
  const at = (j: number) => (s.pages[j] ? { href: hrefOf(s.pages[j]), label: menuLabel(s.pages[j]) } : null);
  return { prev: at(i - 1), next: at(i + 1) };
}

/** Footer columns: one per main-menu section with its pages, links and attached section index pages. */
export async function getFooter() {
  return (await getMenu()).map((s) => ({
    label: s.label,
    links: [
      ...s.pages.map((p) => ({ href: hrefOf(p), label: menuLabel(p) })),
      ...s.links,
      ...s.attached.map((a) => ({ href: a.href, label: menuLabel(a.pages[0]) })),
    ],
  }));
}

/** Date of the last commit that touched a file, or undefined outside a git checkout. */
export function lastCommitDate(filePath: string | undefined): Date | undefined {
  if (!filePath) return undefined;
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', filePath], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    return out ? new Date(out) : undefined;
  } catch {
    return undefined;
  }
}
