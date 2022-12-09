import { IObject, ReturnExp, Points, CurveType } from '../shared';

export namespace Copy {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to be copied. */
    object: string;
    /** The ID (GUID), name, or path of the object's new parent. */
    parent: string;
    /** The action to take if "parent" already has a child with the same name. Default value is "fail". */
    onNameConflict?: 'rename' | 'replace' | 'fail';
  }

  export interface Result {
    /** The ID (GUID) of the parent. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}. */
    id?: string;
    /** The name of the parent. */
    name?: string;
  }
}

export namespace Move {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to be moved. */
    object: string;
    /** The ID (GUID), name, or path of the object's new parent. */
    parent: string;
    /** The action to take if "parent" already has a child with the same name. Default value is "fail". */
    onNameConflict?: 'rename' | 'replace' | 'fail';
  }

  export interface Result {
    /** The ID (GUID) of the parent. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}. */
    id?: string;
    /** The name of the parent. */
    name?: string;
  }
}

export namespace Create {
  export interface Arguments {
    /** The ID (GUID), name, or path of the parent of the new object. */
    parent: string;
    /** The name of the list in which to insert the object. If this argument is set, the object gets inserted in a list owned by the parent and not as a child. */
    list?: string;
    /** The action to take if "parent" already has a child with the same name. Default value is "fail". */
    onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
    /** The ID (GUID) or unique name of the platform used when setting properties via this command. Not specifying a platform sets the value for all linked platforms. */
    platform?: string;
    /** Determines if Wwise automatically performs an Add or Checkout source control operation for affected work units. Defaults to false. */
    autoAddToSourceControl?: boolean;
    /** The type of the new object. */
    type: string;
    /** The name of the new object. */
    name: string;
    /** The notes or comments of the new object. */
    notes?: string;
    /** An array of child objects to be created. */
    children?: Children;
    /** Sets the value of property @propertyName. */
    [property: `@${string}`]: unknown;
  }

  type Children = {
    /** The type of the new object. */
    type: string;
    /** The name of the new object. */
    name: string;
    /** The notes or comments of the new object. */
    notes?: string;
    /** An array of child objects to be created. */
    children?: Children;
    /** Sets the value of property @propertyName. */
    [property: `@${string}`]: unknown;
  }[];

  export interface Result {
    /** The ID (GUID) of the newly created Object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}. */
    id: string;
    /** The name of the newly created Object. */
    name: string;
    /** The children of objects created. */
    children: Result[];
  }
}

export namespace Delete {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to be deleted. */
    object: string;
  }
}

export namespace Diff {
  export interface Arguments {
    /** The ID (GUID), name, or path of the source object. */
    source: string;
    /** The ID (GUID), name, or path of the target object. */
    target: string;
  }

  export interface Result {
    /** Array of names of properties and references that differ. */
    properties?: string[];
    /** Array of names of lists that differ. */
    lists?: string[];
  }
}

export namespace Get {
  export interface Arguments {
    /** Specifies a query in the WAQL language. */
    waql?: string;
  }

  export interface Options {
    /** Specifies what is being returned for every object. This can include built-in accessors, such as the name or id, or object properties, such as the Volume or the Pitch. */
    return?: ReturnExp;
    /** The ID (GUID) or name of the platform. This is an optional argument. When not specified, the current platform is used. */
    platform?: string;
    /** The ID (GUID) or name of the language. */
    language?: string;
  }

  export interface Result {
    return: IObject[];
  }
}

export namespace GetAttenuationCurve {
  export interface Arguments {
    /** The ID (GUID), name, or path of attenuation object. */
    object: string;
    /** The ID (GUID) or unique name of the platform to get curves.  Set to null-guid for unlinked reference. */
    platform?: string;
    /** Type of attenuation curve. */
    curveType: CurveType;
  }

  export interface Result {
    /** Name of attenuation curve. */
    curveType?: CurveType;
    /** Defines whether the curve has no points, has its own set of points, or uses those of the VolumeDryUsage curve. */
    use?: 'None' | 'Custom' | 'UseVolumeDry';
    /** The attenuation curve. An array of points defining a curve. */
    points?: Points;
  }
}

export namespace GetPropertyAndReferenceNames {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to watch. */
    object?: string;
    /** The ID (class ID) of the object to retrieve the property and reference names from. Unsigned Integer 32-bit. */
    classId?: number;
  }

  export interface Result {
    /** An array of all properties and references for the specified object. */
    return?: string[];
  }
}

export namespace IsPropertyEnabled {
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

export namespace PasteProperties {
  export interface Arguments {
    /** The ID (GUID), name, or path of the source object. */
    source: string;
    /** Array of target objects to paste into. */
    targets: string[];
    /** Paste mode for lists. Default value is "replaceEntire". With "replaceEntire" all elements in the lists of a target object are removed and all selected elements from the source's lists are copied. Conversely, with "addReplace" and "addKeep" elements in a target which are not in the source are not removed. Elements in the source's list which are not in a target's list are added to the target. For elements which are common to the source and a target "addReplace" will copy the one from the source, replacing the target's element, whereas "addKeep" will retain the element in the target. */
    pasteMode?: 'replaceEntire' | 'addReplace' | 'addKeep';
    /** Array of properties, references and lists to include in the paste operation. When not specified, all properties, references and lists are included, and the exclusion defines which ones to exclude */
    inclusion?: string[];
    /** Array of properties, references and lists to exclude from the paste operation. When not specified, no properties, references and lists are excluded. */
    exclusion?: string[];
  }
}

export namespace Set {
  export interface Arguments {
    /** An array of objects on which to set values and create child or list objects. */
    objects: {
      /** The ID (GUID), name, or path of the existing object on which to set the name, notes, properties or references and under which to create children or create objects in a list. */
      object: string;
      /** The ID (GUID) or unique name of the platform used when setting properties and references via this operation. Not specifying a platform sets the value for all linked platforms. */
      platform?: string;
      /** The action to take if "object" already has a child with the same name. Default value is "fail". */
      onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
      /** The action to take if "object" already has objects in a specified list. Default value is "append". */
      listMode?: 'replaceAll' | 'append';
      /** The new name of "object". */
      name?: string;
      /** The new notes or comments of "object". */
      notes?: string;
      /** An array of child objects to be created. */
      children?: Children;
      /** Sets the value of property @propertyName. */
      [property: `@${string}`]: unknown;
    }[];
    /** Unless overriden by an individual "object", the ID (GUID) or unique name of the platform used when setting properties and references via this operation. Not specifying a platform sets the value for all linked platforms. */
    platform?: string;
    /** Unless overriden by an individual "object", the action to take if "object" already has a child with the same name. Default value is "fail". */
    onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
    /** Unless overriden by an individual "object", the action to take if "object" already has objects in a specified list. Default value is "append". */
    listMode?: 'replaceAll' | 'append';
    /** Determines if Wwise automatically performs an Add or Checkout source control operation for affected work units. Defaults to false. */
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
    /** The ID (class ID) of the plug-in. Only specify for Effect or Source plug-ins. Unsigned Integer 32-bit. */
    classId?: number;
    /** The ID (GUID) or name of the language. Only use this argument when creating Sound Voice objects. */
    language?: string;
    /** An array of child objects to be created (Recursive). */
    children?: Children;
    /** Sets the value of property @propertyName. */
    [property: `@${string}`]: unknown;
  }[];

  export interface Result {
    /**
     * Array of {object, created objects} associations for each parent object.
     */
    objects?: {
      /** The ID (GUID) of the parent. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}. */
      id: string;
      /** The name of the parent. */
      name: string;
      /** The child objects created. */
      children?: ChildrenRes;
    }[];
  }

  type ChildrenRes = {
    /** The ID (GUID) of the parent. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}. */
    id: string;
    /** The name of the parent. */
    name: string;
    /** The child objects created. */
    children?: ChildrenRes;
  }[];
}

export namespace SetAttenuationCurve {
  export interface Arguments {
    /** The ID (GUID), name, or path of attenuation object. */
    object: string;
    /** The ID (GUID) or unique name of the platform to set curves. Set to null-guid for unlinked curve. */
    platform?: string;
    /** The type of attenuation curve. */
    curveType: CurveType;
    /** Defines if the curve has no points, has its own set of points, or uses those of the VolumeDryUsage curve. */
    use: 'None' | 'Custom' | 'UseVolumeDry';
    /** The attenuation curve. An array of points defining a curve. */
    points: Points;
  }
}

export namespace SetName {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to rename. */
    object: string;
    /** The new name of the object. */
    value: string;
  }
}

export namespace SetNotes {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to set value. */
    object: string;
    /** The new notes of the object. */
    value: string;
  }
}

export namespace SetProperty {
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

export namespace SetRandomizer {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object owning the property. */
    object?: string;
    /** The name of the property. */
    property?: string;
    /** The ID (GUID) or unique name of the platform. */
    platform?: string;
    /** Enabled state of the randomizer. */
    enabled?: boolean;
    /** Minimum value that the randomizer can offset by. */
    min?: number;
    /** Maximum value that the randomizer can offset by. */
    max?: number;
  }
}

export namespace SetReference {
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
