# waapi-utils

A Wwise Authoring API Utils Library in TypeScript.

## Features

- This library implements a subset of WAAPI client.
- Most arguments, options and result are fully-typed.
- Some APIs are redesigned or reorganized.

## Usage

```ts
const client = await waapi.connect('ws://127.0.0.1:8080/waapi');
const wwiseInfo = await client.call.core.getInfo();
```
