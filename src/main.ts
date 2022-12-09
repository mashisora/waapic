import { writeFileSync } from 'fs';
import { FromSchema } from 'json-schema-to-ts';
import { connect, WaapiClient } from './client';
import { compileFromFile } from 'json-schema-to-typescript';

const result = await compileFromFile('schema.json');
writeFileSync('./typedef.ts', result);

const client = await connect('');

client.getObject({}, {});
