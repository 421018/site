/**
 * Content blocks: the `:::` shortcuts available in Markdown and MDX files
 * (the equivalent of Hugo shortcodes). Each one turns plain Markdown into the
 * markup the site's styles expect, so content files never need HTML.
 *
 *   :::note[Label]             Highlighted note with a label.
 *   :::faq[Question?]          Collapsible FAQ entry.
 *   :::aside                   Side remark in small mono type: "read more" links,
 *                              pending placeholders, footnotes.
 *   :::status[Draft]           Status line (badge + short text).
 *   :::lore[Heading]           Narrative aside (the protocol's sci-fi lore), visually
 *                              distinct from technical content. Never the only place
 *                              where a technical fact is stated.
 *   :::diagram[Caption]{name="motor"}
 *                              Inserts the app's diagrams/<name>.html from the catalog (responsive,
 *                              preferred) or <name>.svg, with the caption below.
 *   :::widget{name="fee-calc"} Interactive widget or data view rendered by the engine
 *                              (the names are listed in @42chain/widgets/names).
 *   :::figure[Caption]         Wraps a Markdown image (![alt](path)) with a caption.
 *                              {ratio="wide"} crops it to 16:9 so headers line up.
 *   :::facts                   Key figures. One list item per figure: `- **Value** Label`.
 *   :::timeline{current="…"}   Timeline. One list item per milestone:
 *                              `- **Date** Title` and the description on the next line.
 *                              The item whose date equals `current` is highlighted.
 *
 * An unknown block name, or a block missing its required [label], stops the
 * build with the file and line, so mistakes never reach the published site.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { defineMdastPlugin, type MdastVisitorContext } from 'satteri';
import type { ContainerDirective } from 'satteri';

type Node = { type: string; value?: string; data?: Record<string, unknown>; children?: Node[] };

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function fail(ctx: MdastVisitorContext, node: ContainerDirective, msg: string): never {
  const file = ctx.fileURL ? decodeURIComponent(ctx.fileURL.pathname.replace(/^.*\/src\//, 'src/')) : 'content';
  const line = node.position?.start.line;
  throw new Error(`${file}${line ? `:${line}` : ''} — :::${node.name}: ${msg}`);
}

/** Raw HTML node for the rendered page. */
const rawHtml = (html: string) => ({ raw: html, mdxExpressions: false });

function setTag(ctx: MdastVisitorContext, node: Node, hName: string, className?: string) {
  ctx.setField(node as never, 'data', { ...(node.data ?? {}), hName, ...(className ? { hProperties: { className: [className] } } : {}) });
}

/** Splits `- **Value** rest` list items into [strong text, remaining text]. */
function listItems(ctx: MdastVisitorContext, node: ContainerDirective): [string, string][] {
  const list = (node.children as Node[]).find((c) => c.type === 'list');
  if (!list) fail(ctx, node, 'needs a list with one item per line (`- **Value** text`).');
  return (list.children ?? []).map((item) => {
    const para = item.children?.[0];
    const strong = para?.children?.find((c) => c.type === 'strong');
    if (!para || !strong) fail(ctx, node, 'each list item must start with **bold** text.');
    const head = ctx.textContent(strong as never).trim();
    const rest = (para.children ?? []).filter((c) => c !== strong).map((c) => ctx.textContent(c as never)).join('');
    return [head, rest.trim()];
  });
}

/** Names of the ::: blocks, exported to the content contract. */
export const blockNames = ['note', 'faq', 'aside', 'status', 'lore', 'diagram', 'widget', 'figure', 'facts', 'timeline'] as const;

/**
 * Options: diagramsDirs returns, for the page being rendered, the folders
 * :::diagram looks in, in order (its language's diagrams, then the default
 * language's); widgets lists the names :::widget accepts.
 */
export interface BlockOptions {
  diagramsDirs?: (file: string | undefined) => string[];
  widgets?: readonly string[];
  /**
   * Links between products: [text](docs:/get-started/connect) becomes the docs
   * URL; also site: and console:. Content never hardcodes another product's domain.
   */
  linkBases?: Record<string, string>;
}

export const contentBlocks = ({ diagramsDirs, widgets = [], linkBases = {} }: BlockOptions = {}) => defineMdastPlugin({
  name: '42chain-content-blocks',
  link(node, ctx) {
    const m = node.url.match(/^(site|docs|console):(\/.*)$/);
    if (!m) return;
    const base = linkBases[m[1]];
    if (!base) {
      const file = ctx.fileURL ? decodeURIComponent(ctx.fileURL.pathname) : 'content';
      throw new Error(`${file}:${node.position?.start.line ?? '?'}: "${m[1]}:" links are not available in this app.`);
    }
    ctx.setField(node, 'url', base.replace(/\/$/, '') + m[2]);
  },
  containerDirective(node, ctx) {
    const children = node.children as Node[];
    const label = children[0]?.data?.directiveLabel ? children[0] : undefined;
    const needLabel = (what: string) => {
      if (!label) fail(ctx, node, `missing ${what} in brackets: :::${node.name}[…]`);
      return label;
    };

    switch (node.name) {
      case 'note': {
        setTag(ctx, node as never, 'div', 'note');
        if (label) setTag(ctx, label, 'span', 'nl');
        return;
      }
      case 'faq': {
        const summary = needLabel('the question');
        setTag(ctx, node as never, 'details', 'faq');
        setTag(ctx, summary, 'summary');
        ctx.appendChild(summary as never, [
          { type: 'text', value: ' ' },
          { type: 'emphasis', data: { hName: 'span', hProperties: { ariaHidden: 'true', className: ['pl'] } }, children: [{ type: 'text', value: '+' }] },
        ] as never);
        return;
      }
      case 'lore': {
        const heading = needLabel('the heading');
        setTag(ctx, node as never, 'aside', 'lore');
        setTag(ctx, heading, 'span', 'll');
        return;
      }
      case 'diagram': {
        const caption = needLabel('the caption');
        const name = node.attributes?.name;
        if (!name || !/^[a-z0-9-]+$/.test(name)) fail(ctx, node, 'needs a name: :::diagram[Caption]{name="file-name"}.');
        if (!diagramsDirs) fail(ctx, node, 'diagrams are not enabled for this app (no diagramsDirs).');
        const dirs = diagramsDirs(ctx.fileURL ? decodeURIComponent(ctx.fileURL.pathname) : undefined);
        const file = dirs.flatMap((dir) => ['html', 'svg'].map((ext) => join(dir, `${name}.${ext}`))).find((f) => existsSync(f));
        if (!file) fail(ctx, node, `no file diagrams/${name}.html or .svg in the catalog.`);
        const body = readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '').trim();
        const text = esc(ctx.textContent(caption as never).trim());
        ctx.replaceNode(node, rawHtml(`<figure class="diagram">${body}<figcaption>${text}</figcaption></figure>`));
        return;
      }
      case 'widget': {
        const name = node.attributes?.name;
        if (!name || !widgets.includes(name)) {
          fail(ctx, node, `unknown widget "${name ?? ''}". Available: ${widgets.join(', ') || 'none'}.`);
        }
        // An empty marker; the engine puts the widget's component here when it renders the page.
        ctx.replaceNode(node, rawHtml(`<div data-widget="${name}"></div>`));
        return;
      }
      case 'figure': {
        const caption = needLabel('the caption');
        if (!children.some((c) => c !== caption && c.type === 'paragraph' && c.children?.some((k) => k.type === 'image'))) {
          fail(ctx, node, 'needs a Markdown image inside: ![description](path).');
        }
        const ratio = node.attributes?.ratio;
        if (ratio && ratio !== 'wide') fail(ctx, node, 'ratio can only be "wide".');
        setTag(ctx, node as never, 'figure', ratio === 'wide' ? 'photo wide' : 'photo');
        setTag(ctx, caption, 'figcaption');
        return;
      }
      case 'aside': {
        const paras = children.filter((c) => c.type === 'paragraph');
        if (!paras.length) fail(ctx, node, 'needs at least one paragraph.');
        ctx.replaceNode(node, paras.map((p) => ({ type: 'paragraph', data: { hProperties: { className: ['msg'] } }, children: p.children })) as never);
        return;
      }
      case 'status': {
        const badge = needLabel('the status');
        setTag(ctx, node as never, 'p', 'st');
        setTag(ctx, badge, 'b');
        for (const c of children.slice(1)) if (c.type === 'paragraph') setTag(ctx, c, 'span');
        return;
      }
      case 'facts': {
        const html = listItems(ctx, node).map(([v, l]) => `<div><b>${esc(v)}</b><span>${esc(l)}</span></div>`).join('');
        ctx.replaceNode(node, rawHtml(`<div class="facts">${html}</div>`));
        return;
      }
      case 'timeline': {
        const current = node.attributes?.current;
        const html = listItems(ctx, node).map(([date, rest]) => {
          const [title, ...desc] = rest.split('\n');
          return `<div class="it${date === current ? ' now' : ''}"><span class="d">${esc(date)}</span><span class="t">${esc(title.trim())}</span><span class="s">${esc(desc.join(' ').trim())}</span></div>`;
        }).join('');
        ctx.replaceNode(node, rawHtml(`<div class="tl">${html}</div>`));
        return;
      }
      default:
        fail(ctx, node, `unknown block. Available: ${blockNames.join(', ')}.`);
    }
  },
});
