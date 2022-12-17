import { IObject, IOptions } from '../shared';

export interface ISoundbankTopics {
  'ak.wwise.core.soundbank.generated': {
    publish: Generated.Publish;
    options: Generated.Options;
  };
  'ak.wwise.core.soundbank.generationDone': {
    publish: GenerationDone.Publish;
    options: never;
  };
}

namespace Generated {
  export interface Publish {
    /** The generated SoundBank. Use the return options to obtain specific details. */
    soundbank: IObject;
    /** The platform for which the SoundBank was generated. */
    platform: any;
    /** The language for which the SoundBank was generated. Only present when generating a SoundBank for a specific language. */
    language?: any;
    /** The error message, if an error occurred. Only present if an error occurred. */
    error?: string;
    /** SoundBank data object containg the actual data encoded in base64 and the size. */
    bankData?: {
      /** Data of the SoundBank encoded in base64. */
      data?: string;
      /** Size of the SoundBank data when decoded. */
      size?: number;
    };
    /** All the informations for SoundBank. */
    bankInfo?: BankInfo[];
    /** PluginInfo file info */
    pluginInfo?: PluginInfo;
  }

  export interface Options extends IOptions {
    /** Embed the JSON SoundBank info file in the response. */
    infoFile?: boolean;
    /** Embed the base64 SoundBank data in the response. */
    bankData?: boolean;
    /** Embed the JSON PluginInfo file in the response. */
    pluginInfo?: boolean;
  }

  interface PluginInfo {
    /** Name of the platform. */
    Platform: string;
    /** The base platform the current platform is based off. */
    BasePlatform: string;
    /** List of the plugins */
    PluginLibs?: {
      /** Display Name of the plugin. */
      LibName: string;
      /** Short ID of the plugin. */
      LibId: string;
      /** Type of the plugin. */
      Type: string;
      /** Name of the DLL for the plugin. */
      DLL?: string;
      /** Name of the static lib for the plugin. */
      StaticLib?: string;
    }[];
  }

  interface BankInfo {
    /** Short ID of the resulting bank encoded in a string. */
    Id: string;
    /** GUID of the resulting SoundBank. */
    GUID?: string;
    /** Object path in the project. */
    ObjectPath?: string;
    /** The name of the language being used in this SoundBank. */
    Language: string;
    /** The name of the SoundBank. */
    ShortName: string;
    /** The file name of the SoundBank. */
    Path?: string;
    /** SoundBank type. If the SoundBank is defined by the user, then the type is 'User'. Otherwise, the bank was auto defined by Wwise. */
    Type?: 'User' | 'Event' | 'Bus';
    /** Hash value used for SoundBank generation purposes. */
    Hash?: string;
    /** Required alignment for media file. If not specified then the alignment is 16 bytes. */
    Align?: string;
    /** Does the media requires device memory or not. */
    DeviceMemory?: 'true' | 'false';
    /** All media files referenced by this SoundBank with their information. */
    Media?: {
      /** Short ID of the media. */
      Id: string;
      /** Language name used for this media. */
      Language?: string;
      /** File name of the original file. */
      ShortName: string;
      /** Path of the converted media relative to the cache folder. */
      CachePath: string;
      /** Path of the copied media file (if copied) relative to the output folder. */
      Path?: string;
      /** Prefetch size in bytes. */
      PrefetchSize?: string;
      /** Required alignment for media file in bytes. If not specified then the alignment is 16 bytes. */
      Align?: string;
      /** Does the media requires device memory or not. If not specified then the value is false. */
      DeviceMemory?: 'true' | 'false';
      /** Is the file streamed. If not specified then the value is false. */
      Streaming: 'true' | 'false';
      /** Where is file located. In the case of a streamed file with prefetch, this will indicate where to find the prefetched portion. */
      Location: 'Memory' | 'Loose' | 'OtherBank';
      /** Is the media using the reference language. If not specified then the value is false. */
      UsingReferenceLanguage?: 'true' | 'false';
    }[];
    /** All external sources referenced by this SoundBank with their information. */
    ExternalSources?: {
      [k: string]: unknown;
    }[];
    /** Plug-in descriptors. */
    Plugins?: {
      [k: string]: unknown;
    };
    /** All the events included in this SoundBank with their information. */
    Events?: {
      /** Short ID of the event. */
      Id: string;
      /** Name of the event. */
      Name: string;
      /** Object path in the project. */
      ObjectPath?: string;
      /** GUID of the event. */
      GUID?: string;
      /** The max attenuation of the event as a floating point value. */
      MaxAttenuation?: string;
      /** The kind of duration, possible values: OneShot, Unknown, Infinite, Mixed. */
      DurationType?: string;
      /** The minimum value for the duration as a floating point value. */
      DurationMin?: string;
      /** The maximum value for the duration as a floating point value. */
      DurationMax?: string;
      /** List of all media files used by this event. */
      MediaRefs?: {
        /** Short ID of the media. */
        Id: string;
      }[];
      /** List of all external sources used by this event. */
      ExternalSourceRefs?: {
        /** Cookie assigned to external source. */
        Cookie: string;
      }[];
      /** List of all plug-ins used by this event. Plug-in descriptor reference. */
      PluginRefs?: {
        /** Array of references to custom plug-in instances. */
        Custom?: {
          /** Short ID of plug-in instance. */
          Id: string;
        }[];
        /** Array of references to plug-in sharesets. */
        ShareSets?: {
          /** Short ID of plug-in instance. */
          Id: string;
        }[];
        /** Array of references to audio device plug-ins. */
        AudioDevices?: {
          /** Short ID of plug-in instance. */
          Id: string;
        }[];
      };
      /** List of all Aux Busses referenced by this event. */
      AuxBusRefs?: {
        /** Short ID of Aux Bus. */
        Id: string;
        /** Name of the Aux Bus. */
        Name: string;
        /** Object path in the project. */
        ObjectPath?: string;
        /** GUID of the Aux Bus. */
        GUID?: string;
      }[];
      /** List of set State actions in Event. */
      ActionSetState?: {
        /** Short ID of the State Group. */
        GroupId: string;
        /** Short ID of the State. */
        Id: string;
        /** Name of the State. */
        Name: string;
        /** Object path in the project. */
        ObjectPath?: string;
        /** GUID of the State. */
        GUID?: string;
      }[];
      /** List of set Switch actions in Event. */
      ActionSetSwitch?: {
        /** Short ID of the Switch Group. */
        GroupId: string;
        /** Short ID of the Switch. */
        Id: string;
        /** Name of the Switch. */
        Name: string;
        /** Object path in the project. */
        ObjectPath?: string;
        /** GUID of the Switch. */
        GUID?: string;
      }[];
      /** List of Trigger actions in Event. */
      ActionTrigger?: {
        /** Short ID of the Trigger. */
        Id: string;
        /** Name of the Trigger. */
        Name: string;
        /** Object path in the project. */
        ObjectPath?: string;
        /** GUID of the Trigger. */
        GUID?: string;
      }[];
      /** List of Set Effect actions in Event. */
      ActionSetFX?: {
        /** Short ID of the Effect. */
        Id: string;
        /** Name of the Effect. */
        Name: string;
        /** Object path in the project. */
        ObjectPath?: string;
        /** GUID of the Effect. */
        GUID?: string;
      }[];
      /** List of association of switch container value to its used media. */
      SwitchContainers?: SwitchContainer[];
    }[];
    /** All the dialogue events included in this SoundBank with their information. */
    DialogueEvents?: {
      /** Short ID of the dialogue event. */
      Id: string;
      /** Name of the dialogue event. */
      Name: string;
      /** Object path in the project. */
      ObjectPath?: string;
      /** GUID of the dialogue event. */
      GUID?: string;
      /** List of dialogue event's arguments. */
      Arguments?: {
        /** Short ID of the dialogue event. */
        Id: string;
        /** Name of the dialogue event. */
        Name: string;
        /** Object path in the project. */
        ObjectPath?: string;
        /** GUID of the dialogue event. */
        GUID?: string;
      }[];
    }[];
    /** List of all AuxBus used in this SoundBank. */
    Busses?: {
      /** Short ID of the Bus. */
      Id: string;
      /** Name of the Bus. */
      Name: string;
      /** Object path in the project. */
      ObjectPath?: string;
      /** GUID of the Bus. */
      GUID?: string;
      /** Array of plug-in references. Plug-in descriptor reference. */
      PluginRefs?: {
        /** Array of references to custom plug-in instances. */
        Custom?: {
          /** Short ID of plug-in instance. */
          Id: string;
        }[];
        /** Array of references to plug-in sharesets. */
        ShareSets?: {
          /** Short ID of plug-in instance. */
          Id: string;
        }[];
        /** Array of references to audio device plug-ins. */
        AudioDevices?: {
          /** Short ID of plug-in instance. */
          Id: string;
        }[];
      };
      /** List of Aux Busses referenced by this event. */
      AuxBusRefs?: {
        /** Short ID of Aux Bus. */
        Id: string;
        /** Name of the Aux Bus. */
        Name: string;
        /** Object path in the project. */
        ObjectPath?: string;
        /** GUID of the Aux Bus. */
        GUID?: string;
      }[];
    }[];
    /** List of all AuxBus used in this SoundBank. */
    AuxBusses?: {
      /** Short ID of the AuxBus. */
      Id: string;
      /** Name of the AuxBus. */
      Name: string;
      /** Object path in the project. */
      ObjectPath?: string;
      /** GUID of the AuxBus. */
      GUID?: string;
      /** Array of plug-in references. Plug-in descriptor reference. */
      PluginRefs?: {
        /** Array of references to custom plug-in instances. */
        Custom?: {
          /** Short ID of plug-in instance. */
          Id: string;
        }[];
        /** Array of references to plug-in sharesets. */
        ShareSets?: {
          /** Short ID of plug-in instance. */
          Id: string;
        }[];
        /** Array of references to audio device plug-ins. */
        AudioDevices?: {
          /** Short ID of plug-in instance. */
          Id: string;
        }[];
      };
      /** List of all Aux Busses referenced by this event. */
      AuxBusRefs?: {
        /** Short ID of Aux Bus. */
        Id: string;
        /** Name of the Aux Bus. */
        Name: string;
        /** Object path in the project. */
        ObjectPath?: string;
        /** GUID of the Aux Bus. */
        GUID?: string;
      }[];
    }[];
    /** List of all the Game Parameters/RTPC used in this SoundBank. */
    GameParameters?: {
      /** Short ID of the Game Parameter. */
      Id: string;
      /** Name of the Game Parameter. */
      Name: string;
      /** Object path in the project. */
      ObjectPath?: string;
      /** GUID of the Game Parameter. */
      GUID?: string;
    }[];
    /** List of all Triggers used in this SoundBank. */
    Triggers?: {
      /** Short ID of the Trigger. */
      Id: string;
      /** Name of the Trigger. */
      Name: string;
      /** Object path in the project. */
      ObjectPath?: string;
      /** GUID of the Trigger. */
      GUID?: string;
    }[];
    /** List of State Group included in this SoundBank. */
    StateGroups?: {
      /** Short ID of the State Group. */
      Id: string;
      /** Name of the State Group. */
      Name: string;
      /** Object path in the project. */
      ObjectPath?: string;
      /** GUID of the State Group. */
      GUID?: string;
      /** List of State included in this StateGroup. */
      States?: {
        /** Short ID of the State. */
        Id: string;
        /** Name of the State. */
        Name: string;
        /** Object path in the project. */
        ObjectPath?: string;
        /** GUID of the State. */
        GUID?: string;
      }[];
    }[];
    /** List of SwitchGroup included in this SoundBank. */
    SwitchGroups?: {
      /** Short ID of the SwitchGroup. */
      Id: string;
      /** Name of the SwitchGroup. */
      Name: string;
      /** Object path in the project. */
      ObjectPath?: string;
      /** GUID of the SwitchGroup. */
      GUID?: string;
      /** Game Parameter used to control the Switch Group. */
      GameParameterRef?: {
        /** Short ID of the Game Parameter. */
        Id: string;
      };
      /** List of the Switch contained in this SwitchGroup. */
      Switches?: {
        /** Short ID of the Switch. */
        Id: string;
        /** Name of the Switch. */
        Name: string;
        /** Object path in the project. */
        ObjectPath?: string;
        /** GUID of the Switch. */
        GUID?: string;
      }[];
    }[];
    /** List of all Acoustic Textures used in this SoundBank. */
    AcousticTextures?: {
      /** Short ID of the Acoustic Texture. */
      Id: string;
      /** Name of the Acoustic Texture. */
      Name: string;
      /** Object path in the project. */
      ObjectPath?: string;
      /** GUID of the Acoustic Texture. */
      GUID?: string;
      /** List of Acoustic Texture properties. */
      Properties?: {
        /** Acoustic Texture property name. */
        Name?: string;
        /** Acoustic Texture property type. */
        Type?: string;
        /** Acoustic Texture property value. */
        Value?: string;
      }[];
    }[];
  }

  interface SwitchContainer {
    /** Group id and value used for switch container. */
    SwitchValue: {
      /** Group type. */
      GroupType: 'Switch' | 'State';
      /** Switch/State group short Id. */
      GroupId: string;
      /** Switch/State short Id. */
      Id: string;
      /** GUID of the switch container value used. */
      GUID?: string;
      /** Whether the Switch/State value is the switch container's default. If not specified then the value is false. */
      Default?: 'true' | 'false';
    };
    /** List of all media files used by this event. */
    MediaRefs?: {
      /** Short ID of the media. */
      Id: string;
    }[];
    /** List of all external sources used by this event. */
    ExternalSourceRefs?: {
      /** Cookie assigned to external source. */
      Cookie: string;
    }[];
    /** List of all plug-ins used by this event. Plug-in descriptor reference. */
    PluginRefs?: {
      /** Array of references to custom plug-in instances. */
      Custom?: {
        /** Short ID of plug-in instance. */
        Id: string;
      }[];
      /** Array of references to plug-in sharesets. */
      ShareSets?: {
        /** Short ID of plug-in instance. */
        Id: string;
      }[];
      /** Array of references to audio device plug-ins. */
      AudioDevices?: {
        /** Short ID of plug-in instance. */
        Id: string;
      }[];
    };
    /** Children of this switch container value. */
    Children?: SwitchContainer[];
  }
}

namespace GenerationDone {
  export interface Publish {
    /** The SoundBank generation log. */
    logs?: {
      /** The severity level for the log item. */
      severity: 'Message' | 'Warning' | 'Error' | 'Fatal Error';
      /** Number of seconds elapsed since midnight (00:00:00), January 1, 1970, Coordinated Universal Time (UTC), according to the system clock. */
      time: number;
      /** The message ID for the log item. */
      messageId: string;
      /** The description message of the log item. */
      message: string;
      /** The platform ID and name for which the log item was reported. */
      platform?: IObject;
      /** An array of parameters in the log item. Not present when no parameter. */
      parameters?: string[];
    }[];
  }
}

//----------------------------------------------------
