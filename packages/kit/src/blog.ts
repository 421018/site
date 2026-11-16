/**
 * The blog ("Bitácora"): posts from the catalog's <lang>/posts/, for apps
 * whose site.md has a `blog` block. A post's URL is /<lang prefix>/<path>/<slug>,
 * where <path> is its category's path (e.g. use-cases) or the blog's.
 */
import { getCollection } from 'astro:content';
import { langPrefix, languages, sourceLang } from './i18n';
import { getAllPages, getSiteText, hrefOf, lastCommitDate } from './site';

export type Post = {
  id: string;
  /** Set when the post is shown in the source language because it is not translated yet. */
  fallbackOf?: Post;
  body?: string;
  filePath?: string;
  data: {
    title: string; summary: string; category: string; date?: Date;
    image?: { src: string; width: number; height: number; format: string };
    alt?: string; credit?: string; featured: boolean; draft: boolean;
  };
};
export type Blog = NonNullable<Awaited<ReturnType<typeof getSiteText>>['blog']>;

export const postLang = (p: Post) => p.id.split('/')[0];
export const postSlug = (p: Post) => p.id.split('/').slice(1).join('/');
/** Publication date: front matter, else the file's last commit; undefined when neither is known. */
export const postDate = (p: Post): Date | undefined => p.data.date ?? lastCommitDate(p.filePath);
/** Minutes to read, at 200 words a minute (at least 1). */
export const readingMinutes = (p: Post) => Math.max(1, Math.round((p.body ?? '').split(/\s+/).filter(Boolean).length / 200));
export const categoryOf = (blog: Blog, p: Post) => blog.categories.find((c) => c.id === p.data.category)!;
export const postHref = (blog: Blog, p: Post) => `${langPrefix(postLang(p))}/${categoryOf(blog, p).path ?? blog.path}/${postSlug(p)}`;
export const blogHref = (blog: Blog, lang: string) => `${langPrefix(lang)}/${blog.path}`;
/** Photo tint of a category, by its position in site.md. */
export const categoryTint = (blog: Blog, id: string) => ['var(--star)', 'var(--acc)', 'var(--nebula)', 'var(--fg-3)'][Math.max(0, blog.categories.findIndex((c) => c.id === id)) % 4];

/** The blog config of a language, if the app has a blog. */
export async function getBlog(lang: string): Promise<Blog | undefined> {
  return (await getSiteText(lang)).blog;
}

let cache: Promise<Post[]> | undefined;
async function allPosts(): Promise<Post[]> {
  return (cache ??= (async () => {
    if (!(await Promise.all(languages.map(getBlog))).some(Boolean)) return [];
    const posts = (await getCollection('posts' as never)) as unknown as Post[];
    const errors: string[] = [];
    const pageHrefs = new Set((await getAllPages()).map(hrefOf));
    const seen = new Set<string>();
    for (const p of posts) {
      const blog = await getBlog(postLang(p));
      if (!blog) { errors.push(`${p.filePath}: this language's site.md has no "blog" block.`); continue; }
      if (!blog.categories.some((c) => c.id === p.data.category)) { errors.push(`${p.filePath}: unknown category "${p.data.category}" (site.md → blog.categories).`); continue; }
      const href = postHref(blog, p);
      if (pageHrefs.has(href) || seen.has(href)) errors.push(`${p.filePath}: ${href} is already used by another page or post.`);
      seen.add(href);
    }
    if (errors.length) throw new Error('Invalid blog content:\n  ' + errors.join('\n  '));
    // Every language with a blog has every post: posts not translated yet are the source-language post.
    const ids = new Set(posts.map((p) => p.id));
    for (const lang of languages) {
      if (lang === sourceLang || !(await getBlog(lang))) continue;
      for (const p of posts.filter((p) => postLang(p) === sourceLang && !ids.has(`${lang}/${postSlug(p)}`))) {
        posts.push({ ...p, id: `${lang}/${postSlug(p)}`, fallbackOf: p });
      }
    }
    return posts
      .filter((p) => import.meta.env.DEV || !p.data.draft)
      .sort((a, b) => (postDate(b)?.getTime() ?? 0) - (postDate(a)?.getTime() ?? 0));
  })());
}

/** Posts of a language, newest first. */
export async function getPosts(lang: string): Promise<Post[]> {
  return (await allPosts()).filter((p) => postLang(p) === lang);
}

/** Posts of the blog index: categories with their own path (a site section) are listed there instead. */
export async function getBlogPosts(lang: string): Promise<Post[]> {
  const blog = await getBlog(lang);
  return blog ? (await getPosts(lang)).filter((p) => !categoryOf(blog, p).path) : [];
}

/** Up to n other posts of the same language, same category first. */
export async function relatedPosts(p: Post, n = 3): Promise<Post[]> {
  const others = (await getPosts(postLang(p))).filter((o) => o.id !== p.id);
  return [...others.filter((o) => o.data.category === p.data.category), ...others.filter((o) => o.data.category !== p.data.category)].slice(0, n);
}

/** Whether the blog index of a language exists (it has posts of its own). */
export const hasBlogIndex = async (lang: string) => (await getBlogPosts(lang)).length > 0;

/** Routes of every blog index and post (for getStaticPaths). */
export async function getBlogRoutes() {
  const routes: { href: string; props: { kind: 'blog'; lang: string } | { kind: 'post'; post: Post } }[] = [];
  for (const lang of languages) {
    const blog = await getBlog(lang);
    if (!blog) continue;
    if ((await getBlogPosts(lang)).length) routes.push({ href: blogHref(blog, lang), props: { kind: 'blog', lang } });
    for (const post of await getPosts(lang)) routes.push({ href: postHref(blog, post), props: { kind: 'post', post } });
  }
  return routes;
}
