type Points = {
  /**
   * X coordinate of curve point.
   */
  x: number;
  /**
   * Y coordinate of curve point.
   */
  y: number;
  /**
   * Shape of the curve segment between this point and the next.
   */
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

interface IObject {
  /**
   * The ID (GUID) of the object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
   */
  id?: string;
  /**
   * The name of the object.
   */
  name?: string;
  /**
   * The notes of the object.
   */
  notes?: string;
  /**
   * The type of the object.
   */
  type?: string;
  /**
   * The name of the plug-in for Source, Effect, Mixer, Device and Metadata plug-in.
   */
  pluginName?: string;
  /**
   * The path of the object from the project root. Ex: '\\Actor-Mixer Hierarchy\\Default Work Unit\\Sound1'
   */
  path?: string;
  /**
   * The parent of the object in the hierarchy.
   */
  parent?: {
    /**
     * The ID (GUID) of the object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
    /**
     * The name of the object.
     */
    name?: string;
  };
  /**
   * The owner of the object. This applies to objects being locally owned by other objects, such as custom effects, custom attenuations, etc.
   */
  owner?: {
    /**
     * The ID (GUID) of the object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
    /**
     * The name of the object.
     */
    name?: string;
  };
  /**
   * True if the object can be played in Transport.
   */
  isPlayable?: boolean;
  /**
   * The Short ID of the object.
   */
  shortId?: number;
  /**
   * The class ID of the object. Unsigned Integer 32-bit.
   */
  classId?: number;
  /**
   * The category of the object. Ex: 'Actor-Mixer Hierarchy'
   */
  category?: string;
  /**
   * The path to the file containing the object. The path can be a Work Unit file or a project file.
   */
  filePath?: string;
  /**
   * The parent Work Unit containing the object.
   */
  workunit?: {
    /**
     * The ID (GUID) of the object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
    /**
     * The name of the object.
     */
    name?: string;
  };
  /**
   * The number of children for the object.
   */
  childrenCount?: number;
  /**
   * The amount of space (in bytes) this object and all of its children take up in a SoundBank. This does not include the objectSize. Note that SoundBanks need to be generated for this value to be accurate.
   */
  totalSize?: number;
  /**
   * The total converted size (in bytes) of the media files of this object and all of its children. Note that SoundBanks need to be generated for this value to be accurate.
   */
  mediaSize?: number;
  /**
   * The amount of space (in bytes) the meta-data of the object takes up in a SoundBank. This does not include media files. Note that SoundBanks need to be generated for this value to be accurate.
   */
  objectSize?: number;
  /**
   * The amount of space (in bytes) the meta-data of the object and all of its children take up in a SoundBank. This does not include media files. Note that SoundBanks need to be generated for this value to be accurate.
   */
  structureSize?: number;
  /**
   * The music transition root containing all other music transitions recursively.
   */
  musicTransitionRoot?: {
    /**
     * The ID (GUID) of the object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
  };
  /**
   * The music playlist root containing all other music playlist items recursively. This applies to Music Playlist Containers only.
   */
  musicPlaylistRoot?: {
    /**
     * The ID (GUID) of the object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
  };
  /**
   * Absolute path to the original file. Only valid for Sound and Audio Source objects.
   */
  originalFilePath?: string;
  /**
   * The active source of the sound object.
   */
  activeSource?: {
    /**
     * The ID (GUID) of the object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
    /**
     * The name of the object.
     */
    name?: string;
  };
  /**
   * Absolute path to the converted file. Specify the platform in the options. Only valid for Sound and Audio Source objects.
   */
  convertedFilePath?: string;
  /**
   * Absolute path to the generated SoundBank file associated with the SoundBank object. Only valid for SoundBank objects.
   */
  soundbankBnkFilePath?: string;
  /**
   * The duration root that contains the min and max durations and duration type. This applies to all objects that can contain Audio Source objects, either directly as a source or indirectly through descendants.
   */
  duration?: {
    /**
     * The minimum possible time playback can take.
     */
    min?: number;
    /**
     * The maximum possible time playback can take.
     */
    max?: number;
    /**
     * The type of duration.
     */
    type?: string;
  };
  /**
   * Audio source with the longest duration. This applies to all objects that can contain Audio Source objects, either directly as a source or indirectly through descendants.
   */
  maxDurationSource?: {
    /**
     * The ID (GUID) of the audio source object with the longest duration. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
    /**
     * The duration in seconds of the longest trimmed source.
     */
    trimmedDuration?: number;
  };
  /**
   * Range of time for which the audio source is trimmed.
   */
  audioSourceTrimValues?: {
    /**
     * The time value in seconds of the start trim.
     */
    trimBegin?: number;
    /**
     * The time value in seconds of the end trim.
     */
    trimEnd?: number;
  };
  /**
   * Attenuation with the largest radius. This applies to all objects that can contain Audio Source objects, either directly as a source or indirectly through descendants.
   */
  maxRadiusAttenuation?: {
    /**
     * The ID (GUID) of the attenuation object with the largest radius. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
    /**
     * The radius of the attenuation object.
     */
    radius?: number;
  };
  /**
   * Language associated to the audio source. This only applies to Audio Source objects directly.
   */
  audioSourceLanguage?: {
    /**
     * The ID (GUID) of the Language object to which the Audio Source object is associated. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
    /**
     * The name of the Language object to which the Audio Source object is associated.
     */
    name?: string;
  };
  /**
   * True if the work unit is the default.
   */
  workunitIsDefault?: boolean;
  /**
   * The type of the Work Unit. Please note that, like Work Units, physical folders have the type "WorkUnit". Physical folders have the workunitType "folder".
   */
  workunitType?: 'folder' | 'rootFile' | 'nestedFile';
  /**
   * True if a Work Unit or a Project (wproj file) is dirty, meaning it was modified but not saved.
   */
  workunitIsDirty?: boolean;
  /**
   * The context object associated with the child of a Switch Container. This object holds the properties associated with the child that are context-dependent for the Switch Container (for example: the properties of the '1st only' checkbox).
   */
  switchContainerChildContext?: {
    /**
     * The ID (GUID) of the object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
  };
  /**
   * Whether or not the object has been muted explicitly. Explicitly muting an object implicitly mutes the descendant objects.
   */
  isExplicitMute?: boolean;
  /**
   * Whether or not the object has been soloed explicitly. Soloing an object silences all the other objects in the project except this one.
   */
  isExplicitSolo?: boolean;
  /**
   * Whether or not the object has been muted implicitly. Explicitly muting an object implicitly mutes the descendant objects.
   */
  isImplicitMute?: boolean;
  /**
   * Whether or not the object has been soloed implicitly. Soloing an object silences all the other objects in the project except this one.
   */
  isImplicitSolo?: boolean;
  /**
   * This only applies to Curve objects. An array of points defining a curve.
   */
  points?: {
    /**
     * X coordinate of curve point.
     */
    x: number;
    /**
     * Y coordinate of curve point.
     */
    y: number;
    /**
     * Shape of the curve segment between this point and the next.
     */
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
  /**
   * Specifies dot-separated accessors that form a query and yields a property value or an object reference. A single @ specifies the value of the property for the associated object. A double @ specifies the value of the property for the source of override.
   */
  [key: string]: any;
}

export namespace Copy {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the object to be copied.
     */
    object: string;
    /**
     * The ID (GUID), name, or path of the object's new parent.
     */
    parent: string;
    /**
     * The action to take if "parent" already has a child with the same name. Default value is "fail".
     */
    onNameConflict?: 'rename' | 'replace' | 'fail';
  }

  export type Result = IObject;
}

export namespace Move {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the object to be moved.
     */
    object: string;
    /**
     * The ID (GUID), name, or path of the object's new parent.
     */
    parent: string;
    /**
     * The action to take if "parent" already has a child with the same name. Default value is "fail".
     */
    onNameConflict?: 'rename' | 'replace' | 'fail';
  }

  export type Result = IObject;
}

export namespace Create {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the parent of the new object.
     */
    parent: string;
    /**
     * The name of the list in which to insert the object. If this argument is set, the object gets inserted in a list owned by the parent and not as a child.
     */
    list?: string;
    /**
     * The action to take if "parent" already has a child with the same name. Default value is "fail".
     */
    onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
    /**
     * The ID (GUID) or unique name of the platform used when setting properties via this command. Not specifying a platform sets the value for all linked platforms.
     */
    platform?: string;
    /**
     * Determines if Wwise automatically performs an Add or Checkout source control operation for affected work units. Defaults to false.
     */
    autoAddToSourceControl?: boolean;
    /**
     * The type of the new object.
     */
    type: string;
    /**
     * The name of the new object.
     */
    name: string;
    /**
     * The notes or comments of the new object.
     */
    notes?: string;
    /**
     * An array of child objects to be created.
     */
    children?: Children;
    /**
     * Sets the value of property @propertyName. The value of a property.
     */
    [k: string]: any;
  }

  export interface Result {
    /**
     * The ID (GUID) of the newly created Object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id: string;
    /**
     * The name of the newly created Object.
     */
    name: string;
    /**
     * The children of objects created.
     */
    children: Result[];
  }

  type Children = {
    /**
     * The type of the new object.
     */
    type: string;
    /**
     * The name of the new object.
     */
    name: string;
    /**
     * The notes or comments of the new object.
     */
    notes?: string;
    /**
     * An array of child objects to be created.
     */
    children?: Children;
    /**
     * Sets the value of property @propertyName. The value of a property.
     */
    [k: string]: any;
  }[];
}

export namespace Delete {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the object to be deleted.
     */
    object: string;
  }
}

export namespace Diff {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the source object.
     */
    source: string;
    /**
     * The ID (GUID), name, or path of the target object.
     */
    target: string;
  }

  export interface Result {
    /**
     * Array of names of properties and references that differ.
     */
    properties?: string[];
    /**
     * Array of names of lists that differ.
     */
    lists?: string[];
  }
}

export namespace Get {
  export interface Arguments {
    /**
     * Specifies a query in the WAQL language. Refer to \ref waql_introduction for more information.
     */
    waql?: string;
    /**
     * The query starting point. Note, this is deprecated. The WAQL argument should be used instead.
     */
    from?:
      | {
          /**
           * An array of object IDs, either GUID or Short ID (uint32).
           */
          id: (
            | string
            | {
                /**
                 * The Short ID of the object. Unsigned Integer 32-bit.
                 */
                shortId: number;
                /**
                 * This syntax is deprecated and we recommend the use of WAQL. The type of object for the Short ID. The type â€‹â€‹can be 10 (Event), 12 (SwitchGroup), 14 (StateGroup), 17 (EffectPlugin), 18 (SoundBank), 19 (Bus), 20 (AuxBus), 22 (GameParameter),  41 (Trigger) or 68 (AudioDevicePlugin)
                 */
                type: number;
              }
          )[];
        }
      | {
          /**
           * An array of text tokens used for searching the project.
           */
          search: [string];
        }
      | {
          /**
           * An array of unique object qualified names.
           */
          name: string[];
        }
      | {
          /**
           * An array of object paths.
           */
          path: string[];
        }
      | {
          /**
           * An array of object types.
           */
          ofType: string[];
        }
      | {
          /**
           * An array of query object ID.
           */
          query: [string];
        };
    /**
     * Array of sequential transformations chained on the object list returned by "from".
     */
    transform?: (
      | {
          /**
           * An array of only 1 selector.
           */
          select: [
            'parent' | 'children' | 'descendants' | 'ancestors' | 'referencesTo'
          ];
        }
      | 'distinct'
      | {
          /**
           * An array of two numbers specifying the boundary indexes. Use this to only include a portion of the results. For example, this could be used to obtain the 100 first items of a search result: [0,100].
           */
          range: [number, number];
        }
      | {
          /**
           * An array of two tokens to filter results. The first token is the filter predicate. Refer \ref waapi_query for the list of possible predicates. The second token is the parameter to the predicate.
           */
          where: [string | string[], ...(string | string[])[]];
        }
    )[];
  }

  export interface Result {
    return: IObject[];
  }
}

export namespace GetAttenuationCurve {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of attenuation object.
     */
    object: string;
    /**
     * The ID (GUID) or unique name of the platform to get curves.  Set to null-guid for unlinked reference.
     */
    platform?: string;
    /**
     * Type of attenuation curve.
     */
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
    /**
     * Name of attenuation curve.
     */
    curveType?:
      | 'VolumeDryUsage'
      | 'VolumeWetGameUsage'
      | 'VolumeWetUserUsage'
      | 'LowPassFilterUsage'
      | 'HighPassFilterUsage'
      | 'SpreadUsage'
      | 'FocusUsage';
    /**
     * Defines whether the curve has no points, has its own set of points, or uses those of the VolumeDryUsage curve.
     */
    use?: 'None' | 'Custom' | 'UseVolumeDry';
    /**
     * The attenuation curve. An array of points defining a curve.
     */
    points?: Points;
  }
}

export namespace GetPropertyAndReferenceNames {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the object to watch.
     */
    object?: string;
    /**
     * The ID (class ID) of the object to retrieve the property and reference names from. Unsigned Integer 32-bit.
     */
    classId?: number;
  }

  export interface Result {
    /**
     * An array of all properties and references for the specified object.
     */
    return?: string[];
  }
}

export namespace IsPropertyEnabled {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the object to check.
     */
    object: string;
    /**
     * The ID (GUID) or unique name of the platform to link the reference. Set to null-guid for unlinked reference.
     */
    platform: string;
    /**
     * The name of the property. For more information, refer to the property list of Wwise Objects listed in \ref wobjects_index . A property name. Refer to \ref wobjects_index for information about the Wwise objects and their properties.
     */
    property: string;
  }

  export interface Result {
    /**
     * Indicates if the property is enabled.
     */
    return?: boolean;
  }
}

export namespace PasteProperties {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the source object.
     */
    source: string;
    /**
     * Array of target objects to paste into.
     */
    targets: (string | string | string)[];
    /**
     * Paste mode for lists. Default value is "replaceEntire". With "replaceEntire" all elements in the lists of a target object are removed and all selected elements from the source's lists are copied. Conversely, with "addReplace" and "addKeep" elements in a target which are not in the source are not removed. Elements in the source's list which are not in a target's list are added to the target. For elements which are common to the source and a target "addReplace" will copy the one from the source, replacing the target's element, whereas "addKeep" will retain the element in the target.
     */
    pasteMode?: 'replaceEntire' | 'addReplace' | 'addKeep';
    /**
     * Array of properties, references and lists to include in the paste operation. When not specified, all properties, references and lists are included, and the exclusion defines which ones to exclude
     */
    inclusion?: string[];
    /**
     * Array of properties, references and lists to exclude from the paste operation. When not specified, no properties, references and lists are excluded.
     */
    exclusion?: string[];
  }
}

export namespace SetAttenuationCurve {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of attenuation object.
     */
    object: string;
    /**
     * The ID (GUID) or unique name of the platform to set curves. Set to null-guid for unlinked curve.
     */
    platform?: string;
    /**
     * The type of attenuation curve.
     */
    curveType:
      | 'VolumeDryUsage'
      | 'VolumeWetGameUsage'
      | 'VolumeWetUserUsage'
      | 'LowPassFilterUsage'
      | 'HighPassFilterUsage'
      | 'SpreadUsage'
      | 'FocusUsage';
    /**
     * Defines if the curve has no points, has its own set of points, or uses those of the VolumeDryUsage curve.
     */
    use: 'None' | 'Custom' | 'UseVolumeDry';
    /**
     * The attenuation curve. An array of points defining a curve.
     */
    points: Points;
  }
}

export namespace SetName {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the object to rename.
     */
    object: string;
    /**
     * The new name of the object.
     */
    value: string;
  }
}

export namespace SetNotes {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the object to set value.
     */
    object: string;
    /**
     * The new notes of the object.
     */
    value: string;
  }
}

export namespace SetProperty {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the object to set value.
     */
    object: string;
    /**
     * The name of the property. For more information, refer to the property list of Wwise Objects listed in \ref wobjects_index . A property name. Refer to \ref wobjects_index for information about the Wwise objects and their properties.
     */
    property: string;
    /**
     * The ID (GUID) or unique name of the platform. This is used to set values for unlinked properties. This is an optional argument. When not specified, the current platform is used to set the property.
     */
    platform?: string;
    /**
     * The value of the object. The value of a property.
     */
    value: null | string | number | boolean;
  }
}

export namespace SetRandomizer {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the object owning the property.
     */
    object?: string;
    /**
     * The name of the property. For more information, refer to the property list of Wwise Objects listed in \ref wobjects_index . A property name. Refer to \ref wobjects_index for information about the Wwise objects and their properties.
     */
    property?: string;
    /**
     * The ID (GUID) or unique name of the platform.
     */
    platform?: string;
    /**
     * Enabled state of the randomizer.
     */
    enabled?: boolean;
    /**
     * Minimum value that the randomizer can offset by.
     */
    min?: number;
    /**
     * Maximum value that the randomizer can offset by.
     */
    max?: number;
  }
}

export namespace SetReference {
  export interface Arguments {
    /**
     * The ID (GUID), name, or path of the object which has the reference.
     */
    object: string;
    /**
     * The ID (GUID) or unique name of the platform to link the reference. Set to null-guid for unlinked reference.
     */
    platform?: string;
    /**
     * The name of the reference to set. Refer to \ref wobjects_index for more information on the references available.
     */
    reference: string;
    /**
     * The ID (GUID), name, path or definition of the object to be referred to.
     */
    value: string;
  }
}
