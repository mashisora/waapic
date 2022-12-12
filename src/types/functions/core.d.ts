export interface ICallCore {
  'ak.wwise.core.getInfo': {
    args: {};
    opts: {};
    result: GetInfo.Result;
  };
  'ak.wwise.core.getProjectInfo': {
    args: {};
    opts: {};
    result: GetProjectInfo.Result;
  };
}

export namespace GetInfo {
  export interface Result {
    /** Wwise session id. */
    sessionId: string;
    /** Version of the Wwise Authoring API. */
    apiVersion: number;
    /** Wwise display name. */
    displayName: string;
    /** Branch built. */
    branch: string;
    /** Copyright information. */
    copyright: string;
    /** Wwise version object. */
    version: {
      /** Wwise version name. */
      displayName: string;
      /** Version year. */
      year: number;
      /** Version's major number */
      major: number;
      /** Version's minor number. */
      minor: number;
      /** Build number. */
      build: number;
      /** Special name given to a version. */
      nickname: string;
      /** Schema version for the Wwise Project and Work Units. */
      schema: number;
      [k: string]: unknown;
    };
    /** Indicates a release or debug build. */
    configuration: 'release' | 'debug';
    /** Indicates the platform on which Wwise was built. */
    platform: 'x64' | 'win32' | 'macosx' | 'linux';
    /** Indicates if Wwise is running in command line. */
    isCommandLine: boolean;
    /** The process identifier of Wwise. */
    processId: number;
    /** The process path of Wwise. */
    processPath: string;
    /** Collection of directories used by Wwise. */
    directories: {
      /** The root directory of Wwise. This is the installation directory. */
      install: string;
      /** The Wwise Authoring root directory */
      authoring: string;
      /** The bin directory, where Wwise.exe is located. */
      bin: string;
      /** The help directory. */
      help: string;
      /** The Wwise user data directory root. */
      user: string;
    };
  }
}

export namespace GetProjectInfo {
  export interface Result {
    /** The Project name. */
    name: string;
    /** The complete text from the Wwise titlebar. */
    displayTitle: string;
    /** The absolute path to the WPROJ file. */
    path: string;
    /** Project id. */
    id: string;
    /** True if the Project or any of the Work Units have unsaved changes. */
    isDirty: boolean;
    /** The current Language set in the user interface. */
    currentLanguageId: string;
    /** The reference Language set in the Language settings. */
    referenceLanguageId: string;
    /** The current Platform set in the user interface. */
    currentPlatformId: string;
    /** Array of the Languages defined in the project. */
    languages: {
      /** Language unique id. */
      id: string;
      /** Language name. */
      name: string;
      /** The short ID (32-bit) of the language. */
      shortId: number;
    }[];
    /** Array of the Platforms defined in the project. */
    platforms: {
      /** Platform unique id. */
      id: string;
      /** Platform name defined in the Project. */
      name: string;
      /** The name of the deployment platform used in file system. */
      baseName: string;
      /** The official name of the deployment platform. */
      baseDisplayName: string;
      /** The path on which the SoundBank files are generated for this Platform. */
      soundBankPath: string;
      /** The path on which the SoundBank media files are copied for this Platform. */
      copiedMediaPath: string;
    }[];
    /** The default Conversion Settings object used in the Project. */
    defaultConversion: {
      /** Conversion Settings unique id. */
      id: string;
      /** Conversion Settings object name. */
      name: string;
    };
    /** Collection of directories used by Wwise. */
    directories: {
      /** The root directory of the project, where is located the wproj file. */
      root: string;
      /** The .cache directory of the project, as specified in the Project Settings.  */
      cache: string;
      /** The Originals directory of the project, as specified in the Project Settings. */
      originals: string;
      /** The SoundBank output root directory of the project, as specified in the Project Settings. */
      soundBankOutputRoot: string;
      /** The Commands directory of the project. */
      commands: string;
      /** The root directory of the project. */
      properties: string;
    };
  }
}
