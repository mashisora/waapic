export interface ITransportTopics {
  'ak.wwise.core.transport.stateChanged': {
    publish: StateChanged.Publish;
    options: StateChanged.Options;
  };
}

namespace StateChanged {
  export interface Publish {
    /** The ID of the watched transport. */
    transport: number;
    /** The state of the transport object. */
    state: 'playing' | 'stopped' | 'paused';
    /** The ID (GUID) of the object controlled by the transport object. */
    object: string;
    /** The game object used by the transport object. */
    gameObject?: number;
  }

  export interface Options {
    /** The ID of the watched transport. */
    transport: number;
  }
}
