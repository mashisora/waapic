export namespace ImoprtAudio {
  export interface Arguments {
    /** Determines how import object creation is performed. */
    importOperation?: 'createNew' | 'useExisting' | 'replaceExisting';
    /** Default values for each item in "imports". Use this object to avoid repeating common properties of every imported element. */
    default?: Item;
    /** Array of import commands. */
    imports: Item[];
    /** Determines if Wwise automatically performs an Add or Checkout operation on the imported files with the source control. Defaults to false. */
    autoAddToSourceControl?: boolean;
  }

  type Item = {
    /** Imports the language for the audio file import (taken from the project's defined languages, found in the WPROJ file LanguageList). */
    importLanguage?: string;
    /** Object ID (GUID), name, or path used as root relative object paths. */
    importLocation?: string;
    /** Path to media file to import. This path must be accessible from Wwise. */
    audioFile?: string;
    /** Base64 encoded WAV audio file data to import with its target file path relative to the Originals folder, separated by a vertical bar. E.g. 'MySound.wav|UklGRu...'. */
    audioFileBase64?: string;
    /** Specifies the 'originals' sub-folder in which to place the imported audio file. This folder is relative to the 'originals' folder in which the file would normally be imported. Example: if importing an SFX, then the audio file is imported to the folder Originals\\\\SFX\\\\originalsPath. */
    originalsSubFolder?: string;
    /** The path and name of the object(s) to be created. The path uses backslashes and can either be absolute or relative. Object types can be specified before the name. For example: `'\\Actor-Mixer Hierarchy\\Default Work Unit\\<Random Container>MyContainer\\<Sound>MySound'`.  */
    objectPath: string;
    /** Specifies the type of object to create when importing an audio file. This type can also be specified directly in the objectPath. */
    objectType?: string;
    /** The "Notes" field of the created object. */
    notes?: string;
    /** The "Notes" field of the created audio source object. */
    audioSourceNotes?: string;
    /** Defines a Switch Group or State Group that is associated to a Switch Container, within the Actor-Mixer Hierarchy only. Also defines which Switch Container's child is assigned to which Switch or State from the associated group. Refer to Tab Delimited Import in the Wwise Help documentation for more information. */
    switchAssignation?: string;
    /** Defines the path and name of an Event to be created for the imported object. Refer to Tab Delimited Import in the Wwise Help documentation for more information. */
    event?: string;
    /** Defines the path and name of a Dialogue Event to be created for the imported object. Refer to Tab Delimited Import in the Wwise Help documentation for more information. */
    dialogueEvent?: string;
    /** Sets the value of property @propertyName. */
    [property: `@${string}`]: null | string | number | boolean;
  };

  export interface Result {
    objects: {
      /** The ID (GUID) of the object. */
      id: string;
      /** The name of the object. */
      name: string;
    }[];
  }
}
