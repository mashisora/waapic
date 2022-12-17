export interface ITransportFunctions {
  'ak.wwise.core.transport.create': {
    args: Create.Arguments;
    options: never;
    result: Create.Result;
  };
  'ak.wwise.core.transport.destroy': {
    args: Destroy.Arguments;
    options: never;
    result: void;
  };
  'ak.wwise.core.transport.executeAction': {
    args: ExecuteAction.Arguments;
    options: never;
    result: void;
  };
  'ak.wwise.core.transport.getList': {
    args: {};
    options: never;
    result: GetList.Result;
  };
  'ak.wwise.core.transport.getState': {
    args: GetState.Arguments;
    options: never;
    result: GetState.Result;
  };
  'ak.wwise.core.transport.prepare': {
    args: Prepare.Arguments;
    options: never;
    result: void;
  };
}

namespace Create {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to control via the transport object. */
    object: string;
    /** The game object to use for playback. A game object ID, unsigned integer 64-bit. */
    gameObject?: number;
  }

  export interface Result {
    /** Transport object ID to be used with all other ak.wwise.core.transport functions. */
    transport: number;
  }
}

namespace Destroy {
  export interface Arguments {
    /** The transport object ID to be used with all other ak.wwise.core.transport functions. */
    transport: number;
  }
}

namespace ExecuteAction {
  export interface Arguments {
    /** The transport object ID to be used with all other ak.wwise.core.transport functions. */
    transport?: number;
    /** The action to execute. */
    action: 'play' | 'stop' | 'pause' | 'playStop' | 'playDirectly';
  }
}

namespace GetList {
  export interface Result {
    /** An array of transport object. */
    list: {
      /** The ID (GUID) of the object controlled by the transport object. */
      object: string;
      /** The game object used by the transport object. A game object ID, unsigned integer 64-bit. */
      gameObject?: number;
      /** Transport object ID. */
      transport: number;
    }[];
  }
}

namespace GetState {
  export interface Arguments {
    /** The transport object ID to be used with all other ak.wwise.core.transport functions. */
    transport: number;
  }

  export interface Result {
    /** The state of the transport object. */
    state: 'playing' | 'stopped' | 'paused';
  }
}

namespace Prepare {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to control via the transport object. */
    object: string;
  }
}
