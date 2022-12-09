import { copyFile, writeFileSync } from 'fs';
import { FromSchema } from 'json-schema-to-ts';
import { connect, WaapiClient } from './client';
import { compileFromFile } from 'json-schema-to-typescript';

const client = await connect('ws://127.0.0.1:8080/waapi');

try {
  const res = await client.call(
    'ak.wwise.core.object.set',
    {
      objects: [{ object: `$ {96BA32D2-D502-49E6-AFD7-B794657504A5}"` }],
    },
    { return: ['id', 'name'] }
  );

  console.log(res);
} catch (err) {
  console.log(err);
}

await client.disconnect();

// writeFileSync('./outts.ts', await compileFromFile('./create.json'));

// import { Copy } from './types/core/object';
// const a: Copy;
