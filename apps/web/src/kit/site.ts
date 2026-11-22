/**
 * Site structure, derived from the content files. Nothing here is written by
 * hand: adding, renaming or reordering a Markdown file updates the main menu,
 * the side index, previous/next and the footer on the next build.
 */
import { execFileSync } from 'node:child_process';
import { basename, dirname, resolve } from 'node:path';
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import { homeHref, langPrefix, languages, resolveHref, sourceLang, type Area } from './i18n';

/**
 * A page of a language in an area (site or docs). When the language has no
 * translation yet, it is the source-language page served at this language's
 * URL: `fallbackOf` is that page (render it, link its file) and the page shows a notice.
 */
type PageEntry = CollectionEntry<'pages'>;
export type Page = PageEntry & { area: Area; fallbackOf?: PageEntry };

/** Content collections of each area: its interior pages and its site-wide text. The console has no Markdown pages: its screens are code. */
const COLLECTIONS = { site: { pages: 'pages', text: 'site' }, docs: { pages: 'docsPages', text: 'docsSite' }, console: { pages: undefined, text: 'consoleSite' } } as const;
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
  /** Listed in the main menu. */
  menu: boolean;
  /** Opens a panel with its pages in the main menu. */
  dropdown: boolean;
  /** Section whose main-menu entry and side index this one appears under. */
  home: string;
  pages: Page[];
  links: Link[];
  /** Sections attached under this one (shown after a separator). */
  attached: Section[];
};

/** Language of a page: the first segment of its id (es/protocol/consensus → es). */
export const pageLang = (p: Page) => p.id.split('/')[0];
/** Path of a page inside its language: es/protocol/consensus → protocol/consensus. */
export const pagePath = (p: Page) => p.id.split('/').slice(1).join('/');
const sectionOf = (p: Page) => pagePath(p).split('/')[0];
const isIndex = (p: Page) => !pagePath(p).includes('/');
/** 0 for a section's index, 1 for a page or a group's index, 2 for a page inside a group. */
const depthOf = (p: Page) => pagePath(p).split('/').length - 1;
/** The page's slug at the section level, or its group's slug. */
const topOf = (p: Page) => pagePath(p).split('/')[1] ?? '';
export const hrefOf = (p: Page) => `${langPrefix(pageLang(p), p.area)}/${pagePath(p)}`;
export const menuLabel = (p: Page) => p.data.menuTitle ?? p.data.title;

const cache = new Map<Area, Promise<Map<string, Map<string, Section>>>>();

/** Sections of every language of an area, validated. Throws with a clear message on inconsistent content. */
function allSections(area: Area) {
  if (!cache.has(area)) cache.set(area, build(area));
  return cache.get(area)!;
}

/** The sections of one language in an area. */
export async function getSections(lang: string, area: Area = 'site'): Promise<Map<string, Section>> {
  return (await allSections(area)).get(lang) ?? new Map();
}

/** Every published page of every language in an area (for getStaticPaths). */
export async function getAllPages(area: Area = 'site'): Promise<Page[]> {
  return [...(await allSections(area)).values()].flatMap((m) => [...m.values()].flatMap((s) => s.pages));
}

async function build(area: Area) {
  const collection = COLLECTIONS[area].pages;
  const entries = collection ? ((await getCollection(collection, (p) => import.meta.env.DEV || !p.data.draft)) as PageEntry[]) : [];
  const own: Page[] = entries.map((p) => ({ ...p, area }));
  // Every language has every page: pages not translated yet are the source-language page.
  const ownIds = new Set(own.map((p) => p.id));
  const fallbacks: Page[] = languages
    .filter((l) => l !== sourceLang)
    .flatMap((l) => own.filter((p) => pageLang(p) === sourceLang && !ownIds.has(`${l}/${pagePath(p)}`)).map((p) => ({ ...p, id: `${l}/${pagePath(p)}`, fallbackOf: p })));
  const pages: Page[] = [...own, ...fallbacks];
  const errors: string[] = [];
  const byLang = new Map<string, Map<string, Section>>(languages.map((l) => [l, new Map()]));

  for (const p of pages) {
    const lang = pageLang(p);
    const sections = byLang.get(lang);
    if (!sections) { errors.push(`${p.filePath}: "${lang}" is not a language of the site (${languages.join(', ')}).`); continue; }
    if (pagePath(p) === '') errors.push(`${p.filePath}: the home page is edited in the language's home.md, not in pages/.`);
    if (isIndex(p)) {
      const s = p.data.section;
      if (!s) { errors.push(`${p.filePath}: a section's index.md needs a "section:" block.`); continue; }
      sections.set(pagePath(p), {
        key: pagePath(p), lang, label: s.label, weight: s.weight, href: hrefOf(p), accent: s.accent, ink: s.ink,
        numbered: s.numbered, sequential: s.sequential, menu: s.menu, dropdown: s.dropdown, home: pagePath(p), pages: [], links: s.links.map((l) => ({ ...l, href: resolveHref(l.href, lang, area) })), attached: [],
      });
    } else if (p.data.section) {
      errors.push(`${p.filePath}: "section:" is only allowed in the folder's index.md.`);
    }
  }
  const originals = new Set(own.filter((p) => pageLang(p) === sourceLang).map(pagePath));
  for (const p of pages) {
    const sections = byLang.get(pageLang(p));
    if (!sections) continue;
    if (pageLang(p) !== sourceLang && !originals.has(pagePath(p))) errors.push(`${p.filePath}: a translation needs the page at the same path in ${sourceLang} (${pagePath(p)}).`);
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
 * A translation lives at the same path in its language's folder.
 */
export async function getAlternates(page: Page): Promise<Record<string, string>> {
  const all = await getAllPages(page.area);
  // Only real translations: a page shown in the source language is not a version of its own.
  return Object.fromEntries(all.filter((p) => pagePath(p) === pagePath(page) && !p.fallbackOf).map((p) => [pageLang(p), hrefOf(p)]));
}

/** Home pages of every language in an area, as { lang: href } (alternates of the home and 404 pages). */
export const homeAlternates = (area: Area = 'site') => Object.fromEntries(languages.map((l) => [l, homeHref(l, area)]));

/** Sections of an area shown in its main menu and footer, in order. */
export async function getMenu(lang: string, area: Area = 'site'): Promise<Section[]> {
  return [...(await getSections(lang, area)).values()].filter((s) => s.home === s.key && s.menu !== false).sort((a, b) => a.weight - b.weight);
}

export async function getSection(lang: string, key: string, area: Area = 'site'): Promise<Section> {
  const s = (await getSections(lang, area)).get(key);
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
export async function getFooter(lang: string, area: Area = 'site') {
  return (await getMenu(lang, area)).map((s) => ({
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

/** Visitor-facing text of an area in a language (content/<area>/<lang>/site.md). */
export async function getSiteText(lang: string, area: Area = 'site') {
  const entry = await getEntry(COLLECTIONS[area].text, lang);
  if (!entry) throw new Error(`Missing content/${area}/${lang}/site.md`);
  return entry.data;
}
