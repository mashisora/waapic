import { IObject, IOptions } from '../shared';

export interface IAudioFunctions {
  'ak.wwise.core.audio.import': {
    args: Import.Arguments;
    options: Import.Options;
    result: Import.Result;
  };
  'ak.wwise.core.audio.importTabDelimited': {
    args: ImportTabDelimited.Arguments;
    options: ImportTabDelimited.Options;
    result: ImportTabDelimited.Result;
  };
  'ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInRegion': {
    args: GetMinMaxPeaksInRegion.Arguments;
    options: never;
    result: GetMinMaxPeaksInRegion.Result;
  };
  'ak.wwise.core.audioSourcePeaks.getMinMaxPeaksInTrimmedRegion': {
    args: GetMinMaxPeaksInTrimmedRegion.Arguments;
    options: never;
    result: GetMinMaxPeaksInTrimmedRegion.Result;
  };
  'ak.wwise.core.sound.setActiveSource': {
    args: SetActiveSource.Arguments;
    options: never;
    result: void;
  };
}

namespace Import {
  export interface Arguments {
    /** Determines how import object creation is performed. */
    importOperation?: 'createNew' | 'useExisting' | 'replaceExisting';
    /** Default values for each item in "imports". */
    default?: {
      /** Imports the language for the audio file import (taken from the project's defined languages, found in the WPROJ file LanguageList). */
      importLanguage?: string;
      /** Object ID (GUID), name, or path used as root relative object paths. */
      importLocation?: string;
      /** Path to media file to import. This path must be accessible from Wwise. */
      audioFile?: string;
      /** Base64 encoded WAV audio file data to import with its target file path relative to the Originals folder, separated by a vertical bar. */
      audioFileBase64?: string;
      /** Specifies the 'originals' sub-folder in which to place the imported audio file. */
      originalsSubFolder?: string;
      /** The path and name of the object(s) to be created. Object types can be specified before the name. */
      objectPath?: string;
      /** Specifies the type of object to create when importing an audio file. This type can also be specified directly in the objectPath. */
      objectType?: string;
      /** The notes of the created object. */
      notes?: string;
      /** The notes of the created audio source object. */
      audioSourceNotes?: string;
      /** Defines a Switch Group or State Group that is associated to a Switch Container, within the Actor-Mixer Hierarchy only. */
      switchAssignation?: string;
      /** Defines the path and name of an Event to be created for the imported object. */
      event?: string;
      /** Defines the path and name of a Dialogue Event to be created for the imported object. */
      dialogueEvent?: string;
      /** Sets the value of property @propertyName. */
      [property: `@${string}`]: null | string | number | boolean;
    };
    /** Array of import commands. */
    imports: {
      /** Imports the language for the audio file import (taken from the project's defined languages, found in the WPROJ file LanguageList). */
      importLanguage?: string;
      /** Object ID (GUID), name, or path used as root relative object paths. */
      importLocation?: string;
      /** Path to media file to import. This path must be accessible from Wwise. */
      audioFile?: string;
      /** Base64 encoded WAV audio file data to import with its target file path relative to the Originals folder, separated by a vertical bar. */
      audioFileBase64?: string;
      /** Specifies the 'originals' sub-folder in which to place the imported audio file. */
      originalsSubFolder?: string;
      /** The path and name of the object(s) to be created. Object types can be specified before the name. */
      objectPath: string;
      /** Specifies the type of object to create when importing an audio file. This type can also be specified directly in the objectPath. */
      objectType?: string;
      /** The notes of the created object. */
      notes?: string;
      /** The notes of the created audio source object. */
      audioSourceNotes?: string;
      /** Defines a Switch Group or State Group that is associated to a Switch Container, within the Actor-Mixer Hierarchy only. */
      switchAssignation?: string;
      /** Defines the path and name of an Event to be created for the imported object. */
      event?: string;
      /** Defines the path and name of a Dialogue Event to be created for the imported object. */
      dialogueEvent?: string;
      /** Sets the value of property @propertyName. */
      [property: `@${string}`]: null | string | number | boolean;
    }[];
    /** Determines if Wwise automatically performs an Add or Checkout operation on the imported files with the source control. */
    autoAddToSourceControl?: boolean;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) or name of the platform. */
    platform?: string;
    /** The ID (GUID) or name of the language. */
    language?: string;
  }

  export interface Result {
    /** Array of objects. */
    objects: IObject[];
  }
}

namespace ImportTabDelimited {
  export interface Arguments {
    /** Object ID (GUID), name, or path used as root relative object paths. */
    importLocation?: string;
    /** Imports language for audio file import (taken from the project's defined languages, found in the WPROJ file LanguageList). */
    importLanguage: string;
    /** Determines how import object creation is performed. */
    importOperation: 'createNew' | 'useExisting' | 'replaceExisting';
    /** Location of tab-delimited import file. */
    importFile: string;
    /** Determines if Wwise automatically performs an Add or Checkout operation on the imported files with the source control. */
    autoAddToSourceControl?: boolean;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) or name of the platform. */
    platform?: string;
    /** The ID (GUID) or name of the language. */
    language?: string;
  }

  export interface Result {
    /** Array of objects. */
    objects: IObject[];
  }
}

namespace GetMinMaxPeaksInRegion {
  export interface Arguments {
    /** The ID (GUID), name, or path of the audio source object. */
    object: string;
    /** The start time, in seconds, of the section of the audio source for which peaks are required. This number must be smaller than timeTo. */
    timeFrom: number;
    /** The end time, in seconds, of the section of the audio source for which peaks are required. This number must be larger than timeFrom. */
    timeTo: number;
    /** The number of peaks that are required (minimum 1). */
    numPeaks: number;
    /** When true, peaks are calculated globally across channels, instead of per channel. */
    getCrossChannelPeaks?: boolean;
  }

  export interface Result {
    /** An array of binary strings. */
    peaksBinaryStrings: string[];
    /** The number of channels of peak data. This is 1 if getCrossChannelPeaks is true. */
    numChannels: number;
    /** The maximum value that a peak can take. */
    maxAbsValue: number;
    /** The number of peaks in the returned min max channel arrays. */
    peaksArrayLength: number;
    /** The size of the data in the peaks min max arrays. */
    peaksDataSize: number;
  }
}

namespace GetMinMaxPeaksInTrimmedRegion {
  export interface Arguments {
    /** The ID (GUID), name, or path of the audio source. */
    object: string;
    /** The number of peaks that are required (minimum 1). */
    numPeaks: number;
    /** When true, peaks are calculated globally across channels, instead of per channel. */
    getCrossChannelPeaks?: boolean;
  }

  export interface Result {
    /** An array of binary strings. */
    peaksBinaryStrings: string[];
    /** The number of channels of peak data. This is 1 if getCrossChannelPeaks is true. */
    numChannels: number;
    /** The maximum value that a peak can take. */
    maxAbsValue: number;
    /** The number of peaks in the returned min max channel arrays. */
    peaksArrayLength: number;
    /** The size of the data in the peaks min max arrays. */
    peaksDataSize: number;
  }
}

namespace SetActiveSource {
  export interface Arguments {
    /** Sound ID (GUID), name, or path. */
    sound: string;
    /** Source ID (GUID), name, or path. The source must be a child of the sound. */
    source: string;
    /** Platform ID (GUID) or name. */
    platform?: string;
  }
}
