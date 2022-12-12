import { copyFile, writeFileSync } from 'fs';
import { FromSchema } from 'json-schema-to-ts';
import { connect } from './client';
import { compileFromFile } from 'json-schema-to-typescript';

const client = await connect('ws://127.0.0.1:8080/waapi');

try {
  client.call('ak.wwise.core.object.copy', { object: '', parent: '' });
} catch (err) {
  console.log(err);
}

await client.disconnect();
