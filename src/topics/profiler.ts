import { IObject, IOptions } from '../shared';

export interface IProfilerTopics {
  'ak.wwise.core.profiler.captureLog.itemAdded': {
    publish: ItemAdded.Publish;
    options: ItemAdded.Options;
  };
  'ak.wwise.core.profiler.gameObjectRegistered': {
    publish: GameObjectRegistered.Publish;
    options: never;
  };
  'ak.wwise.core.profiler.gameObjectReset': {
    publish: {};
    options: never;
  };
  'ak.wwise.core.profiler.gameObjectUnregistered': {
    publish: GameObjectUnregistered.Publish;
    options: never;
  };
  'ak.wwise.core.profiler.stateChanged': {
    publish: StateChanged.Publish;
    options: StateChanged.Options;
  };
  'ak.wwise.core.profiler.switchChanged': {
    publish: SwitchChanged.Publish;
    options: SwitchChanged.Options;
  };
}

namespace ItemAdded {
  export interface Publish {
    /** The entry type. Equivalent to the Type column in the Capture Log. */
    type: string;
    /** The time at which the event occurred. This is the elapsed time in milliseconds since the initialization of the sound engine. */
    time: number;
    /** The ID (GUID) of the object for the entry. */
    objectId?: string;
    /** The name of the object for the entry. */
    objectName?: string;
    /** The short ID (32-bit) of the object for the entry. */
    objectShortId?: number;
    /** The game object ID for the entry. */
    gameObjectId?: number;
    /** The game object name for the entry. */
    gameObjectName?: string;
    /** The playing ID for the entry. */
    playingId?: number;
    /** The description for the entry. Equivalent to the Description column in the Capture Log. */
    description: string;
    /** The severity level for the log item. */
    severity: 'Normal' | 'Message' | 'Error';
    /** The error code name for the entry. */
    errorCodeName?: string;
  }

  export interface Options {
    /** Defines which types of capture log items to receive. This filter can help to reduce the amount of data serialized. When no types are specified, all types are being sent. */
    types?: (
      | 'Notification'
      | 'InteractiveMusic'
      | 'Midi'
      | 'ExternalSource'
      | 'Marker'
      | 'State'
      | 'Switch'
      | 'SetParameter'
      | 'ParameterChanged'
      | 'Bank'
      | 'Prepare'
      | 'Event'
      | 'DialogueEventResolved'
      | 'ActionTriggered'
      | 'ActionDelayed'
      | 'Message'
      | 'APICall'
      | 'GameObjectRegistration'
    )[];
  }
}

namespace GameObjectRegistered {
  export interface Publish {
    /** The time at which the game object was registered. This is the elapsed time in milliseconds since the initialization of the sound engine. */
    time: number;
    /** The game object ID for the entry. */
    gameObjectId: number;
    /** The game object name for the entry. */
    gameObjectName: string;
  }
}

namespace GameObjectUnregistered {
  export interface Publish {
    /** The time at which the game object was unregistered. This is the elapsed time in milliseconds since the initialization of the sound engine. */
    time: number;
    /** The game object ID for the entry. */
    gameObjectId: number;
    /** The game object name for the entry. */
    gameObjectName: string;
  }
}

namespace StateChanged {
  export interface Publish {
    /** The state group object that changed. */
    stateGroup: IObject;
    /** The state object that changed. */
    state: IObject;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace SwitchChanged {
  export interface Publish {
    /** The switch group object that changed. */
    switchGroup: IObject;
    /** The new switch used. */
    switch: IObject;
    /** Game Object ID associated with the switch. */
    gameObjectID: number;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}
