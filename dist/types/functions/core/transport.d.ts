export interface ITransportFunctions {
    'ak.wwise.core.transport.create': {
        args: Create.Arguments;
        opts: never;
        result: Create.Result;
    };
    'ak.wwise.core.transport.destroy': {
        args: Destroy.Arguments;
        opts: never;
        result: void;
    };
    'ak.wwise.core.transport.executeAction': {
        args: ExecuteAction.Arguments;
        opts: never;
        result: void;
    };
    'ak.wwise.core.transport.getList': {
        args: {};
        opts: never;
        result: GetList.Result;
    };
    'ak.wwise.core.transport.getState': {
        args: GetState.Arguments;
        opts: never;
        result: GetState.Result;
    };
    'ak.wwise.core.transport.prepare': {
        args: Prepare.Arguments;
        opts: never;
        result: void;
    };
}
export declare namespace Create {
    interface Arguments {
        /** The ID (GUID), name, or path of the object to control via the transport object. */
        object: string;
        /** The game object to use for playback. A game object ID, unsigned integer 64-bit. */
        gameObject?: number;
    }
    interface Result {
        /** Transport object ID to be used with all other ak.wwise.core.transport functions. */
        transport: number;
    }
}
export declare namespace Destroy {
    interface Arguments {
        /** The transport object ID to be used with all other ak.wwise.core.transport functions. */
        transport: number;
    }
}
export declare namespace ExecuteAction {
    interface Arguments {
        /** The transport object ID to be used with all other ak.wwise.core.transport functions. */
        transport?: number;
        /** The action to execute. */
        action: 'play' | 'stop' | 'pause' | 'playStop' | 'playDirectly';
    }
}
export declare namespace GetList {
    interface Result {
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
export declare namespace GetState {
    interface Arguments {
        /** The transport object ID to be used with all other ak.wwise.core.transport functions. */
        transport: number;
    }
    interface Result {
        /** The state of the transport object. */
        state: 'playing' | 'stopped' | 'paused';
    }
}
export declare namespace Prepare {
    interface Arguments {
        /** The ID (GUID), name, or path of the object to control via the transport object. */
        object: string;
    }
}
