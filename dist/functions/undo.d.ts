export interface IUndoFunctions {
    'ak.wwise.core.undo.beginGroup': {
        args: {};
        options: never;
        result: void;
    };
    'ak.wwise.core.undo.cancelGroup': {
        args: {};
        options: never;
        result: void;
    };
    'ak.wwise.core.undo.endGroup': {
        args: EndGroup.Arguments;
        options: never;
        result: void;
    };
    'ak.wwise.core.undo.undo': {
        args: {};
        options: never;
        result: void;
    };
}
declare namespace EndGroup {
    interface Arguments {
        /** The name that is displayed in the history for this undo group. */
        displayName: string;
    }
}
export {};
