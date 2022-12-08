import { PointShape } from '../../shared';

export interface CopyArguments {
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

/**
 * The copied object.\n A Wwise object. Use the return options to specify which property is required.
 */
export interface CopyResult {
  /**
   * The ID (GUID) of the object.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
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
   * The type of the object. Refer to \ref wobjects_index for more information on the types available.
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
     * The ID (GUID) of the object.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
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
     * The ID (GUID) of the object.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
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
   * The class ID of the object.\n Unsigned Integer 32-bit.
   */
  classId?: number;
  /**
   * The category of the object. Ex: 'Actor-Mixer Hierarchy'
   */
  category?: string;
  /**
   * The path to the file containing the object. The path can be a Work Unit file or a project file. For using WAAPI on Mac, please refer to \ref waapi_path_on_mac .
   */
  filePath?: string;
  /**
   * The parent Work Unit containing the object. The 'id' and the 'name' is returned.
   */
  workunit?: {
    /**
     * The ID (GUID) of the object.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
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
     * The ID (GUID) of the object.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
  };
  /**
   * The music playlist root containing all other music playlist items recursively. This applies to Music Playlist Containers only.
   */
  musicPlaylistRoot?: {
    /**
     * The ID (GUID) of the object.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
  };
  /**
   * (DEPRECATED) Absolute path to the original wav file. Only valid for Sound and Audio Source objects. For using WAAPI on Mac, please refer to \ref waapi_path_on_mac .
   */
  originalWavFilePath?: string;
  /**
   * Absolute path to the original file. Only valid for Sound and Audio Source objects. For using WAAPI on Mac, please refer to \ref waapi_path_on_mac .
   */
  originalFilePath?: string;
  /**
   * The active source of the sound object.
   */
  activeSource?: {
    /**
     * The ID (GUID) of the object.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
     */
    id?: string;
    /**
     * The name of the object.
     */
    name?: string;
  };
  /**
   * (DEPRECATED) Absolute path to the converted wem file. Specify the platform in the options. Only valid for Sound and Audio Source objects. To use WAAPI on Mac, please refer to \ref waapi_path_on_mac .
   */
  convertedWemFilePath?: string;
  /**
   * Absolute path to the converted file. Specify the platform in the options. Only valid for Sound and Audio Source objects. To use WAAPI on Mac, please refer to \ref waapi_path_on_mac .
   */
  convertedFilePath?: string;
  /**
   * Absolute path to the generated SoundBank file associated with the SoundBank object. Only valid for SoundBank objects. To use WAAPI on Mac, please refer to \ref waapi_path_on_mac .
   */
  soundbankBnkFilePath?: string;
  /**
   * The duration root that contains the min and max durations and duration type. Note, this is deprecated. The duration should be used instead. This applies to all objects that can contain Audio Source objects, either directly as a source or indirectly through descendants.
   */
  playbackDuration?: {
    /**
     * The minimum possible time playback can take.
     */
    playbackDurationMin?: number;
    /**
     * The maximum possible time playback can take.
     */
    playbackDurationMax?: number;
    /**
     * The type of duration.
     */
    playbackDurationType?: string;
  };
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
     * The ID (GUID) of the audio source object with the longest duration.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
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
     * The ID (GUID) of the attenuation object with the largest radius.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
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
     * The ID (GUID) of the Language object to which the Audio Source object is associated.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
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
     * The ID (GUID) of the object.\n An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
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
   * This only applies to Curve objects.\n An array of points defining a curve.
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
    shape: PointShape;
  }[];
}
