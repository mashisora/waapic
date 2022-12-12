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
client.getObjects(waql, opts);
client.getSelectedObjects(opts);

client.setObjects(args);
client.copyObject(args);
client.moveObject(args);
client.diffObject(args);
client.createObject(args);
client.deleteObject(args);

client.getAttenuationCurve(args);
client.getPropertyAndReferenceNames(args);
client.isPropertyEnabled(args);

client.setName(args);
client.setNotes(args);
client.setProperty(args);
client.setReference(args);
client.setRandomizer(args);
client.setAttenuationCurve(args);

client.pasteProperties(args);
...
```

### Plan B
