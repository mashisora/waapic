# WAAPIC

![status](https://img.shields.io/badge/status-alpha-red.svg)
![license](https://img.shields.io/badge/license-MIT-blue)

> DO NOT USE IN PRODUCTION ENVIRONMENT!

A Wwise Authoring API Client Library in TypeScript.

## Features

- This library implements a WAAPI client with IDE autocompletion support.
- Most arguments, options and result are fully-typed.
- Subscribe has not implemented at this time. WIP.

## Get

You can get waapic from NPM registry:

```
npm install waapic
```

Or, you can use this [template](https://github.com/mashisora/waapi-script-template)!

## Usage

```ts
import { connect } from 'waapic';

try {
  const client = await connect('ws://127.0.0.1:8080/waapi');
  const info = await client.call('ak.wwise.core.getInfo', {});
  console.log(info.apiVersion);
  await client.disconnect();
} catch (err) {
  console.log(err);
}
```

## Screenshots

### URI Autocomplete

![uri](./public/screenshot_01.png)

### Arguments Autocomplete

![arguments](./public/screenshot_02.png)

### Result Autocomplete

![result](./public/screenshot_03.png)
