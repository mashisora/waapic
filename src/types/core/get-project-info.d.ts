export interface GetProjectInfoResult {
  /**
   * The Project name. Note that the Project name can differ from the WPROJ file name, if the file was renamed after Project creation.
   */
  name: string;
  /**
   * The complete text from the Wwise titlebar.
   */
  displayTitle: string;
  /**
   * The absolute path to the WPROJ file.
   */
  path: string;
  /**
   * Project id.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
   */
  id: string;
  /**
   * True if the Project or any of the Work Units have unsaved changes.
   */
  isDirty: boolean;
  /**
   * The current Language set in the user interface.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
   */
  currentLanguageId: string;
  /**
   * The reference Language set in the Language settings.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
   */
  referenceLanguageId: string;
  /**
   * The current Platform set in the user interface.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
   */
  currentPlatformId: string;
  /**
   * Array of the Languages defined in the project.
   */
  languages: {
    /**
     * Language unique id.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id: string;
    /**
     * Language name.
     */
    name: string;
    /**
     * The short ID (32-bit) of the language.\n Unsigned Integer 32-bit.
     */
    shortId: number;
  }[];
  /**
   * Array of the Platforms defined in the project.
   */
  platforms: {
    /**
     * Platform unique id.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id: string;
    /**
     * Platform name defined in the Project.
     */
    name: string;
    /**
     * The name of the deployment platform used in file system.
     */
    baseName: string;
    /**
     * The official name of the deployment platform. The name could contain special characters.
     */
    baseDisplayName: string;
    /**
     * The path on which the SoundBank files are generated for this Platform.
     */
    soundBankPath: string;
    /**
     * The path on which the SoundBank media files are copied for this Platform.
     */
    copiedMediaPath: string;
  }[];
  /**
   * The default Conversion Settings object used in the Project.
   */
  defaultConversion: {
    /**
     * Conversion Settings unique id.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id: string;
    /**
     * Conversion Settings object name.
     */
    name: string;
  };
  /**
   * Collection of directories used by Wwise.
   */
  directories: {
    /**
     * The root directory of the project, where is located the wproj file.
     */
    root: string;
    /**
     * The .cache directory of the project, as specified in the Project Settings. The .cache directory contains converted media files (WEM files).
     */
    cache: string;
    /**
     * The Originals directory of the project, as specified in the Project Settings. The Originals directory contains the project's WAV files, separated by languages.
     */
    originals: string;
    /**
     * The SoundBank output root directory of the project, as specified in the Project Settings. This directory contains the Project's SoundBank C++ header, XML and JSON files. Refer to the 'platforms' section for Platform specific directories.
     */
    soundBankOutputRoot: string;
    /**
     * The Commands directory of the project. Refer to \ref defining_custom_commands for more information.
     */
    commands: string;
    /**
     * The root directory of the project. Refer to \ref defining_custom_properties for more information.
     */
    properties: string;
  };
}
