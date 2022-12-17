import { IObject, IOptions } from '../shared';

export interface IObjectTopics {
  'ak.wwise.core.object.attenuationCurveChanged': {
    publish: AttenuationCurveChanged.Publish;
    options: AttenuationCurveChanged.Options;
  };
  'ak.wwise.core.object.attenuationCurveLinkChanged': {
    publish: AttenuationCurveLinkChanged.Publish;
    options: AttenuationCurveLinkChanged.Options;
  };
  'ak.wwise.core.object.childAdded': {
    publish: ChildAdded.Publish;
    options: ChildAdded.Options;
  };
  'ak.wwise.core.object.childRemoved': {
    publish: ChildRemoved.Publish;
    options: ChildRemoved.Options;
  };
  'ak.wwise.core.object.created': {
    publish: Created.Publish;
    options: Created.Options;
  };
  'ak.wwise.core.object.curveChanged': {
    publish: CurveChanged.Publish;
    options: CurveChanged.Options;
  };
  'ak.wwise.core.object.nameChanged': {
    publish: NameChanged.Publish;
    options: NameChanged.Options;
  };
  'ak.wwise.core.object.notesChanged': {
    publish: NotesChanged.Publish;
    options: NotesChanged.Options;
  };
  'ak.wwise.core.object.postDeleted': {
    publish: PostDeleted.Publish;
    options: PostDeleted.Options;
  };
  'ak.wwise.core.object.preDeleted': {
    publish: PreDeleted.Publish;
    options: PreDeleted.Options;
  };
  'ak.wwise.core.object.propertyChanged': {
    publish: PropertyChanged.Publish;
    options: PropertyChanged.Options;
  };
  'ak.wwise.core.object.referenceChanged': {
    publish: ReferenceChanged.Publish;
    options: ReferenceChanged.Options;
  };
}

namespace AttenuationCurveChanged {
  export interface Publish {
    /** The attenuation object owning the curve. */
    attenuation: IObject;
    /** The curve type that changed. */
    curveType:
      | 'VolumeDryUsage'
      | 'VolumeWetGameUsage'
      | 'VolumeWetUserUsage'
      | 'LowPassFilterUsage'
      | 'HighPassFilterUsage'
      | 'SpreadUsage'
      | 'FocusUsage';
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace AttenuationCurveLinkChanged {
  export interface Publish {
    /** The attenuation object owning the curve. */
    attenuation: IObject;
    /** The curve type that changed. */
    curveType:
      | 'VolumeDryUsage'
      | 'VolumeWetGameUsage'
      | 'VolumeWetUserUsage'
      | 'LowPassFilterUsage'
      | 'HighPassFilterUsage'
      | 'SpreadUsage'
      | 'FocusUsage';
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace ChildAdded {
  export interface Publish {
    /** The newly added child object. */
    child: IObject;
    /** The parent object to which the object is added. */
    parent: IObject;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace ChildRemoved {
  export interface Publish {
    /** The newly added child object. */
    child: IObject;
    /** The parent object to which the object is added. */
    parent: IObject;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace Created {
  export interface Publish {
    /** The newly created object. */
    object: IObject;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace CurveChanged {
  export interface Publish {
    /** The type of change applied to the curve. */
    notification: string;
    /** The curve object that was modified. */
    curve: IObject;
    /** The owner object. */
    owner: IObject;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace NameChanged {
  export interface Publish {
    /** The object that was renamed */
    object: IObject;
    /** The new name of the object. */
    newName: string;
    /** The previous name of the object. */
    oldName: string;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace NotesChanged {
  export interface Publish {
    /** The object that had its notes changed. */
    object: IObject;
    /** The object's new notes. */
    newNotes: string;
    /** The previous notes of the object. */
    oldNotes: string;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace PostDeleted {
  export interface Publish {
    /** The deleted object. */
    object: IObject;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace PreDeleted {
  export interface Publish {
    /** The object to be deleted. */
    object: IObject;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace PropertyChanged {
  export interface Publish {
    /** The watched object. */
    object: IObject;
    /** The watched property of the watched object. */
    property: string;
    /** The previous value. */
    old: null | string | number | boolean;
    /** The new value. */
    new: null | string | number | boolean;
    /** The ID (GUID) of the platform for which the change occurred. */
    platform: string;
  }

  export interface Options extends IOptions {
    /** The ID (GUID), name, or path of the object to watch. */
    object: string;
    /** The property of the watched object to watch. */
    property: string;
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}

namespace ReferenceChanged {
  export interface Publish {
    /** The object which had its reference changed. */
    object: IObject;
    /** The previous referenced object. */
    old: IObject;
    /** The new referenced object. */
    new: IObject;
    /** The name of the reference that was changed. */
    reference: string;
    /** The ID (GUID) of the platform if the reference was changed for a single platform. When not provided, the reference is changed for all platforms. */
    platform?: string;
  }

  export interface Options extends IOptions {
    /** The ID (GUID) of the platform. */
    platform?: string;
  }
}
