import { writeFileSync } from 'fs';
import { FromSchema } from 'json-schema-to-ts';
import { connect } from './client';
import { compileFromFile } from 'json-schema-to-typescript';

const result = await compileFromFile('schema.json');
writeFileSync('./typedef.ts', result);
