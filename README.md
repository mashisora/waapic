# WAAPIC

![status](https://img.shields.io/badge/status-alpha-red.svg)
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

- :o: : Supported
- :x: : WIP

## Functions

| URI                                                            | STATUS |
| -------------------------------------------------------------- | ------ |
| `ak.wwise.core.audio.import`                                   | :x:    |
| `ak.wwise.core.audio.importTabDelimited`                       | :x:    |
| `ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInRegion`        | :x:    |
| `ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInTrimmedRegion` | :x:    |
| `ak.wwise.core.getInfo`                                        | :x:    |
| `ak.wwise.core.getProjectInfo`                                 | :x:    |
| `ak.wwise.core.log.get`                                        | :x:    |
| `ak.wwise.core.object.copy`                                    | :x:    |
| `ak.wwise.core.object.create`                                  | :x:    |
| `ak.wwise.core.object.delete`                                  | :x:    |
| `ak.wwise.core.object.diff`                                    | :x:    |
| `ak.wwise.core.object.get`                                     | :x:    |
| `ak.wwise.core.object.getAttenuationCurve`                     | :x:    |
| `ak.wwise.core.object.getPropertyAndReferenceNames`            | :x:    |
| `ak.wwise.core.object.getPropertyInfo`                         | :x:    |
| `ak.wwise.core.object.getTypes`                                | :x:    |
| `ak.wwise.core.object.isPropertyEnabled`                       | :x:    |
| `ak.wwise.core.object.move`                                    | :x:    |
| `ak.wwise.core.object.pasteProperties`                         | :x:    |
| `ak.wwise.core.object.set`                                     | :x:    |
| `ak.wwise.core.object.setAttenuationCurve`                     | :x:    |
| `ak.wwise.core.object.setName`                                 | :x:    |
| `ak.wwise.core.object.setNotes`                                | :x:    |
| `ak.wwise.core.object.setProperty`                             | :x:    |
| `ak.wwise.core.object.setRandomizer`                           | :x:    |
| `ak.wwise.core.object.setReference`                            | :x:    |
| `ak.wwise.core.profiler.enableProfilerData`                    | :x:    |
| `ak.wwise.core.profiler.getAudioObjects`                       | :x:    |
| `ak.wwise.core.profiler.getBusses`                             | :x:    |
| `ak.wwise.core.profiler.getCursorTime`                         | :x:    |
| `ak.wwise.core.profiler.getGameObjects`                        | :x:    |
| `ak.wwise.core.profiler.getRTPCs`                              | :x:    |
| `ak.wwise.core.profiler.getVoiceContributions`                 | :x:    |
| `ak.wwise.core.profiler.getVoices`                             | :x:    |
| `ak.wwise.core.profiler.startCapture`                          | :x:    |
| `ak.wwise.core.profiler.stopCapture`                           | :x:    |
| `ak.wwise.core.project.save`                                   | :x:    |
| `ak.wwise.core.remote.connect`                                 | :x:    |
| `ak.wwise.core.remote.disconnect`                              | :x:    |
| `ak.wwise.core.remote.getAvailableConsoles`                    | :x:    |
| `ak.wwise.core.remote.getConnectionStatus`                     | :x:    |
| `ak.wwise.core.sound.setActiveSource`                          | :x:    |
| `ak.wwise.core.soundbank.convertExternalSources`               | :x:    |
| `ak.wwise.core.soundbank.generate`                             | :x:    |
| `ak.wwise.core.soundbank.getInclusions`                        | :x:    |
| `ak.wwise.core.soundbank.processDefinitionFiles`               | :x:    |
| `ak.wwise.core.soundbank.setInclusions`                        | :x:    |
| `ak.wwise.core.switchContainer.addAssignment`                  | :x:    |
| `ak.wwise.core.switchContainer.getAssignments`                 | :x:    |
| `ak.wwise.core.switchContainer.removeAssignment`               | :x:    |
| `ak.wwise.core.transport.create`                               | :x:    |
| `ak.wwise.core.transport.destroy`                              | :x:    |
| `ak.wwise.core.transport.executeAction`                        | :x:    |
| `ak.wwise.core.transport.getList`                              | :x:    |
| `ak.wwise.core.transport.getState`                             | :x:    |
| `ak.wwise.core.transport.prepare`                              | :x:    |
| `ak.wwise.core.undo.beginGroup`                                | :x:    |
| `ak.wwise.core.undo.cancelGroup`                               | :x:    |
| `ak.wwise.core.undo.endGroup`                                  | :x:    |
| `ak.wwise.core.undo.undo`                                      | :x:    |
| `ak.wwise.debug.enableAsserts`                                 | :x:    |
| `ak.wwise.debug.enableAutomationMode`                          | :x:    |
| `ak.wwise.debug.testAssert`                                    | :x:    |
| `ak.wwise.ui.bringToForeground`                                | :x:    |
| `ak.wwise.ui.captureScreen`                                    | :x:    |
| `ak.wwise.ui.commands.execute`                                 | :x:    |
| `ak.wwise.ui.commands.getCommands`                             | :x:    |
| `ak.wwise.ui.commands.register`                                | :x:    |
| `ak.wwise.ui.commands.unregister`                              | :x:    |
| `ak.wwise.ui.getSelectedObjects`                               | :x:    |
| `ak.wwise.ui.project.close`                                    | :x:    |
| `ak.wwise.ui.project.open`                                     | :x:    |
| `ak.wwise.waapi.getFunctions`                                  | :x:    |
| `ak.wwise.waapi.getSchema`                                     | :x:    |
| `ak.wwise.waapi.getTopics`                                     | :x:    |

## Topics

| URI                                                | STATUS |
| -------------------------------------------------- | ------ |
| `ak.wwise.core.audio.imported`                     | :o:    |
| `ak.wwise.core.log.itemAdded`                      | :o:    |
| `ak.wwise.core.object.attenuationCurveChanged`     | :o:    |
| `ak.wwise.core.object.attenuationCurveLinkChanged` | :o:    |
| `ak.wwise.core.object.childAdded`                  | :o:    |
| `ak.wwise.core.object.childRemoved`                | :o:    |
| `ak.wwise.core.object.created`                     | :o:    |
| `ak.wwise.core.object.curveChanged`                | :o:    |
| `ak.wwise.core.object.nameChanged`                 | :o:    |
| `ak.wwise.core.object.notesChanged`                | :o:    |
| `ak.wwise.core.object.postDeleted`                 | :o:    |
| `ak.wwise.core.object.preDeleted`                  | :o:    |
| `ak.wwise.core.object.propertyChanged`             | :o:    |
| `ak.wwise.core.object.referenceChanged`            | :o:    |
| `ak.wwise.core.profiler.captureLog.itemAdded`      | :o:    |
| `ak.wwise.core.profiler.gameObjectRegistered`      | :o:    |
| `ak.wwise.core.profiler.gameObjectReset`           | :o:    |
| `ak.wwise.core.profiler.gameObjectUnregistered`    | :o:    |
| `ak.wwise.core.profiler.stateChanged`              | :o:    |
| `ak.wwise.core.profiler.switchChanged`             | :o:    |
| `ak.wwise.core.project.loaded`                     | :o:    |
| `ak.wwise.core.project.postClosed`                 | :o:    |
| `ak.wwise.core.project.preClosed`                  | :o:    |
| `ak.wwise.core.project.saved`                      | :o:    |
| `ak.wwise.core.soundbank.generated`                | :x:    |
| `ak.wwise.core.soundbank.generationDone`           | :o:    |
| `ak.wwise.core.switchContainer.assignmentAdded`    | :o:    |
| `ak.wwise.core.switchContainer.assignmentRemoved`  | :o:    |
| `ak.wwise.core.transport.stateChanged`             | :o:    |
| `ak.wwise.debug.assertFailed`                      | :o:    |
| `ak.wwise.ui.commands.executed`                    | :o:    |
| `ak.wwise.ui.selectionChanged`                     | :o:    |
