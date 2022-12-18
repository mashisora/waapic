export interface IProjectFunctions {
    'ak.wwise.core.project.save': {
        args: {};
        options: never;
        result: void;
    };
    'ak.wwise.ui.project.close': {
        args: Close.Arguments;
        options: never;
        result: Close.Result;
    };
    'ak.wwise.ui.project.open': {
        args: Open.Arguments;
        options: never;
        result: void;
    };
}
declare namespace Close {
    interface Arguments {
        /** Indicates if the user should not be prompted to save the current project. */
        bypassSave?: boolean;
    }
    interface Result {
        /** True if there was a project open, false otherwise. */
        hadProjectOpen?: boolean;
    }
}
declare namespace Open {
    interface Arguments {
        /** The path to the project file. */
        path: string;
        /** The action to be executed when opening a project that needs to be upgraded. */
        onUpgrade?: 'migrate' | 'fail';
        /** Indicates if the user should not be prompted to save the current project. */
        bypassSave?: boolean;
    }
}
export {};
