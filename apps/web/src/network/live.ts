/**
 * Reading a network from the browser: each public EVM RPC is asked, in one
 * batch, for its chain id, latest block and gas price. Used by the console's
 * live status and the home page's live band. Browser-only.
 */
export type Reading = { ok: true; ms: number; chain: number; height: number; time: number; gas: number };
export type Probe = Reading | { ok: false };

const body = JSON.stringify([
  { jsonrpc: '2.0', id: 1, method: 'eth_chainId', params: [] },
  { jsonrpc: '2.0', id: 2, method: 'eth_getBlockByNumber', params: ['latest', false] },
  { jsonrpc: '2.0', id: 3, method: 'eth_gasPrice', params: [] },
]);

/** One reading of one endpoint; { ok: false } when it does not answer in six seconds or answers badly. */
export async function probe(url: string): Promise<Probe> {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 6000);
  const t0 = performance.now();
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body, signal: ctl.signal });
    const data = (await res.json()) as { id: number; result: any }[];
    const r = Object.fromEntries(data.map((x) => [x.id, x.result]));
    return { ok: true, ms: Math.round(performance.now() - t0), chain: parseInt(r[1], 16), height: parseInt(r[2].number, 16), time: parseInt(r[2].timestamp, 16), gas: parseInt(r[3], 16) };
  } catch {
    return { ok: false };
  } finally {
    clearTimeout(timer);
  }
}

/** Blocks a provider may lag behind the network's latest before it counts as behind. */
export const BEHIND = 3;

/** Reads every endpoint of a network: the readings in order, the good ones (right chain) and the highest. */
export async function readNetwork(urls: string[], chain: number) {
  const results = await Promise.all(urls.map(probe));
  const good = results.filter((r): r is Reading => r.ok && r.chain === chain);
  const top = good.reduce<Reading | undefined>((m, r) => (!m || r.height > m.height ? r : m), undefined);
  const online = top ? good.filter((r) => r.height >= top.height - BEHIND).length : 0;
  const topUrl = top ? urls[results.indexOf(top)] : undefined;
  return { results, good, top, topUrl, online };
}

/** Timestamp (seconds) of a block, or undefined. */
export async function blockTime(url: string, height: number): Promise<number | undefined> {
  try {
    const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'eth_getBlockByNumber', params: ['0x' + height.toString(16), false] }) });
    const { result } = (await res.json()) as { result?: { timestamp: string } };
    return result ? parseInt(result.timestamp, 16) : undefined;
  } catch {
    return undefined;
  }
}

/** Average seconds per block over the last `span` blocks, read at once (no need to wait for two readings). */
export async function blockPace(url: string, top: Reading, span = 50): Promise<number | undefined> {
  const from = top.height - span;
  if (from < 1) return undefined;
  const t = await blockTime(url, from);
  return t && top.time > t ? (top.time - t) / span : undefined;
}

/** True when the visitor asked for less motion. */
export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * A live view of a network inside `root`: [data-blocks] (an <ol>) receives each
 * new block as a page joining the chain (the newest gets .now), and
 * [data-v="height" | "pace" | "online"] show the figures; [data-state] says
 * when no provider answers. Readings every `interval` ms; the blocks found in
 * one reading arrive one by one over the next interval.
 */
export function mountStream(root: HTMLElement, opts: { urls: string[]; chain: number; t: { seconds: string; block: string; unavailable: string }; keep?: number; seed?: number; interval?: number }) {
  const { urls, chain, t, keep = 28, seed = 16, interval = 10_000 } = opts;
  const list = root.querySelector<HTMLOListElement>('[data-blocks]');
  const state = root.querySelector<HTMLElement>('[data-state]');
  const locale = document.documentElement.lang || undefined;
  const num = new Intl.NumberFormat(locale);
  const one = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const set = (key: string, text: string) => {
    const v = root.querySelector<HTMLElement>(`[data-v="${key}"]`);
    if (!v || v.textContent === text) return;
    v.textContent = text;
    v.classList.remove('tick'); void v.offsetWidth; v.classList.add('tick');
  };
  let last = 0;
  let timers: number[] = [];
  let paced = false;
  const add = (height: number, quiet = false) => {
    if (list) {
      const li = document.createElement('li');
      li.className = quiet ? 'lb-b' : 'lb-b new';
      li.title = t.block.replace('{n}', num.format(height));
      li.innerHTML = `<span class="lb-sq"></span><span class="lb-n">${String(height).slice(-4)}</span>`;
      list.querySelector('.now')?.classList.remove('now');
      li.classList.add('now');
      list.append(li);
      while (list.children.length > keep) list.firstElementChild!.remove();
    }
    last = height;
    set('height', num.format(height));
  };
  const refresh = async () => {
    if (document.hidden) return;
    const { top, topUrl, online } = await readNetwork(urls, chain);
    set('online', `${online} / ${urls.length}`);
    if (!top) { if (!last && state) state.textContent = t.unavailable; return; }
    if (state) state.textContent = '';
    if (!paced && topUrl) { paced = true; blockPace(topUrl, top).then((s) => s && set('pace', t.seconds.replace('{n}', one.format(s)))); }
    if (!last) { for (let h = Math.max(1, top.height - seed + 1); h <= top.height; h++) add(h, true); return; }
    timers.forEach(clearTimeout); timers = [];
    const fresh = Math.min(top.height - last, 10);
    if (fresh <= 0) return;
    const start = top.height - fresh + 1;
    if (reducedMotion()) { for (let h = start; h <= top.height; h++) add(h, true); return; }
    const step = interval / fresh;
    for (let i = 0; i < fresh; i++) timers.push(window.setTimeout(() => add(start + i), i * step));
  };
  refresh();
  setInterval(refresh, interval);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refresh(); });
}
