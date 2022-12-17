export interface IObject {
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
  /** Absolute path to the converted file. Specify the platform in the options. Only valid for Sound and Audio Source objects. */
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
  /** The type of the Work Unit. Please note that, like Work Units, physical folders have the type "WorkUnit". Physical folders have the workunitType "folder". */
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
  /** Specifies dot-separated accessors that form a query and yields a property value or an object reference. A single @ specifies the value of the property for the associated object. A double @@ specifies the value of the property for the source of override. */
  [property: `@${string}`]:
    | string
    | number
    | boolean
    | {
        /** The ID (GUID) of the object. */
        id: string;
        /** The name of the object. */
        name: string;
      }
    | {
        /** The ID (GUID) of the object. */
        id: string;
        /** The name of the object. */
        name: string;
      }[];
}

export interface IOptions {
  /** The array of return expressions defines which elements of the Wwise object is returned. This can include built-in accessors, such as the name or id, or object properties, such as the Volume or the Pitch. */
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
}
