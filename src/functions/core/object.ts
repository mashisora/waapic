export interface IObjectFunctions {
  'ak.wwise.core.object.copy': {
    args: Copy.Arguments;
    opts: never;
    result: Copy.Result;
  };
  'ak.wwise.core.object.create': {
    args: Create.Arguments;
    opts: never;
    result: Create.Result;
  };
  'ak.wwise.core.object.delete': {
    args: Delete.Arguments;
    opts: never;
    result: void;
  };
  'ak.wwise.core.object.diff': {
    args: Diff.Arguments;
    opts: never;
    result: Diff.Result;
  };
  'ak.wwise.core.object.get': {
    args: Get.Arguments;
    opts: Get.opts;
    result: Get.Result;
  };
  'ak.wwise.core.object.getAttenuationCurve': {
    args: GetAttenuationCurve.Arguments;
    opts: never;
    result: GetAttenuationCurve.Result;
  };
  'ak.wwise.core.object.getPropertyAndReferenceNames': {
    args: GetPropertyAndReferenceNames.Arguments;
    opts: never;
    result: GetPropertyAndReferenceNames.Result;
  };
  'ak.wwise.core.object.getPropertyInfo': {
    args: GetPropertyInfo.Arguments;
    opts: never;
    result: GetPropertyInfo.Result;
  };
  'ak.wwise.core.object.getTypes': {
    args: {};
    opts: never;
    result: GetTypes.Result;
  };
  'ak.wwise.core.object.isPropertyEnabled': {
    args: IsPropertyEnabled.Arguments;
    opts: never;
    result: IsPropertyEnabled.Result;
  };
  'ak.wwise.core.object.move': {
    args: Move.Arguments;
    opts: never;
    result: Move.Result;
  };
  'ak.wwise.core.object.pasteProperties': {
    args: PasteProperties.Arguments;
    opts: never;
    result: void;
  };
  'ak.wwise.core.object.set': {
    args: Set.Arguments;
    opts: never;
    result: Set.Result;
  };
  'ak.wwise.core.object.setAttenuationCurve': {
    args: SetAttenuationCurve.Arguments;
    opts: never;
    result: void;
  };
  'ak.wwise.core.object.setName': {
    args: GetAttenuationCurve.Arguments;
    opts: never;
    result: GetAttenuationCurve.Result;
  };
  'ak.wwise.core.object.setNotes': {
    args: GetAttenuationCurve.Arguments;
    opts: never;
    result: GetAttenuationCurve.Result;
  };
  'ak.wwise.core.object.setProperty': {
    args: GetAttenuationCurve.Arguments;
    opts: never;
    result: GetAttenuationCurve.Result;
  };
  'ak.wwise.core.object.setRandomizer': {
    args: GetAttenuationCurve.Arguments;
    opts: never;
    result: GetAttenuationCurve.Result;
  };
  'ak.wwise.core.object.setReference': {
    args: GetAttenuationCurve.Arguments;
    opts: never;
    result: GetAttenuationCurve.Result;
  };
}

namespace Copy {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to be copied. */
    object: string;
    /** The ID (GUID), name, or path of the new object's parent. */
    parent: string;
    /** The action to take if 'parent' already has a child with the same name. */
    onNameConflict?: 'rename' | 'replace' | 'fail';
  }

  export interface Result {
    /** The ID (GUID) of the new object. */
    id: string;
    /** The name of the new object. */
    name: string;
  }
}

namespace Create {
  export interface Arguments {
    /** The ID (GUID), name, or path of the parent of the new object. */
    parent: string;
    /** The name of the list in which to insert the object. If this argument is set, the object gets inserted in a list owned by the parent and not as a child. */
    list?: string;
    /** The action to take if 'parent' already has a child with the same name. */
    onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
    /** The ID (GUID) or unique name of the platform used when setting properties via this command. Not specifying a platform sets the value for all linked platforms. */
    platform?: string;
    /** Determines if Wwise automatically performs an Add or Checkout source control operation for affected work units. */
    autoAddToSourceControl?: boolean;
    /** The type of the new object. */
    type: string;
    /** The name of the new object. */
    name: string;
    /** The notes or comments of the new object. */
    notes?: string;
    /** Sets the value of property @propertyName. */
    [property: `@${string}`]: null | string | number | boolean;
    /** An array of child objects to be created. */
    children?: Children;
  }

  type Children = {
    /** The type of the new object. */
    type: string;
    /** The name of the new object. */
    name: string;
    /** The notes or comments of the new object. */
    notes?: string;
    /** Sets the value of property @propertyName. */
    [property: `@${string}`]: null | string | number | boolean;
    /** An array of child objects to be created. */
    children?: Children;
  }[];

  export interface Result {
    /** The ID (GUID) of the newly created Object. */
    id: string;
    /** The name of the newly created Object. */
    name: string;
    /** The children of objects created. */
    children?: ChildrenR;
  }

  type ChildrenR = {
    /** The ID (GUID) of the newly created Object. */
    id: string;
    /** The name of the newly created Object. */
    name: string;
    /** The children of objects created. */
    children?: ChildrenR;
  }[];
}

namespace Delete {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to be deleted. */
    object: string;
  }
}

namespace Diff {
  export interface Arguments {
    /** The ID (GUID), name, or path of the source object. */
    source: string;
    /** The ID (GUID), name, or path of the target object. */
    target: string;
  }

  export interface Result {
    /** Array of names of properties and references that differ. */
    properties: string[];
    /** Array of names of lists that differ. */
    lists: string[];
  }
}

namespace Get {
  export interface Arguments {
    /** Specifies a query in the WAQL language. */
    waql?: string;
  }

  export interface opts {
    /** Specifies what is being returned for every object. This can include built-in accessors, such as the name or id, or object properties, such as the Volume or the Pitch. */
    return?: (
      | 'id'
      | 'name'
      | 'notes'
      | 'type'
      | 'pluginName'
      | 'shortId'
      | 'classId'
      | 'category'
      | 'filePath'
      | 'workunit'
      | 'parent'
      | 'owner'
      | 'path'
      | 'isPlayable'
      | 'childrenCount'
      | 'totalSize'
      | 'mediaSize'
      | 'objectSize'
      | 'structureSize'
      | 'sound:convertedWemFilePath'
      | 'sound:originalWavFilePath'
      | 'soundbank:bnkFilePath'
      | 'music:transitionRoot'
      | 'music:playlistRoot'
      | 'audioSource:playbackDuration'
      | 'audioSource:maxDurationSource'
      | 'audioSource:trimValues'
      | 'audioSource:maxRadiusAttenuation'
      | 'audioSource:language'
      | 'workunit:isDefault'
      | 'workunit:type'
      | 'workunit:isDirty'
      | 'switchContainerChild:context'
      | 'convertedWemFilePath'
      | 'originalFilePath'
      | 'convertedFilePath'
      | 'originalWavFilePath'
      | 'soundbankBnkFilePath'
      | 'musicTransitionRoot'
      | 'musicPlaylistRoot'
      | 'playbackDuration'
      | 'duration'
      | 'maxDurationSource'
      | 'audioSourceTrimValues'
      | 'maxRadiusAttenuation'
      | 'audioSourceLanguage'
      | 'workunitIsDefault'
      | 'workunitType'
      | 'workunitIsDirty'
      | 'switchContainerChildContext'
      | 'isExplicitMute'
      | 'isExplicitSolo'
      | 'isImplicitMute'
      | 'isImplicitSolo'
      | 'points'
      | `@${string}`
    )[];
    /** The ID (GUID) or name of the platform. When not specified, the current platform is used. */
    platform?: string;
    /** The ID (GUID) or name of the language. */
    language?: string;
  }

  export interface Result {
    return: {
      /** The ID (GUID) of the object. */
      id?: string;
      /** The name of the object. */
      name?: string;
      /** The notes of the object. */
      notes?: string;
      /** The type of the object. */
      type?: string;
      /** The name of the plug-in for Source, Effect, Mixer, Device and Metadata plug-in. */
      pluginName?: string;
      /** The path of the object from the project root. */
      path?: string;
      /** The parent of the object in the hierarchy. */
      parent?: {
        /** The ID (GUID) of the object. */
        id?: string;
        /** The name of the object. */
        name?: string;
      };
      /** The owner of the object. This applies to objects being locally owned by other objects, such as custom effects, custom attenuations, etc. */
      owner?: {
        /** The ID (GUID) of the object. */
        id?: string;
        /** The name of the object. */
        name?: string;
      };
      /** True if the object can be played in Transport. */
      isPlayable?: boolean;
      /** The Short ID of the object. */
      shortId?: number;
      /** The class ID of the object. */
      classId?: number;
      /** The category of the object. */
      category?: string;
      /** The path to the file containing the object. The path can be a Work Unit file or a project file. */
      filePath?: string;
      /** The parent Work Unit containing the object. */
      workunit?: {
        /** The ID (GUID) of the object. */
        id?: string;
        /** The name of the object. */
        name?: string;
      };
      /** The number of children for the object. */
      childrenCount?: number;
      /** The amount of space (in bytes) this object and all of its children take up in a SoundBank. This does not include the objectSize. Note that SoundBanks need to be generated for this value to be accurate. */
      totalSize?: number;
      /** The total converted size (in bytes) of the media files of this object and all of its children. Note that SoundBanks need to be generated for this value to be accurate. */
      mediaSize?: number;
      /** The amount of space (in bytes) the meta-data of the object takes up in a SoundBank. This does not include media files. Note that SoundBanks need to be generated for this value to be accurate. */
      objectSize?: number;
      /** The amount of space (in bytes) the meta-data of the object and all of its children take up in a SoundBank. This does not include media files. Note that SoundBanks need to be generated for this value to be accurate. */
      structureSize?: number;
      /** The music transition root containing all other music transitions recursively. */
      musicTransitionRoot?: {
        /** The ID (GUID) of the object. */
        id?: string;
      };
      /** The music playlist root containing all other music playlist items recursively. This applies to Music Playlist Containers only. */
      musicPlaylistRoot?: {
        /** The ID (GUID) of the object. */
        id?: string;
      };
      /** Absolute path to the original file. Only valid for Sound and Audio Source objects. */
      originalFilePath?: string;
      /** The active source of the sound object. */
      activeSource?: {
        /** The ID (GUID) of the object. */
        id?: string;
        /** The name of the object. */
        name?: string;
      };
      /** Absolute path to the converted file. Specify the platform in the opts. Only valid for Sound and Audio Source objects. */
      convertedFilePath?: string;
      /** Absolute path to the generated SoundBank file associated with the SoundBank object. Only valid for SoundBank objects. */
      soundbankBnkFilePath?: string;
      /** The duration root that contains the min and max durations and duration type. This applies to all objects that can contain Audio Source objects, either directly as a source or indirectly through descendants. */
      duration?: {
        /** The minimum possible time playback can take. */
        min?: number;
        /** The maximum possible time playback can take. */
        max?: number;
        /** The type of duration. */
        type?: string;
      };
      /** Audio source with the longest duration. This applies to all objects that can contain Audio Source objects, either directly as a source or indirectly through descendants. */
      maxDurationSource?: {
        /** The ID (GUID) of the audio source object with the longest duration. */
        id?: string;
        /** The duration in seconds of the longest trimmed source. */
        trimmedDuration?: number;
      };
      /** Range of time for which the audio source is trimmed. */
      audioSourceTrimValues?: {
        /** The time value in seconds of the start trim. */
        trimBegin?: number;
        /** The time value in seconds of the end trim. */
        trimEnd?: number;
      };
      /** Attenuation with the largest radius. This applies to all objects that can contain Audio Source objects, either directly as a source or indirectly through descendants. */
      maxRadiusAttenuation?: {
        /** The ID (GUID) of the attenuation object with the largest radius. */
        id?: string;
        /** The radius of the attenuation object. */
        radius?: number;
      };
      /** Language associated to the audio source. This only applies to Audio Source objects directly. */
      audioSourceLanguage?: {
        /** The ID (GUID) of the Language object to which the Audio Source object is associated. */
        id?: string;
        /** The name of the Language object to which the Audio Source object is associated. */
        name?: string;
      };
      /** True if the work unit is the default. */
      workunitIsDefault?: boolean;
      /** The type of the Work Unit. Please note that, like Work Units, physical folders have the type 'WorkUnit'. Physical folders have the workunitType 'folder'. */
      workunitType?: 'folder' | 'rootFile' | 'nestedFile';
      /** True if a Work Unit or a Project (wproj file) is dirty, meaning it was modified but not saved. */
      workunitIsDirty?: boolean;
      /** The context object associated with the child of a Switch Container. This object holds the properties associated with the child that are context-dependent for the Switch Container (for example: the properties of the '1st only' checkbox). */
      switchContainerChildContext?: {
        /** The ID (GUID) of the object. */
        id?: string;
      };
      /** Whether or not the object has been muted explicitly. Explicitly muting an object implicitly mutes the descendant objects. */
      isExplicitMute?: boolean;
      /** Whether or not the object has been soloed explicitly. Soloing an object silences all the other objects in the project except this one. */
      isExplicitSolo?: boolean;
      /** Whether or not the object has been muted implicitly. Explicitly muting an object implicitly mutes the descendant objects. */
      isImplicitMute?: boolean;
      /** Whether or not the object has been soloed implicitly. Soloing an object silences all the other objects in the project except this one. */
      isImplicitSolo?: boolean;
      /** This only applies to Curve objects. An array of points defining a curve. */
      points?: {
        /** X coordinate of curve point. */
        x: number;
        /** Y coordinate of curve point. */
        y: number;
        /** Shape of the curve segment between this point and the next. */
        shape:
          | 'Constant'
          | 'Linear'
          | 'Log3'
          | 'Log2'
          | 'Log1'
          | 'InvertedSCurve'
          | 'SCurve'
          | 'Exp1'
          | 'Exp2'
          | 'Exp3';
      }[];
      /** Specifies dot-separated accessors that form a query and yields a property value or an object reference. A single @ specifies the value of the property for the associated object. A double @ specifies the value of the property for the source of override. */
      [property: `@${string}`]: null | string | number | boolean;
    };
  }
}

namespace GetAttenuationCurve {
  export interface Arguments {
    /** The ID (GUID), name, or path of attenuation object. */
    object: string;
    /** The ID (GUID) or unique name of the platform to get curves.  Set to null-guid for unlinked reference. */
    platform?: string;
    /** Type of attenuation curve. */
    curveType:
      | 'VolumeDryUsage'
      | 'VolumeWetGameUsage'
      | 'VolumeWetUserUsage'
      | 'LowPassFilterUsage'
      | 'HighPassFilterUsage'
      | 'SpreadUsage'
      | 'FocusUsage';
  }

  export interface Result {
    /** Name of attenuation curve. */
    curveType:
      | 'VolumeDryUsage'
      | 'VolumeWetGameUsage'
      | 'VolumeWetUserUsage'
      | 'LowPassFilterUsage'
      | 'HighPassFilterUsage'
      | 'SpreadUsage'
      | 'FocusUsage';
    /** Defines whether the curve has no points, has its own set of points, or uses those of the VolumeDryUsage curve. */
    use: 'None' | 'Custom' | 'UseVolumeDry';
    /** The attenuation curve. An array of points defining a curve. */
    points: {
      /** X coordinate of curve point. */
      x: number;
      /** Y coordinate of curve point. */
      y: number;
      /** Shape of the curve segment between this point and the next. */
      shape:
        | 'Constant'
        | 'Linear'
        | 'Log3'
        | 'Log2'
        | 'Log1'
        | 'InvertedSCurve'
        | 'SCurve'
        | 'Exp1'
        | 'Exp2'
        | 'Exp3';
    }[];
  }
}

namespace GetPropertyAndReferenceNames {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to watch. */
    object?: string;
    /** The ID (class ID) of the object to retrieve the property and reference names from. */
    classId?: number;
  }

  export interface Result {
    /** An array of all properties and references for the specified object. */
    return: string[];
  }
}

namespace GetPropertyInfo {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to watch. */
    object?: string;
    /** The ID (class ID) of the object to retrieve the property from. */
    classId?: number;
    /** The name of the property to retrieve. */
    property?: string;
  }
  export interface Result {
    /** The name of the property. */
    name?: string;
    /** The type of the property. */
    type?: string;
    /** The ID (audio engine ID) of the property. */
    audioEngineId?: number;
    /** The default value of the property. */
    default?: null | string | number | boolean;
    /** The features supported by the property. */
    supports?: {
      /** The RTPC mode that is supported by the property. */
      rtpc?: 'None' | 'Additive' | 'Exclusive' | 'Multiplicative';
      /** Indicates if the randomizer is supported by the property. */
      randomizer?: boolean;
      /** Indicates if unlink is supported by the property. */
      unlink?: boolean;
    };
    /** Displays information related to the property. */
    display?: {
      /** The display name of the property. */
      name?: string;
      /** The display group of the property. */
      group?: string;
      /** The display index of the property. */
      index?: number;
    };
    /** List of dependencies on other properties with their related action and conditions. */
    dependencies?: {
      /** Defines the type of dependency. */
      type: 'override' | 'property' | 'reference' | 'objectType';
      /** The name of the property to which the dependency is applied. */
      property?: string;
      /** The name of the action that is performed when the conditions are met. */
      action: string;
      /** The name of the context in which the dependency is evaluated. */
      context: string;
      /** An array of conditions related to the dependency. */
      conditions?: (
        | {
            [k: string]: unknown;
          }
        | {
            [k: string]: unknown;
          }
      )[];
    }[];
    /** Restricts the value of the property. */
    restriction?:
      | {}
      | {
          /** The value restriction of the property. */
          type: 'range';
          /** The minimum value for the property. */
          min: number;
          /** The maximum value for the property. */
          max: number;
        }
      | {
          /** The object reference restrictions of the property. */
          type: 'reference';
          /** The list of object reference restrictions. */
          restrictions: (
            | {
                /** An array of possible types. */
                type: string[];
                /** An array of types that are only supported as Shared objects (i.e., not Custom) even if the reference can support Custom objects. This is always a subset of "type". */
                sharedOnlyTypes?: string[];
              }
            | {
                /** An array of supported categories. */
                category: string[];
              }
            | {
                /** Name of the reference. */
                childOfReference: string;
              }
            | ('notNull' | 'playable')
          )[];
        }
      | {
          /** The value restriction of the property. */
          type: 'enum';
          /** Array of the possible enumerated values the property is restricted to. */
          values: {
            /** The enumerated value.
             */
            value?: number | boolean;
            /** The name associated with the value.
             */
            displayName?: string;
          }[];
        };
    /** Information related to how the property is displayed. */
    ui?: {
      /** Specifies how the property value is handled by Wwise UI. */
      value?: {
        /** The number of decimals displayed for the value. */
        decimals?: number;
        /** The amount by which the display increments the value. */
        step?: number;
        /** The amount by which the display increments the value for fine adjustment. */
        fine?: number;
        /** The minimum display value. */
        min?: number;
        /** The maximum display value. */
        max?: number;
        /** The number used to represent infinity. */
        infinity?: number;
      };
      /** Describe how the property is displayed. */
      displayAs?: {
        /** Indicates if the property should be displayed as a left-right mix. */
        lrMix?: boolean;
        /** Indicates if the property should be displayed as a music note (MIDI). */
        musicNote?: boolean;
        /** Indicates if the property should be displayed as a bitfield. */
        bitfield?: boolean;
      };
      /** The unit type of the property. */
      dataMeaning?: 'None' | 'Frequency' | 'Decibels' | 'PitchCents';
      /** Indicates if the value of the property is updated while moving the slider. */
      autoUpdate?: boolean;
    };
  }
}

namespace GetTypes {
  export interface Result {
    /** An array of all Wwise object types. */
    return: {
      /** The ID (class ID) of the object. */
      classId: number;
      /** The name of the object. */
      name: string;
      /** The type of the object. */
      type: string;
    }[];
  }
}

namespace IsPropertyEnabled {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to check. */
    object: string;
    /** The ID (GUID) or unique name of the platform to link the reference. Set to null-guid for unlinked reference. */
    platform: string;
    /** The name of the property. */
    property: string;
  }

  export interface Result {
    /** Indicates if the property is enabled. */
    return?: boolean;
  }
}

namespace Move {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to be moved. */
    object: string;
    /** The ID (GUID), name, or path of the new object's parent. */
    parent: string;
    /** The action to take if 'parent' already has a child with the same name. */
    onNameConflict?: 'rename' | 'replace' | 'fail';
  }

  export interface Result {
    /** The ID (GUID) of the new object. */
    id: string;
    /** The name of the new object. */
    name: string;
  }
}

namespace PasteProperties {
  export interface Arguments {
    /** The ID (GUID), name, or path of the source object. */
    source: string;
    /** Array of target objects to paste into. */
    targets: string[];
    /** Paste mode for lists. */
    pasteMode?: 'replaceEntire' | 'addReplace' | 'addKeep';
    /** Array of properties, references and lists to include in the paste operation. When not specified, all properties, references and lists are included, and the exclusion defines which ones to exclude */
    inclusion?: string[];
    /** Array of properties, references and lists to exclude from the paste operation. When not specified, no properties, references and lists are excluded. */
    exclusion?: string[];
  }
}

namespace Set {
  export interface Arguments {
    /** An array of objects on which to set values and create child or list objects. */
    objects: {
      /** The ID (GUID), name, or path of the existing object on which to set the name, notes, properties or references and under which to create children or create objects in a list. */
      object: string;
      /** The ID (GUID) or unique name of the platform used when setting properties and references via this operation. Not specifying a platform sets the value for all linked platforms. */
      platform?: string;
      /** The action to take if 'object' already has a child with the same name. */
      onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
      /** The action to take if 'object' already has objects in a specified list. */
      listMode?: 'replaceAll' | 'append';
      /** The new name of 'object'. */
      name?: string;
      /** The new notes or comments of 'object'. */
      notes?: string;
      /** Sets the value of property @propertyName. */
      [property: `@${string}`]: null | string | number | boolean;
      /** An array of child objects to be created. */
      children?: Children;
    }[];
    /** Unless overriden by an individual 'object', the ID (GUID) or unique name of the platform used when setting properties and references via this operation. Not specifying a platform sets the value for all linked platforms. */
    platform?: string;
    /** Unless overriden by an individual 'object', the action to take if 'object' already has a child with the same name. */
    onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
    /** Unless overriden by an individual 'object', the action to take if 'object' already has objects in a specified list. */
    listMode?: 'replaceAll' | 'append';
    /** Determines if Wwise automatically performs an Add or Checkout source control operation for affected work units. */
    autoAddToSourceControl?: boolean;
  }

  type Children = {
    /** The ID (GUID) or unique name of the platform used when setting properties and references via this operation. Not specifying a platform sets the value for all linked platforms. */
    platform?: string;
    /** The type of the new object. */
    type: string;
    /** The name of the new object. */
    name: string;
    /** The notes or comments of the new object. */
    notes?: string;
    /** The ID (class ID) of the plug-in. Only specify for Effect or Source plug-ins. */
    classId?: number;
    /** The ID (GUID) or name of the language. Only use this argument when creating Sound Voice objects. */
    language?: string;
    /** Sets the value of property @propertyName. */
    [property: `@${string}`]: null | string | number | boolean;
    /** An array of child objects to be created (Recursive). */
    children?: Children;
  }[];

  export interface Result {
    /** Array of {object, created objects} associations for each parent object. */
    objects?: {
      /** The ID (GUID) of the parent. */
      id: string;
      /** The name of the parent. */
      name: string;
      /** The child objects created. */
      children?: ChildrenR;
    }[];
  }

  type ChildrenR = {
    /** The ID (GUID) of the parent. */
    id: string;
    /** The name of the parent. */
    name: string;
    /** The child objects created. */
    children?: ChildrenR;
  }[];
}

namespace SetAttenuationCurve {
  export interface Arguments {
    /** The ID (GUID), name, or path of attenuation object. */
    object: string;
    /** The ID (GUID) or unique name of the platform to set curves. Set to null-guid for unlinked curve. */
    platform?: string;
    /** The type of attenuation curve. */
    curveType:
      | 'VolumeDryUsage'
      | 'VolumeWetGameUsage'
      | 'VolumeWetUserUsage'
      | 'LowPassFilterUsage'
      | 'HighPassFilterUsage'
      | 'SpreadUsage'
      | 'FocusUsage';
    /** Defines if the curve has no points, has its own set of points, or uses those of the VolumeDryUsage curve. */
    use: 'None' | 'Custom' | 'UseVolumeDry';
    /** The attenuation curve. An array of points defining a curve. */
    points: {
      /** X coordinate of curve point. */
      x: number;
      /** Y coordinate of curve point. */
      y: number;
      /** Shape of the curve segment between this point and the next. */
      shape:
        | 'Constant'
        | 'Linear'
        | 'Log3'
        | 'Log2'
        | 'Log1'
        | 'InvertedSCurve'
        | 'SCurve'
        | 'Exp1'
        | 'Exp2'
        | 'Exp3';
    }[];
  }
}

namespace SetName {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to rename. */
    object: string;
    /** The new name of the object. */
    value: string;
  }
}

namespace SetNotes {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to set value. */
    object: string;
    /** The new notes of the object. */
    value: string;
  }
}

namespace SetProperty {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to set value. */
    object: string;
    /** The name of the property. */
    property: string;
    /** The ID (GUID) or unique name of the platform. This is used to set values for unlinked properties. This is an optional argument. When not specified, the current platform is used to set the property. */
    platform?: string;
    /** The value of the object. The value of a property. */
    value: null | string | number | boolean;
  }
}

namespace SetRandomizer {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object owning the property. */
    object: string;
    /** The name of the property. */
    property: string;
    /** The ID (GUID) or unique name of the platform. */
    platform?: string;
    /** Enabled state of the randomizer. */
    enabled: boolean;
    /** Minimum value that the randomizer can offset by. */
    min?: number;
    /** Maximum value that the randomizer can offset by. */
    max?: number;
  }
}

namespace SetReference {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object which has the reference. */
    object: string;
    /** The ID (GUID) or unique name of the platform to link the reference. Set to null-guid for unlinked reference. */
    platform?: string;
    /** The name of the reference to set. */
    reference: string;
    /** The ID (GUID), name, path or definition of the object to be referred to. */
    value: string;
  }
}
