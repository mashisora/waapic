export interface GetInfoResult {
  /**
   * Wwise session id.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
   */
  sessionId: string;
  /**
   * Version of the Wwise Authoring API.
   */
  apiVersion: number;
  /**
   * Wwise display name.
   */
  displayName: string;
  /**
   * Branch built.
   */
  branch: string;
  /**
   * Copyright information.
   */
  copyright: string;
  /**
   * Wwise version object.
   */
  version: {
    /**
     * Wwise version name.
     */
    displayName: string;
    /**
     * Version year.
     */
    year: number;
    /**
     * Version's major number
     */
    major: number;
    /**
     * Version's minor number.
     */
    minor: number;
    /**
     * Build number.
     */
    build: number;
    /**
     * Special name given to a version.
     */
    nickname: string;
    /**
     * Schema version for the Wwise Project and Work Units.
     */
    schema: number;
  };
  /**
   * Indicates a release or debug build.
   */
  configuration: 'release' | 'debug';
  /**
   * Indicates the platform on which Wwise was built.
   */
  platform: 'x64' | 'win32' | 'macosx' | 'linux';
  /**
   * Indicates if Wwise is running in command line.
   */
  isCommandLine: boolean;
  /**
   * The process identifier of Wwise.
   */
  processId: number;
  /**
   * The process path of Wwise.
   */
  processPath: string;
  /**
   * Collection of directories used by Wwise.
   */
  directories: {
    /**
     * The root directory of Wwise. This is the installation directory.
     */
    install: string;
    /**
     * The Wwise Authoring root directory
     */
    authoring: string;
    /**
     * The bin directory, where Wwise.exe is located.
     */
    bin: string;
    /**
     * The help directory.
     */
    help: string;
    /**
     * The Wwise user data directory root.
     */
    user: string;
  };
}
