export interface IProfilerFunctions {
    'ak.wwise.core.profiler.enableProfilerData': {
        args: EnableProfilerData.Arguments;
        options: never;
        result: void;
    };
    'ak.wwise.core.profiler.getAudioObjects': {
        args: GetAudioObjects.Arguments;
        options: GetAudioObjects.Options;
        result: GetAudioObjects.Result;
    };
    'ak.wwise.core.profiler.getBusses': {
        args: GetBusses.Arguments;
        options: GetBusses.Options;
        result: GetBusses.Result;
    };
    'ak.wwise.core.profiler.getCursorTime': {
        args: GetCursorTime.Arguments;
        options: never;
        result: GetCursorTime.Result;
    };
    'ak.wwise.core.profiler.getGameObjects': {
        args: GetGameObjects.Arguments;
        options: never;
        result: GetGameObjects.Result;
    };
    'ak.wwise.core.profiler.getRTPCs': {
        args: GetRTPCs.Arguments;
        options: never;
        result: GetRTPCs.Result;
    };
    'ak.wwise.core.profiler.getVoiceContributions': {
        args: GetVoiceContributions.Arguments;
        options: never;
        result: GetVoiceContributions.Result;
    };
    'ak.wwise.core.profiler.getVoices': {
        args: GetVoices.Arguments;
        options: GetVoices.Options;
        result: GetVoices.Result;
    };
    'ak.wwise.core.profiler.startCapture': {
        args: {};
        options: never;
        result: StartCapture.Result;
    };
    'ak.wwise.core.profiler.stopCapture': {
        args: {};
        options: never;
        result: StopCapture.Result;
    };
}
declare namespace EnableProfilerData {
    interface Arguments {
        /** An array of data types. */
        dataTypes: {
            /** Specifies the type of data you want to capture. */
            dataType: 'cpu' | 'memory' | 'stream' | 'voices' | 'listener' | 'obstructionOcclusion' | 'markersNotification' | 'output' | 'soundBanks' | 'loadedMedia' | 'preparedEvents' | 'preparedGameSyncs' | 'interactiveMusic' | 'streamingDevice' | 'meter' | 'auxiliarySends' | 'apiCalls' | 'spatialAudio' | 'voiceInspector' | 'audioObjects' | 'gameSyncs';
            /** Enable (true) or disable (false) capture for this type of profiler data. */
            enable?: boolean;
        }[];
    }
}
declare namespace GetAudioObjects {
    interface Arguments {
        /** Time in milliseconds to query for Audio Objects, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture. */
        time: number | 'user' | 'capture';
        /** The pipeline ID of a Bus instance for which to get Audio Objects. */
        busPipelineID?: number;
    }
    interface Options {
        /** Members to return for each Audio Object. Defaults to Audio Object ID, Bus Pipeline ID, Instigator Pipeline ID and Effect Class ID. */
        return?: ('busName' | 'effectPluginName' | 'audioObjectID' | 'busPipelineID' | 'gameObjectID' | 'gameObjectName' | 'audioObjectName' | 'instigatorPipelineID' | 'busID' | 'busGUID' | 'spatializationMode' | 'x' | 'y' | 'z' | 'spread' | 'focus' | 'channelConfig' | 'effectClassID' | 'effectIndex' | 'metadata' | 'rmsMeter' | 'peakMeter')[];
    }
    interface Result {
        /** Array of Audio Objects. */
        return: {
            /** Name of the bus instance. */
            busName?: string;
            /** Name of the effect plug-in after which the Audio Object was captured. */
            effectPluginName?: string;
            /** The ID of the Audio Object. */
            audioObjectID?: number;
            /** The Pipeline ID of the Bus instance. */
            busPipelineID?: number;
            /** The Game Object ID of the Bus instance. */
            gameObjectID?: number;
            /** The name of the Game Object of the Bus Instance. */
            gameObjectName?: string;
            /** The name of the Audio Object. Can be empty. */
            audioObjectName?: string;
            /** The pipeline ID of the instigator from which the Audio Object originates. Can be either a Bus instance or a Voice. */
            instigatorPipelineID?: number;
            /** The short ID of the Bus. */
            busID?: number;
            /** The GUID of the Bus. */
            busGUID?: string;
            /** The spatialization mode. */
            spatializationMode?: number;
            /** The X value of the Audio Object position. */
            x?: number;
            /** The Y value of the Audio Object position. */
            y?: number;
            /** The Z value of the Audio Object position. */
            z?: number;
            /** The spread value (normalized) of the Audio Object. */
            spread?: number;
            /** The focus value (normalized) of the Audio Object. */
            focus?: number;
            /** The channel configuration of the Audio Object. */
            channelConfig?: number;
            /** The Class ID of the effect after which the Audio Object was captured. */
            effectClassID?: number;
            /** The index of the effect after which the Audio Object was captured. */
            effectIndex?: number;
            /** Array of objects containing metadata of the Audio Object. */
            metadata?: {
                /** The class ID of the metadata. */
                metadataClassID: number;
                /** The name of the metadata. */
                metadataName?: string;
                /** The ID (GUID) of the source object. */
                sourceID?: string;
                /** The short ID of the source object. */
                sourceShortID: number;
                /** The name of the source object. */
                sourceName?: string;
            }[];
            /** Array of volume values (one per channel) for the RMS meter. */
            rmsMeter?: number[];
            /** Array of volume values (one per channel) for the Peak meter. */
            peakMeter?: number[];
        }[];
    }
}
declare namespace GetBusses {
    interface Arguments {
        /** Time in milliseconds to query for busses, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture. */
        time: number | 'user' | 'capture';
        /** The pipeline ID of a single bus instance to get. */
        busPipelineID?: number;
    }
    interface Options {
        /** Members to return for each bus. Defaults to Pipeline ID, Game Object ID, and Object GUID. */
        return?: ('pipelineID' | 'mixBusID' | 'objectGUID' | 'objectName' | 'gameObjectID' | 'gameObjectName' | 'mixerID' | 'deviceID' | 'volume' | 'downstreamGain' | 'voiceCount' | 'depth')[];
    }
    interface Result {
        /** Array of busses. */
        return: {
            /** Pipeline ID of the bus. */
            pipelineID?: number;
            /** Unique ID assigned to a mixing bus. */
            mixBusID?: number;
            /** Object GUID corresponding to the bus. */
            objectGUID?: string;
            /** Object Name corresponding to the bus. */
            objectName?: string;
            /** Game Object ID corresponding to the voice. */
            gameObjectID?: number;
            /** Game Object Name corresponding to the voice. */
            gameObjectName?: string;
            /** Mixer plugin ID. */
            mixerID?: number;
            /** Audio Output device ID. */
            deviceID?: number;
            /** Gain of the bus in dB. */
            volume?: number;
            /** Gain from current bus down to output in dB. */
            downstreamGain?: number;
            /** Number of voices routed to the bus. */
            voiceCount?: number;
            /** Depth level of the bus in the pipeline. */
            depth?: number;
        }[];
    }
}
declare namespace GetCursorTime {
    interface Arguments {
        /** Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture. */
        cursor: 'user' | 'capture';
    }
    interface Result {
        /** The current position of the specified Time Cursor, in ms. */
        return: number;
    }
}
declare namespace GetGameObjects {
    interface Arguments {
        /** The time in milliseconds to query for game objects, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture. */
        time: number | 'user' | 'capture';
    }
    interface Result {
        /** An array of objects containing game object data. */
        return: {
            /** The ID of the game object. */
            id: number;
            /** The name of the game object. */
            name: string;
            /** The time at which the game object was registered. */
            registrationTime: number;
            /** The time at which the game object was unregistered. */
            unregistrationTime: number;
        }[];
    }
}
declare namespace GetRTPCs {
    interface Arguments {
        /** Time in milliseconds to query for RTPCs, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture. */
        time: number | 'user' | 'capture';
    }
    interface Result {
        /** Array of RTPCs. */
        return: {
            /** The ID (GUID) of the Game Parameter, LFO, Time, Envelope or MIDI Parameter object. */
            id: string;
            /** The name of the Game Parameter, LFO, Time, Envelope or MIDI Parameter object. */
            name: string;
            /** The Game Object associated with the RTPC scope, or AK_INVALID_GAME_OBJECT for global scope RTPCs. */
            gameObjectId?: number;
            /** The value of the Game Parameter, LFO, Time, Envelope or MIDI Parameter at the cursor time. */
            value?: number;
        }[];
    }
}
declare namespace GetVoiceContributions {
    interface Arguments {
        /** The pipeline ID of the voice to get contributions from. */
        voicePipelineID: number;
        /** An array of bus pipeline IDs. */
        bussesPipelineID?: number[];
        /** Time in milliseconds to query for voices, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture. */
        time: number | 'user' | 'capture';
    }
    interface Result {
        /** The hierarchy of objects with parameters contributing to the voice, ordered from top-level parent to the voice object */
        return?: {
            /** The volume difference applied as a contribution. */
            volume?: number;
            /** The LPF difference applied as a contribution. */
            LPF?: number;
            /** The HPF difference applied as a contribution. */
            HPF?: number;
            /** A tree of contribution objects. */
            objects?: {
                /** The name of the contribution. */
                name?: string;
                /** The volume difference applied. */
                volume?: number;
                /** The LPF difference applied. */
                LPF?: number;
                /** The HPF difference applied. */
                HPF?: number;
                /** An array of child objects associated to the object. */
                children?: any[];
                /** An array of contribution parameters associated to the object. */
                parameters?: {
                    /** The object property affecting the voice */
                    propertyType?: string;
                    /** The reason for the parameter to affect the voice. */
                    reason?: string;
                    /** The driving object GUID, or the driving reason when a parameter is not driven by an object.*/
                    driver?: string | string;
                    /** The value or object GUID of the driver affecting the parameter. */
                    driverValue?: number | string;
                    /** Contribution value */
                    value?: number;
                }[];
            }[];
        };
    }
}
declare namespace GetVoices {
    interface Arguments {
        /** Time in milliseconds to query for voices, or a Time Cursor from which to acquire the time. The User Time Cursor is the one that can be manipulated by the user, while the Capture Time Cursor represents the latest time of the current capture. */
        time: number | 'user' | 'capture';
        /** The pipeline ID of a single voice to get. */
        voicePipelineID?: number;
    }
    interface Options {
        /** Members to return for each voice. Defaults to Pipeline ID, Game Object ID and Object GUID. */
        return?: ('pipelineID' | 'playingID' | 'soundID' | 'gameObjectID' | 'gameObjectName' | 'objectGUID' | 'objectName' | 'playTargetID' | 'playTargetGUID' | 'playTargetName' | 'baseVolume' | 'gameAuxSendVolume' | 'envelope' | 'normalizationGain' | 'lowPassFilter' | 'highPassFilter' | 'priority' | 'isStarted' | 'isVirtual' | 'isForcedVirtual')[];
    }
    interface Result {
        /** Array of voices. */
        return: {
            /** Pipeline ID of the voice. */
            pipelineID?: number;
            /** Playing ID of the voice. */
            playingID?: number;
            /** Short ID of the sound object corresponding to the voice. */
            soundID?: number;
            /** Game Object ID corresponding to the voice.\n Unsigned Integer 64-bit. */
            gameObjectID?: number;
            /** Game Object Name corresponding to the voice. */
            gameObjectName?: string;
            /** Object GUID corresponding to the voice. */
            objectGUID?: string;
            /** Object Name corresponding to the voice. */
            objectName?: string;
            /** Short ID of the play target object corresponding to the voice. */
            playTargetID?: number;
            /** GUID of the play target object corresponding to the voice. */
            playTargetGUID?: string;
            /** Name of the play target object corresponding to the voice. */
            playTargetName?: string;
            /** Voice volume in dB, including HDR attenuation. */
            baseVolume?: number;
            /** Volume send to the auxiliary bus send in dB. */
            gameAuxSendVolume?: number;
            /** Current analyzed envelope value in dB. 0 if unavailable. */
            envelope?: number;
            /** Loudness normalization and make-up gain in dB. */
            normalizationGain?: number;
            /** Low-Pass Filter applied to the voice. */
            lowPassFilter?: number;
            /** High-Pass Filter applied to the voice. */
            highPassFilter?: number;
            /** Priority given to the voice. */
            priority?: number;
            /** True if the voice has started playing, false otherwise. */
            isStarted?: boolean;
            /** True if the voice is virtual, false otherwise. */
            isVirtual?: boolean;
            /** True if the voice was forced as virtual, false otherwise. */
            isForcedVirtual?: boolean;
        }[];
    }
}
declare namespace StartCapture {
    interface Result {
        /** The value of the Capture Time Cursor in ms. */
        return?: number;
    }
}
declare namespace StopCapture {
    interface Result {
        /** The value of the Capture Time Cursor in ms. */
        return?: number;
    }
}
export {};
