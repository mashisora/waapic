import { IObject, IOptions } from '../shared';
export interface IMiscTopics {
    'ak.wwise.core.audio.imported': {
        publish: Imported.Publish;
        options: Imported.Options;
    };
    'ak.wwise.core.log.itemAdded': {
        publish: ItemAdded.Publish;
        options: never;
    };
    'ak.wwise.core.transport.stateChanged': {
        publish: StateChanged.Publish;
        options: StateChanged.Options;
    };
    'ak.wwise.debug.assertFailed': {
        publish: AssertFailed.Publish;
        options: never;
    };
}
declare namespace Imported {
    interface Publish {
        /** The list of objects that have been created as part of the same import operation. */
        objects: IObject[];
    }
    interface Options extends IOptions {
    }
}
declare namespace ItemAdded {
    interface Publish {
        /** The channel on which the item was added. */
        channel: 'soundbankGenerate' | 'conversion' | 'copyPlatformSettings' | 'waapi' | 'projectLoad' | 'general';
        /** The item added to the log. */
        item: {
            /** The severity level for the log item. */
            severity: 'Message' | 'Warning' | 'Error' | 'Fatal Error';
            /** Number of seconds elapsed since midnight (00:00:00), January 1, 1970, Coordinated Universal Time (UTC), according to the system clock. */
            time: number;
            /** The message ID for the log item. */
            messageId: string;
            /** The description message of the log item. */
            message: string;
            /** The platform ID and name for which the log item was reported. */
            platform?: IObject;
            /** An array of parameters in the log item. Not present when no parameter. */
            parameters?: string[];
        };
    }
}
declare namespace StateChanged {
    interface Publish {
        /** The ID of the watched transport. */
        transport: number;
        /** The state of the transport object. */
        state: 'playing' | 'stopped' | 'paused';
        /** The ID (GUID) of the object controlled by the transport object. */
        object: string;
        /** The game object used by the transport object. */
        gameObject?: number;
    }
    interface Options {
        /** The ID of the watched transport. */
        transport: number;
    }
}
declare namespace AssertFailed {
    interface Publish {
        /** The expression that failed. */
        expression: string;
        /** The name of the source file. */
        fileName: string;
        /** The line number. */
        lineNumber: number;
    }
}
export {};
