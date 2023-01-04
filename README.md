# WAAPIc

![status](https://img.shields.io/badge/status-beta-orange)
![license](https://img.shields.io/badge/license-MIT-blue)

> DO NOT USE IN PRODUCTION ENVIRONMENT!

A Wwise Authoring API Client Library in TypeScript.

## Features

- This library implements a WAAPI client with IDE autocompletion support.
- Most arguments, options and result are fully-typed.
- Subscribe APIs has ~~not implemented at this time~~ implemented.

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

## API List

Deprecated and private APIs are not listed and will never be implemented.

## Functions

| URI                                                            | LOCATION       |
| -------------------------------------------------------------- | -------------- |
| `ak.wwise.core.audio.import`                                   | `audio.ts`     |
| `ak.wwise.core.audio.importTabDelimited`                       | `audio.ts`     |
| `ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInRegion`        | `audio.ts`     |
| `ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInTrimmedRegion` | `audio.ts`     |
| `ak.wwise.core.getInfo`                                        | `misc.ts`      |
| `ak.wwise.core.getProjectInfo`                                 | `misc.ts`      |
| `ak.wwise.core.log.get`                                        | `misc.ts`      |
| `ak.wwise.core.object.copy`                                    | `object.ts`    |
| `ak.wwise.core.object.create`                                  | `object.ts`    |
| `ak.wwise.core.object.delete`                                  | `object.ts`    |
| `ak.wwise.core.object.diff`                                    | `object.ts`    |
| `ak.wwise.core.object.get`                                     | `object.ts`    |
| `ak.wwise.core.object.getAttenuationCurve`                     | `object.ts`    |
| `ak.wwise.core.object.getPropertyAndReferenceNames`            | `object.ts`    |
| `ak.wwise.core.object.getPropertyInfo`                         | `object.ts`    |
| `ak.wwise.core.object.getTypes`                                | `object.ts`    |
| `ak.wwise.core.object.isPropertyEnabled`                       | `object.ts`    |
| `ak.wwise.core.object.move`                                    | `object.ts`    |
| `ak.wwise.core.object.pasteProperties`                         | `object.ts`    |
| `ak.wwise.core.object.set`                                     | `object.ts`    |
| `ak.wwise.core.object.setAttenuationCurve`                     | `object.ts`    |
| `ak.wwise.core.object.setName`                                 | `object.ts`    |
| `ak.wwise.core.object.setNotes`                                | `object.ts`    |
| `ak.wwise.core.object.setProperty`                             | `object.ts`    |
| `ak.wwise.core.object.setRandomizer`                           | `object.ts`    |
| `ak.wwise.core.object.setReference`                            | `object.ts`    |
| `ak.wwise.core.profiler.enableProfilerData`                    | `profiler.ts`  |
| `ak.wwise.core.profiler.getAudioObjects`                       | `profiler.ts`  |
| `ak.wwise.core.profiler.getBusses`                             | `profiler.ts`  |
| `ak.wwise.core.profiler.getCursorTime`                         | `profiler.ts`  |
| `ak.wwise.core.profiler.getGameObjects`                        | `profiler.ts`  |
| `ak.wwise.core.profiler.getRTPCs`                              | `profiler.ts`  |
| `ak.wwise.core.profiler.getVoiceContributions`                 | `profiler.ts`  |
| `ak.wwise.core.profiler.getVoices`                             | `profiler.ts`  |
| `ak.wwise.core.profiler.startCapture`                          | `profiler.ts`  |
| `ak.wwise.core.profiler.stopCapture`                           | `profiler.ts`  |
| `ak.wwise.core.project.save`                                   | `project.ts`   |
| `ak.wwise.core.remote.connect`                                 | `remote.ts`    |
| `ak.wwise.core.remote.disconnect`                              | `remote.ts`    |
| `ak.wwise.core.remote.getAvailableConsoles`                    | `remote.ts`    |
| `ak.wwise.core.remote.getConnectionStatus`                     | `remote.ts`    |
| `ak.wwise.core.sound.setActiveSource`                          | `audio.ts`     |
| `ak.wwise.core.soundbank.convertExternalSources`               | `soundbank.ts` |
| `ak.wwise.core.soundbank.generate`                             | `soundbank.ts` |
| `ak.wwise.core.soundbank.getInclusions`                        | `soundbank.ts` |
| `ak.wwise.core.soundbank.processDefinitionFiles`               | `soundbank.ts` |
| `ak.wwise.core.soundbank.setInclusions`                        | `soundbank.ts` |
| `ak.wwise.core.switchContainer.addAssignment`                  | `switch.ts`    |
| `ak.wwise.core.switchContainer.getAssignments`                 | `switch.ts`    |
| `ak.wwise.core.switchContainer.removeAssignment`               | `switch.ts`    |
| `ak.wwise.core.transport.create`                               | `transport.ts` |
| `ak.wwise.core.transport.destroy`                              | `transport.ts` |
| `ak.wwise.core.transport.executeAction`                        | `transport.ts` |
| `ak.wwise.core.transport.getList`                              | `transport.ts` |
| `ak.wwise.core.transport.getState`                             | `transport.ts` |
| `ak.wwise.core.transport.prepare`                              | `transport.ts` |
| `ak.wwise.core.undo.beginGroup`                                | `undo.ts`      |
| `ak.wwise.core.undo.cancelGroup`                               | `undo.ts`      |
| `ak.wwise.core.undo.endGroup`                                  | `undo.ts`      |
| `ak.wwise.core.undo.undo`                                      | `undo.ts`      |
| `ak.wwise.debug.enableAsserts`                                 | `misc.ts`      |
| `ak.wwise.debug.enableAutomationMode`                          | `misc.ts`      |
| `ak.wwise.ui.bringToForeground`                                | `ui.ts`        |
| `ak.wwise.ui.captureScreen`                                    | `ui.ts`        |
| `ak.wwise.ui.commands.execute`                                 | `ui.ts`        |
| `ak.wwise.ui.commands.getCommands`                             | `ui.ts`        |
| `ak.wwise.ui.commands.register`                                | `ui.ts`        |
| `ak.wwise.ui.commands.unregister`                              | `ui.ts`        |
| `ak.wwise.ui.getSelectedObjects`                               | `ui.ts`        |
| `ak.wwise.ui.project.close`                                    | `project.ts`   |
| `ak.wwise.ui.project.open`                                     | `project.ts`   |

## Topics

| URI                                                | STATUS         |
| -------------------------------------------------- | -------------- |
| `ak.wwise.core.audio.imported`                     | `misc.ts`      |
| `ak.wwise.core.log.itemAdded`                      | `misc.ts`      |
| `ak.wwise.core.object.attenuationCurveChanged`     | `object.ts`    |
| `ak.wwise.core.object.attenuationCurveLinkChanged` | `object.ts`    |
| `ak.wwise.core.object.childAdded`                  | `object.ts`    |
| `ak.wwise.core.object.childRemoved`                | `object.ts`    |
| `ak.wwise.core.object.created`                     | `object.ts`    |
| `ak.wwise.core.object.curveChanged`                | `object.ts`    |
| `ak.wwise.core.object.nameChanged`                 | `object.ts`    |
| `ak.wwise.core.object.notesChanged`                | `object.ts`    |
| `ak.wwise.core.object.postDeleted`                 | `object.ts`    |
| `ak.wwise.core.object.preDeleted`                  | `object.ts`    |
| `ak.wwise.core.object.propertyChanged`             | `object.ts`    |
| `ak.wwise.core.object.referenceChanged`            | `object.ts`    |
| `ak.wwise.core.profiler.captureLog.itemAdded`      | `profiler.ts`  |
| `ak.wwise.core.profiler.gameObjectRegistered`      | `profiler.ts`  |
| `ak.wwise.core.profiler.gameObjectReset`           | `profiler.ts`  |
| `ak.wwise.core.profiler.gameObjectUnregistered`    | `profiler.ts`  |
| `ak.wwise.core.profiler.stateChanged`              | `profiler.ts`  |
| `ak.wwise.core.profiler.switchChanged`             | `profiler.ts`  |
| `ak.wwise.core.project.loaded`                     | `project.ts`   |
| `ak.wwise.core.project.postClosed`                 | `project.ts`   |
| `ak.wwise.core.project.preClosed`                  | `project.ts`   |
| `ak.wwise.core.project.saved`                      | `project.ts`   |
| `ak.wwise.core.soundbank.generated`                | `soundbank.ts` |
| `ak.wwise.core.soundbank.generationDone`           | `soundbank.ts` |
| `ak.wwise.core.switchContainer.assignmentAdded`    | `switch.ts`    |
| `ak.wwise.core.switchContainer.assignmentRemoved`  | `switch.ts`    |
| `ak.wwise.core.transport.stateChanged`             | `misc.ts`      |
| `ak.wwise.debug.assertFailed`                      | `misc.ts`      |
| `ak.wwise.ui.commands.executed`                    | `ui.ts`        |
| `ak.wwise.ui.selectionChanged`                     | `ui.ts`        |
