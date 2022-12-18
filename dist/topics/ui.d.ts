import { IObject, IOptions } from '../shared';
export interface IUITopics {
    'ak.wwise.ui.commands.executed': {
        publish: Executed.Publish;
        options: Executed.Options;
    };
    'ak.wwise.ui.selectionChanged': {
        publish: SelectionChanged.Publish;
        options: never;
    };
}
declare namespace Executed {
    interface Publish {
        /** The command ID that was executed. */
        command: string;
        /** The objects for which the command was executed. */
        objects: IObject[];
        /** An array of platform for which the command is executed. Each platform is an ID (GUID). */
        platforms: string[];
    }
    interface Options extends IOptions {
        /** The ID (GUID) or name of the platform.*/
        platform?: string;
        /** The ID (GUID) or name of the language. */
        language?: string;
    }
}
declare namespace SelectionChanged {
    interface Publish {
        /** The selected objects, in the format specified in the options. Can be empty if no object is selected. */
        objects: IObject[];
    }
    interface Publish {
        /** The command ID that was executed. */
        command: string;
        /** The objects for which the command was executed. */
        objects: IObject[];
        /** An array of platform for which the command is executed. Each platform is an ID (GUID). */
        platforms: string[];
    }
}
export {};
