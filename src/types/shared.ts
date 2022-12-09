export interface Options {
  /**
   * Specifies what is being returned for every object. Refer to \ref wobjects_index for more information on the properties and references available.\n The array of return expressions defines which elements of the Wwise object is returned. This can include built-in accessors, such as the name or id, or object properties, such as the Volume or the Pitch.
   */
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
    | string
  )[];
  /**
   * The ID (GUID) or name of the platform. This is an optional argument. When not specified, the current platform is used.
   */
  platform?: string;
  /**
   * The ID (GUID) or name of the language.
   */
  language?: string;
}
