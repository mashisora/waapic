export interface IRemoteFunctions {
  'ak.wwise.core.remote.connect': {
    args: Connect.Arguments;
    options: never;
    result: void;
  };
  'ak.wwise.core.remote.disconnect': {
    args: {};
    options: never;
    result: void;
  };
  'ak.wwise.core.remote.getAvailableConsoles': {
    args: {};
    options: never;
    result: GetAvailableConsoles.Result;
  };
  'ak.wwise.core.remote.getConnectionStatus': {
    args: {};
    options: never;
    result: GetConnectionStatus.Result;
  };
}

namespace Connect {
  export interface Arguments {
    /** The host to connect to. The host can be an IPv4 address or a computer name. Use 127.0.0.1 to connect to localhost. */
    host: string;
    /** The value in the Application Name column from the Remote Connection dialog in Wwise. If you are running more than one Sound Engine instance, you can specify the name of the application to connect to. */
    appName?: string;
    /** The command port. If you are running two or more Sound Engine instances that use the same application name, you can specify the command port to distinguish between different applications sharing the same name. You don't need to use this if the application name is unique. */
    commandPort?: number;
  }
}

namespace GetAvailableConsoles {
  export interface Result {
    /** An array of remote consoles available. */
    consoles: {
      /** Name of the remote console as returned by the executable. */
      name: string;
      /** Platform of the remote console as returned by the executable. */
      platform: string;
      /** Platform, as defined in the project platforms of the remote console as returned by the executable. */
      customPlatform: string;
      /** The IPv4 of the connected host. This can also be a file path if Wwise is connected to a local file (profiler session). */
      host: string;
      /** The name of the connected application as returned by the executable. Must be used when connecting to a specific Sound Engine instance. */
      appName: string;
      /** The command port. Can be used when connecting to a specific Sound Engine instance. */
      commandPort: number;
    }[];
  }
}

namespace GetConnectionStatus {
  export interface Result {
    /** Indicates if the Wwise Authoring application is connected to a Wwise Sound Engine process. */
    isConnected: boolean;
    /** The current connection status in text. */
    status: string;
    /** Describe the remote process. */
    console?: {
      /** Name of the remote console as returned by the executable. */
      name: string;
      /** Platform of the remote console as returned by the executable. */
      platform: string;
      /** Platform, as defined in the project platforms of the remote console, as returned by the executable. */
      customPlatform: string;
      /** The IPv4 of the connected host. This can also be a file path if Wwise is connected to a local file (profiler session). */
      host: string;
      /** The name of the connected application as returned by the executable. */
      appName: string;
    };
  }
}
