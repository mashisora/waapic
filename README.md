# waapi-utils

A Wwise Authoring API Utils Library in TypeScript.

## Features

- This library implements a subset of WAAPI client.
- Most arguments, options and result are fully-typed.
- Some APIs are redesigned or reorganized.
- Subscribe has not implemented at this time.

## Usage

```ts
const client = await waapi.connect('ws://127.0.0.1:8080/waapi');
const wwiseInfo = await client.call.core.getInfo();
```

## Notes

Cause TypeScript's [issue](https://github.com/microsoft/TypeScript/issues/26892), APIs like `client.call('ak.wwise.core.object.copy', args): result` may cannot be implement with correct IDE autocompletion.

## TODO: API Design...

### Plan A

```ts
const result = client.call('ak.wwise.core.object.copy', {
  object: '',
  parent: '',
});
```

### Plan B

```ts
const result = client.call({
  uri: 'ak.wwise.core.object.copy',
  args: { object: '', parent: '' },
  options: {},
});
```
