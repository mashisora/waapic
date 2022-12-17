export interface IAudioTopics {
    'ak.wwise.core.audio.imported': {
        options: Imported.Options;
        publish: {};
    };
}
declare namespace Imported {
    interface Options {
        /** Data to be returned for every imported object. */
        return?: ('id' | 'name' | 'notes' | 'type' | 'pluginName' | 'shortId' | 'classId' | 'category' | 'filePath' | 'workunit' | 'parent' | 'owner' | 'path' | 'isPlayable' | 'childrenCount' | 'totalSize' | 'mediaSize' | 'objectSize' | 'structureSize' | 'sound:convertedWemFilePath' | 'sound:originalWavFilePath' | 'soundbank:bnkFilePath' | 'music:transitionRoot' | 'music:playlistRoot' | 'audioSource:playbackDuration' | 'audioSource:maxDurationSource' | 'audioSource:trimValues' | 'audioSource:maxRadiusAttenuation' | 'audioSource:language' | 'workunit:isDefault' | 'workunit:type' | 'workunit:isDirty' | 'switchContainerChild:context' | 'convertedWemFilePath' | 'originalFilePath' | 'convertedFilePath' | 'originalWavFilePath' | 'soundbankBnkFilePath' | 'musicTransitionRoot' | 'musicPlaylistRoot' | 'playbackDuration' | 'duration' | 'maxDurationSource' | 'audioSourceTrimValues' | 'maxRadiusAttenuation' | 'audioSourceLanguage' | 'workunitIsDefault' | 'workunitType' | 'workunitIsDirty' | 'switchContainerChildContext' | 'isExplicitMute' | 'isExplicitSolo' | 'isImplicitMute' | 'isImplicitSolo' | 'points' | `@${string}`)[];
    }
}
export {};
