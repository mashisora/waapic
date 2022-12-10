# waapi-utils

A Wwise Authoring API Utils Library in TypeScript.

## Usage

```ts
const client = await waapi.connect('ws://127.0.0.1:8080/waapi');
const wwiseInfo = await client.call.core.getInfo();
```

## Todo

```ts
importAudio();

getInfo();
getProjectInfo();

setObjects();

createObject();
deleteObject();

diffObject();

// Same Result Called Object
moveObject();
copyObject();
// Result is { return: Object[] }
getObjects();
getSelectedObjects();
```
