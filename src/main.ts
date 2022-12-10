import { copyFile, writeFileSync } from 'fs';
import { FromSchema } from 'json-schema-to-ts';
import { connect, WaapiClient } from './client';
import { compileFromFile } from 'json-schema-to-typescript';

const client = await connect('ws://127.0.0.1:8080/waapi');

try {
} catch (err) {
  console.log(err);
}
import { Create } from './types/object';
const a = {} as Create.Arguments;

let b = a['@123'];
b = '1';

await client.disconnect();

// writeFileSync('./outts.ts', await compileFromFile('./create.json'));

// import { Copy } from './types/core/object';
// const a: Copy;
