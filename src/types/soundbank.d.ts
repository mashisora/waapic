export namespace ConvertExternalSources {
  export interface Arguments {
    /** An array of external sources files and corrisponding arguments. */
    sources: {
      /** The path to the wsources file. */
      input: string;
      /** The platform to convert external sources for. */
      platform: string | string;
      /** Optional argument for the path of the output folder to be generated. The default path is WwiseProject/.cache/ExternalSources/Platform. */
      output?: string;
    }[];
  }
}

export namespace Generate {
  export interface Arguments {
    /** List of SoundBank to generate. */
    soundbanks?: {
      /** The name of the SoundBank to generate, a temporary SoundBank will be created if the SoundBank doesn't exists. */
      name: string;
      /** List of events to include in this SoundBank. Not required if the bank already exists. */
      events?: string[];
      /** List of AuxBus to include in this SoundBank. */
      auxBusses?: string[];
      /** List of inclusion type to use for this SoundBank. Not required if the bank already exists. */
      inclusions?: ('event' | 'structure' | 'media')[];
      /** Force rebuild of this particuliar SoundBank. Default value: false */
      rebuild?: boolean;
      [k: string]: unknown;
    }[];
    /** List of platforms to generate. If you don't specify any platforms, all the platforms will be generated */
    platforms?: string[];
    /** List of languages to generate. If you don't specify any languages, all the languages will be generated. */
    languages?: string[];
    /** By default, if you don't specify any languages all languages will be generated. If you set this parameter to true, no localized SoundBank will be generated. */
    skipLanguages?: boolean;
    /** Will rebuild all SoundBanks if true. If you want to clear the converted media as well, use clearAudioFileCache parameter. Default value: false */
    rebuildSoundBanks?: boolean;
    /** Deletes the content of the Wwise audio file cache folder prior to converting source files and generating SoundBanks, which ensures that all source files are reconverted. Note that the whole cache is cleared, for all platforms, regardless of the platforms arguments. Default value: false */
    clearAudioFileCache?: boolean;
    /** Use the normal SoundBank generation process and write the sound bank and info file to disk. Default value: false */
    writeToDisk?: boolean;
    /** If you don't use rebuildSoundBanks, use this option to force a rebuild of the Init bank for each specified platform. */
    rebuildInitBank?: boolean;
  }
}

export namespace GetInclusions {
  export interface Arguments {
    /** The ID (GUID), name, or path of the SoundBank to add an inclusion to. */
    soundbank: string;
  }

  export interface Result {
    /** An array of inclusions. */
    inclusions?: {
      /** The ID (GUID) of the object to add to or remove from the SoundBank's inclusion list. */
      object: string;
      /** Specifies what relations are being included. */
      filter: ('events' | 'structures' | 'media')[];
    }[];
  }
}

export namespace ProcessDefinitionFiles {
  export interface Arguments {
    /** An array of SoundBank definition files. */
    files: string[];
  }
}

export namespace SetInclusions {
  export interface Arguments {
    /** The ID (GUID), name, or path of the SoundBank to add an inclusion to. */
    soundbank: string;
    /** Determines how the 'inclusions' argument is used to modify the SoundBank's inclusion list. */
    operation: 'add' | 'remove' | 'replace';
    /** An array of SoundBank inclusions. */
    inclusions: {
      /** The ID (GUID), name, or path of the object to add to or remove from the SoundBank's inclusion list. */
      object: string;
      /** An array of inclusion types defining what to include. */
      filter: ('events' | 'structures' | 'media')[];
    }[];
  }
}