/**
 * Site structure, derived from the content files. Nothing here is written by
 * hand: adding, renaming or reordering a Markdown file updates the main menu,
 * the side index, previous/next and the footer on the next build.
 */
import { execFileSync } from 'node:child_process';
import { basename, dirname, resolve } from 'node:path';
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { defaultLang, homeHref, langPrefix, languages, resolveHref } from './i18n';

export type Page = CollectionEntry<'pages'>;
export type Link = { href: string; label: string };
export type Section = {
  key: string;
  lang: string;
  label: string;
  weight: number;
  href: string;
  accent?: string;
  ink?: string;
  numbered: boolean;
  sequential: boolean;
  /** Opens a panel with its pages in the main menu. */
  dropdown: boolean;
  /** Section whose main-menu entry and side index this one appears under. */
  home: string;
  pages: Page[];
  links: Link[];
  /** Sections attached under this one (shown after a separator). */
  attached: Section[];
};

/** Language of a page: the first segment of its id (es/protocolo/consenso → es). */
export const pageLang = (p: Page) => p.id.split('/')[0];
/** Path of a page inside its language: es/protocolo/consenso → protocolo/consenso. */
export const pagePath = (p: Page) => p.id.split('/').slice(1).join('/');
const sectionOf = (p: Page) => pagePath(p).split('/')[0];
const isIndex = (p: Page) => !pagePath(p).includes('/');
/** 0 for a section's index, 1 for a page or a group's index, 2 for a page inside a group. */
const depthOf = (p: Page) => pagePath(p).split('/').length - 1;
/** The page's slug at the section level, or its group's slug. */
const topOf = (p: Page) => pagePath(p).split('/')[1] ?? '';
export const hrefOf = (p: Page) => `${langPrefix(pageLang(p))}/${pagePath(p)}`;
export const menuLabel = (p: Page) => p.data.menuTitle ?? p.data.title;

let cache: Promise<Map<string, Map<string, Section>>> | undefined;

/** Sections of every language, validated. Throws with a clear message on inconsistent content. */
function allSections() {
  return (cache ??= build());
}

/** The sections of one language. */
export async function getSections(lang: string): Promise<Map<string, Section>> {
  return (await allSections()).get(lang) ?? new Map();
}

/** Every page of every language that is published (for getStaticPaths). */
export async function getAllPages(): Promise<Page[]> {
  return [...(await allSections()).values()].flatMap((m) => [...m.values()].flatMap((s) => s.pages));
}

async function build() {
  const pages = await getCollection('pages', (p) => import.meta.env.DEV || !p.data.draft);
  const errors: string[] = [];
  const byLang = new Map<string, Map<string, Section>>(languages.map((l) => [l, new Map()]));

  for (const p of pages) {
    const lang = pageLang(p);
    const sections = byLang.get(lang);
    if (!sections) { errors.push(`${p.filePath}: "${lang}" is not a language of this app (${languages.join(', ')}).`); continue; }
    if (pagePath(p) === '') errors.push(`${p.filePath}: the home page is edited in the language's home.md, not in pages/.`);
    if (lang === defaultLang && p.data.translationOf) errors.push(`${p.filePath}: "translationOf" is only for languages other than ${defaultLang}.`);
    if (isIndex(p)) {
      const s = p.data.section;
      if (!s) { errors.push(`${p.filePath}: a section's index.md needs a "section:" block.`); continue; }
      sections.set(pagePath(p), {
        key: pagePath(p), lang, label: s.label, weight: s.weight, href: hrefOf(p), accent: s.accent, ink: s.ink,
        numbered: s.numbered, sequential: s.sequential, dropdown: s.dropdown, home: pagePath(p), pages: [], links: s.links.map((l) => ({ ...l, href: resolveHref(l.href) })), attached: [],
      });
    } else if (p.data.section) {
      errors.push(`${p.filePath}: "section:" is only allowed in the folder's index.md.`);
    }
  }
  const originals = new Set(pages.filter((p) => pageLang(p) === defaultLang).map(pagePath));
  for (const p of pages) {
    const sections = byLang.get(pageLang(p));
    if (!sections) continue;
    const t = p.data.translationOf;
    if (t && !originals.has(t)) errors.push(`${p.filePath}: translationOf "${t}" is not a page in ${defaultLang}.`);
    if (depthOf(p) > 2) errors.push(`${p.filePath}: pages can be nested one level deep at most (section/group/page).`);
    const s = sections.get(sectionOf(p));
    if (!s) { if (!isIndex(p)) errors.push(`${p.filePath}: folder "${sectionOf(p)}" has no index.md.`); continue; }
    s.pages.push(p);
  }
  for (const sections of byLang.values()) {
    for (const s of sections.values()) {
      // A group is a folder inside a section (section/group/page.md); its index.md
      // (section/group) is the group's own page and sets its position.
      const groupWeight = new Map<string, number>();
      for (const p of s.pages) if (depthOf(p) === 1) groupWeight.set(topOf(p), p.data.weight);
      for (const p of s.pages) if (depthOf(p) === 2 && !groupWeight.has(topOf(p))) errors.push(`${p.filePath}: group folder "${s.key}/${topOf(p)}" needs an index.md.`);
      s.pages.sort((a, b) =>
        Number(!isIndex(a)) - Number(!isIndex(b)) ||
        (groupWeight.get(topOf(a)) ?? 0) - (groupWeight.get(topOf(b)) ?? 0) ||
        topOf(a).localeCompare(topOf(b)) ||
        depthOf(a) - depthOf(b) ||
        a.data.weight - b.data.weight ||
        a.id.localeCompare(b.id));
      const parentKey = s.pages[0]?.data.section?.attachTo;
      if (!parentKey) continue;
      const parent = sections.get(parentKey);
      if (!parent) { errors.push(`${s.lang}/pages/${s.key}/index.md: attachTo "${parentKey}" is not a section.`); continue; }
      s.home = parent.key;
      s.accent ??= parent.accent;
      s.ink ??= parent.ink;
      parent.attached.push(s);
    }
    for (const s of sections.values()) s.attached.sort((a, b) => a.weight - b.weight);
  }

  if (errors.length) throw new Error('Invalid content:\n  ' + errors.join('\n  '));
  return byLang;
}

/**
 * The versions of a page in every language that has one, as { lang: href }.
 * Pages are matched through `translationOf` (the path in the default language).
 */
export async function getAlternates(page: Page): Promise<Record<string, string>> {
  const all = await getAllPages();
  const key = pageLang(page) === defaultLang ? pagePath(page) : page.data.translationOf;
  const out: Record<string, string> = {};
  if (!key) return { [pageLang(page)]: hrefOf(page) };
  for (const p of all) {
    if ((pageLang(p) === defaultLang && pagePath(p) === key) || (pageLang(p) !== defaultLang && p.data.translationOf === key)) out[pageLang(p)] = hrefOf(p);
  }
  return out;
}

/** Home pages of every language, as { lang: href } (alternates of the home and 404 pages). */
export const homeAlternates = () => Object.fromEntries(languages.map((l) => [l, homeHref(l)]));

/** Sections shown in the main menu and footer, in order. */
export async function getMenu(lang: string): Promise<Section[]> {
  return [...(await getSections(lang)).values()].filter((s) => s.home === s.key).sort((a, b) => a.weight - b.weight);
}

export async function getSection(lang: string, key: string): Promise<Section> {
  const s = (await getSections(lang)).get(key);
  if (!s) throw new Error(`Unknown section: ${lang}/${key}`);
  return s;
}

export const sectionKey = sectionOf;

/**
 * Side index of a section: its own pages (pages inside a group are indented
 * under the group's page), then links and attached sections after a separator.
 */
export function sideIndex(s: Section) {
  let top = 0, sub = 0;
  const items = s.pages.map((p) => {
    const depth = depthOf(p) === 2 ? 1 : 0;
    if (depth === 0) { top++; sub = 0; } else sub++;
    const n = s.numbered ? (depth === 0 ? String(top) : `${top}.${sub}`) : '';
    return { href: hrefOf(p), label: menuLabel(p), n, depth };
  });
  const refs: Link[] = [...s.links, ...s.attached.flatMap((a) => a.pages.map((p) => ({ href: hrefOf(p), label: menuLabel(p) })))];
  return { label: s.label, items, refs };
}

export function prevNext(s: Section, page: Page) {
  if (!s.sequential) return { prev: null, next: null };
  const i = s.pages.findIndex((p) => p.id === page.id);
  const at = (j: number) => (s.pages[j] ? { href: hrefOf(s.pages[j]), label: menuLabel(s.pages[j]) } : null);
  return { prev: at(i - 1), next: at(i + 1) };
}

/**
 * Main menu panel of a section (dropdown: true): its index page as the
 * featured entry, then its pages (not those inside groups) with icon and line.
 */
export function menuPanel(s: Section) {
  const [index, ...rest] = s.pages;
  return {
    featured: { href: hrefOf(index), label: menuLabel(index), text: index.data.summary },
    items: rest.filter((p) => depthOf(p) < 2).map((p) => ({ href: hrefOf(p), label: menuLabel(p), text: p.data.menuText, icon: p.data.icon })),
  };
}

/** Footer columns: one per main-menu section with its pages, links and attached section index pages. */
export async function getFooter(lang: string) {
  return (await getMenu(lang)).map((s) => ({
    key: s.key,
    label: s.label,
    links: [
      ...s.pages.filter((p) => depthOf(p) < 2).map((p) => ({ href: hrefOf(p), label: menuLabel(p) })),
      ...s.links,
      ...s.attached.map((a) => ({ href: a.href, label: menuLabel(a.pages[0]) })),
    ],
  }));
}

/**
 * Date of the last commit that changed a file's content, or undefined outside a
 * git checkout. Follows the file across moves and ignores commits that only
 * moved it (status R), so restructuring the repository does not reset dates.
 */
export function lastCommitDate(filePath: string | undefined): Date | undefined {
  if (!filePath) return undefined;
  try {
    // Run git in the file's own folder: the catalog may be a submodule with its own history.
    const abs = resolve(process.cwd(), filePath);
    const out = execFileSync('git', ['-C', dirname(abs), 'log', '-1', '--follow', '--diff-filter=AM', '--format=%cI', '--', basename(abs)], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    return out ? new Date(out) : undefined;
  } catch {
    return undefined;
  }
}

/** Site-wide visitor-facing text of a language (the app's <lang>/site.md in the catalog). */
export async function getSiteText(lang: string) {
  const entry = await getEntry('site', lang);
  if (!entry) throw new Error(`Missing the app's ${lang}/site.md in the content catalog`);
  return entry.data;
}
