// REVIEWED

export namespace Create {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to control via the transport object. */
    object: string;
    /** The game object to use for playback. A game object ID, unsigned integer 64-bit. */
    gameObject?: number;
  }

  export interface Result {
    /** Transport object ID to be used with all other ak.wwise.core.transport functions. Unsigned Integer 32-bit. */
    transport: number;
  }
}

export namespace Destroy {
  export interface Arguments {
    /** The transport object ID to be used with all other ak.wwise.core.transport functions. Unsigned Integer 32-bit. */
    transport: number;
  }
}

export namespace ExecuteAction {
  export interface Arguments {
    /** The transport object ID to be used with all other ak.wwise.core.transport functions. Unsigned Integer 32-bit. */
    transport?: number;
    /** The action to execute. */
    action: 'play' | 'stop' | 'pause' | 'playStop' | 'playDirectly';
  }
}

export namespace GetList {
  export interface Result {
    /** An array of transport object. */
    list: {
      /** The ID (GUID) of the object controlled by the transport object. */
      object: string;
      /** The game object used by the transport object. A game object ID, unsigned integer 64-bit. */
      gameObject?: number;
      /** Transport object ID. Unsigned Integer 32-bit. */
      transport: number;
    }[];
  }
}

export namespace GetState {
  export interface Arguments {
    /** The transport object ID to be used with all other ak.wwise.core.transport functions. Unsigned Integer 32-bit. */
    transport: number;
  }

  export interface Result {
    /** The state of the transport object. */
    state: 'playing' | 'stopped' | 'paused';
  }
}

export namespace Prepare {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to control via the transport object. */
    object: string;
  }
}
