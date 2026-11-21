/**
 * Schemas and data paths for the network collections. An app registers them in
 * its content.config.ts:
 *
 *   networks: defineCollection({ loader: file(dataFile('networks')), schema: networkSchema })
 *
 * The YAML files live in the content folder, under
 * network/. dataFile() resolves them through the installed catalog package.
 */
import { z } from 'astro/zod';
import { catalogPath } from '../kit/catalog';

/** Absolute path of a network data file in the catalog: networks, services or providers. */
export const dataFile = (name: 'networks' | 'services' | 'providers') => catalogPath('network', `${name}.yaml`);

const id = z.string().regex(/^[a-z0-9-]+$/);

/** Visitor-facing text in every language: { es: "Red principal", en: "Mainnet" }. Missing languages fall back to the default one. */
const localized = z.record(z.string().regex(/^[a-z]{2}$/, 'use a two-letter language code'), z.string());

export const networkSchema = z
  .object({
    id,
    label: localized,
    name: z.string(),
    evmChainId: z.number().int().positive(),
    chainId: z.string(),
    identifier: z.string(),
    bech32Prefix: z.string(),
    unit: z.object({ name: z.string(), symbol: z.string(), decimals: z.number().int(), base: z.string() }).strict(),
    blockTime: z.string(),
    data: z.url(),
  })
  .strict();

export const serviceSchema = z
  .object({ id, anchor: z.string().regex(/^[a-z0-9-]+$/), label: localized, description: localized, emptyNote: localized.optional() })
  .strict();

export const providerSchema = z
  .object({ id, provider: z.string(), network: z.string(), service: z.string(), url: z.url() })
  .strict();
