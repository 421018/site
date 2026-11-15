/**
 * Network parameters and the public provider directory, from the catalog's
 * network/{networks,services,providers}.yaml, read through the app's content
 * collections of the same names. Order follows the files.
 * A provider that names an unknown network or service stops the build.
 */
import { readFileSync } from 'node:fs';
import { getCollection, type CollectionEntry } from 'astro:content';
import { dataFile } from './schemas';
import { defaultLang } from '@42chain/kit/i18n';

/** A localized value in the page's language, or in the default language. */
export const pick = (value: Record<string, string>, lang: string) => value[lang] ?? value[defaultLang];

export type Network = CollectionEntry<'networks'>['data'];
export type Service = CollectionEntry<'services'>['data'];
export type Provider = CollectionEntry<'providers'>['data'];

/** Collections come back sorted by id; restore the order of the YAML file, which carries meaning (defaults, display order). */
function inFileOrder<T extends { id: string }>(name: 'networks' | 'services' | 'providers', items: T[]): T[] {
  const text = readFileSync(dataFile(name), 'utf8');
  const order = [...text.matchAll(/^\s*-\s*\{?\s*id:\s*([a-z0-9-]+)/gm)].map((m) => m[1]);
  return [...items].sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
}

let cache: Promise<{ networks: Network[]; services: Service[]; providers: Provider[] }> | undefined;

export function getDirectory() {
  return (cache ??= (async () => {
    const networks = inFileOrder('networks', (await getCollection('networks')).map((e) => e.data));
    const services = inFileOrder('services', (await getCollection('services')).map((e) => e.data));
    const providers = inFileOrder('providers', (await getCollection('providers')).map((e) => e.data));
    const nets = new Set(networks.map((n) => n.id));
    const svcs = new Set(services.map((s) => s.id));
    const bad = providers.filter((p) => !nets.has(p.network) || !svcs.has(p.service));
    if (bad.length) {
      throw new Error(
        'catalog network/providers.yaml: unknown network or service in ' +
          bad.map((p) => `${p.id} (network "${p.network}", service "${p.service}")`).join(', '),
      );
    }
    return { networks, services, providers };
  })());
}

/** First provider of a service in a network: the default one. */
export const firstOf = (providers: Provider[], network: string, service: string) =>
  providers.find((p) => p.network === network && p.service === service);
