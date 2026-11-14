/**
 * Exports the content contract to the public catalog (content/contract/):
 * JSON Schemas of the content files and the names of the ::: blocks and
 * widgets. The catalog's validator reads it, so contributors can check their
 * changes without the engine. Run after changing a schema or adding a block or
 * widget:  npm run export:contract
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { z } from 'astro/zod';
import { pageSchema, siteTextSchema } from '../packages/kit/src/schemas.ts';
import { networkSchema, providerSchema, serviceSchema } from '../packages/network/src/schemas.ts';
import { widgetNames } from '../packages/widgets/src/names.ts';
import { blockNames } from '../packages/blocks/src/content-blocks.ts';

const dir = new URL('../content/contract/', import.meta.url);
mkdirSync(dir, { recursive: true });
const write = (name: string, data: unknown) => writeFileSync(new URL(name, dir), JSON.stringify(data, null, 2) + '\n');
const schema = (s: z.ZodType) => z.toJSONSchema(s, { io: 'input', unrepresentable: 'any' });

write('page.schema.json', schema(pageSchema));
write('site.schema.json', schema(siteTextSchema));
write('network.schema.json', schema(networkSchema));
write('service.schema.json', schema(serviceSchema));
write('provider.schema.json', schema(providerSchema));
write('blocks.json', { blocks: blockNames, widgets: widgetNames });
console.log('Contract written to content/contract/');
