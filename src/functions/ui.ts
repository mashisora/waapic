export interface IUIFunctions {
  'ak.wwise.ui.bringToForeground': {
    args: {};
    options: never;
    result: void;
  };
  'ak.wwise.ui.captureScreen': {
    args: CaptureScreen.Arguments;
    options: never;
    result: CaptureScreen.Result;
  };
  'ak.wwise.ui.commands.execute': {
    args: Execute.Arguments;
    options: never;
    result: void;
  };
  'ak.wwise.ui.commands.getCommands': {
    args: {};
    options: never;
    result: GetCommands.Result;
  };
  'ak.wwise.ui.commands.register': {
    args: Register.Arguments;
    options: never;
    result: void;
  };
  'ak.wwise.ui.commands.unregister': {
    args: Unregister.Arguments;
    options: never;
    result: void;
  };
}

namespace CaptureScreen {
  export interface Arguments {
    /** The name of the view as displayed in Wwise UI. By default, the whole UI is captured. */
    viewName?: string;
    /** The selection channel of the view. Can be a value of 1, 2, 3 or 4. By default, the current selection channel of the view is detected automatically. */
    viewSelectionChannel?: number;
    /** The capture region. By default, the whole view is captured. */
    rect?: {
      /** The left position of the capture region (in pixels). */
      x: number;
      /** The top position of the capture region (in pixels). */
      y: number;
      /** The width of the capture region (in pixels). */
      width: number;
      /** The height of the capture region (in pixels). */
      height: number;
    };
  }

  export interface Result {
    /** The underlying image data format (e.g. image/png). */
    contentType: string;
    /** The encoded image data (Base64). */
    contentBase64: string;
  }
}

namespace Execute {
  export interface Arguments {
    /** The ID of the command to execute. */
    command: string;
    /** An array of objects. Each object is an ID (GUID), name, or path of the object. */
    objects?: string[];
    /** An array of platform. Each platform is an ID (GUID) or a unique name. */
    platforms?: string[];
    /** A value to pass to the command. */
    value?: null | string | number | boolean;
  }
}

namespace GetCommands {
  export interface Result {
    /** An array of command ids. */
    commands?: string[];
  }
}

namespace Register {
  export interface Arguments {
    /** Data for the commands to be registered. An array of command add-ons. */
    commands: {
      /** Defines a human readable unique ID for the command. */
      id: string;
      /** Defines the name displayed in the user interface. */
      displayName: string;
      /** Defines the program or script to run when the command is executed. */
      program?: string;
      /** Specifies how to expand variables in the arguments field in case of multiple selection in the Wwise user interface. */
      startMode?:
        | 'SingleSelectionSingleProcess'
        | 'MultipleSelectionSingleProcessSpaceSeparated'
        | 'MultipleSelectionMultipleProcesses';
      /** Defines the arguments. */
      args?: string;
      /** Defines the current working directory to execute the program. */
      cwd?: string;
      /** Defines the shortcut to use by default for this command. */
      defaultShortcut?: string;
      /** Defines if the standard output streams of the program (stdout + stderr) should be redirected and logged to Wwise on termination. */
      redirectOutputs?: boolean;
      /** If present, specify how the command is added to Wwise context menus. If empty, no context menu is added. */
      contextMenu?: {
        /** Defines a forward-separated path for the parent sub menus. If empty, the menu is inserted at the first level. */
        basePath?: string;
        /** Defines a comma-separated list of the object types for which the item is visible. */
        visibleFor?: string;
        /** Defines a comma-separated list of the object types for which the item is enabled. */
        enabledFor?: string;
      };
      /** If present, specify how the command is added to Wwise main menus. If empty, no main menu entry is added. */
      mainMenu?: {
        /** Defines a forward-separated path for the parent sub menus. It must at least define one level, which is associated to the top menu. */
        basePath: string;
      };
    }[];
  }
}

namespace Unregister {
  export interface Arguments {
    /**
     * An array of commands to unregister.
     */
    commands: string[];
  }
}
