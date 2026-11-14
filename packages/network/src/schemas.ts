/**
 * Schemas and data paths for the network collections. An app registers them in
 * its content.config.ts:
 *
 *   networks: defineCollection({ loader: file(dataFile('networks')), schema: networkSchema })
 *
 * The YAML files live in the public content catalog (@42chain/catalog), under
 * network/. dataFile() resolves them through the installed catalog package.
 */
import { z } from 'astro/zod';
import { catalogPath } from '@42chain/kit/catalog';

/** Absolute path of a network data file in the catalog: networks, services or providers. */
export const dataFile = (name: 'networks' | 'services' | 'providers') => catalogPath('network', `${name}.yaml`);

const id = z.string().regex(/^[a-z0-9-]+$/);

export const networkSchema = z
  .object({
    id,
    label: z.string(),
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
  .object({ id, anchor: z.string(), label: z.string(), description: z.string(), emptyNote: z.string().optional() })
  .strict();

export const providerSchema = z
  .object({ id, provider: z.string(), network: z.string(), service: z.string(), url: z.url() })
  .strict();
