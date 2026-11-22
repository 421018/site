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
