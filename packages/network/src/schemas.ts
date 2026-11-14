/**
 * Schemas and data paths for the network collections. An app registers them in
 * its content.config.ts:
 *
 *   networks: defineCollection({ loader: file(dataFile('networks')), schema: networkSchema })
 *
 * dataFile() resolves the YAML through the installed @42chain/network package, so
 * it works the same inside this monorepo and in a separate repository.
 */
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { z } from 'astro/zod';

const require = createRequire(join(process.cwd(), 'package.json'));

/** Absolute path of a data file of this package: networks, services or providers. */
export const dataFile = (name: 'networks' | 'services' | 'providers') =>
  join(dirname(require.resolve('@42chain/network/package.json')), 'data', `${name}.yaml`);

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
