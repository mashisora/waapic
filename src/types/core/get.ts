export interface GetOptions {
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

export interface GetArguments {
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
               * The Short ID of the object.\n Unsigned Integer 32-bit.
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
