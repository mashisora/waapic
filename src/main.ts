import { copyFile, writeFileSync } from 'fs';
import { FromSchema } from 'json-schema-to-ts';
import { connect, WaapiClient } from './client';
import { compileFromFile } from 'json-schema-to-typescript';

const client = await connect('ws://127.0.0.1:8080/waapi');

try {
  const res = await client.setObject({
    objects: [
      {
        object: '{ECA0FF44-E032-407E-A258-D9C264C8F5DD}',
        children: [
          {
            type: 'ActorMixer',
            name: 'Weapons',
            '@Volume': '-2',
          },
        ],
      },
    ],
  });

  if (res.objects) {
    console.log(res.objects[0].children);
  }
} catch (err) {
  console.log(err);
}
import { Create } from './types/core/object';
const a = {} as Create.Arguments;

let b = a['@123'];
b = '1';

await client.disconnect();

// writeFileSync('./outts.ts', await compileFromFile('./create.json'));

// import { Copy } from './types/core/object';
// const a: Copy;
