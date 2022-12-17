import { IObject, IOptions } from '../../shared';
export interface IObjectFunctions {
    'ak.wwise.core.object.copy': {
        args: Copy.Arguments;
        options: never;
        result: Copy.Result;
    };
    'ak.wwise.core.object.create': {
        args: Create.Arguments;
        options: never;
        result: Create.Result;
    };
    'ak.wwise.core.object.delete': {
        args: Delete.Arguments;
        options: never;
        result: void;
    };
    'ak.wwise.core.object.diff': {
        args: Diff.Arguments;
        options: never;
        result: Diff.Result;
    };
    'ak.wwise.core.object.get': {
        args: Get.Arguments;
        options: Get.options;
        result: Get.Result;
    };
    'ak.wwise.core.object.getAttenuationCurve': {
        args: GetAttenuationCurve.Arguments;
        options: never;
        result: GetAttenuationCurve.Result;
    };
    'ak.wwise.core.object.getPropertyAndReferenceNames': {
        args: GetPropertyAndReferenceNames.Arguments;
        options: never;
        result: GetPropertyAndReferenceNames.Result;
    };
    'ak.wwise.core.object.getPropertyInfo': {
        args: GetPropertyInfo.Arguments;
        options: never;
        result: GetPropertyInfo.Result;
    };
    'ak.wwise.core.object.getTypes': {
        args: {};
        options: never;
        result: GetTypes.Result;
    };
    'ak.wwise.core.object.isPropertyEnabled': {
        args: IsPropertyEnabled.Arguments;
        options: never;
        result: IsPropertyEnabled.Result;
    };
    'ak.wwise.core.object.move': {
        args: Move.Arguments;
        options: never;
        result: Move.Result;
    };
    'ak.wwise.core.object.pasteProperties': {
        args: PasteProperties.Arguments;
        options: never;
        result: void;
    };
    'ak.wwise.core.object.set': {
        args: Set.Arguments;
        options: never;
        result: Set.Result;
    };
    'ak.wwise.core.object.setAttenuationCurve': {
        args: SetAttenuationCurve.Arguments;
        options: never;
        result: void;
    };
    'ak.wwise.core.object.setName': {
        args: GetAttenuationCurve.Arguments;
        options: never;
        result: GetAttenuationCurve.Result;
    };
    'ak.wwise.core.object.setNotes': {
        args: GetAttenuationCurve.Arguments;
        options: never;
        result: GetAttenuationCurve.Result;
    };
    'ak.wwise.core.object.setProperty': {
        args: GetAttenuationCurve.Arguments;
        options: never;
        result: GetAttenuationCurve.Result;
    };
    'ak.wwise.core.object.setRandomizer': {
        args: GetAttenuationCurve.Arguments;
        options: never;
        result: GetAttenuationCurve.Result;
    };
    'ak.wwise.core.object.setReference': {
        args: GetAttenuationCurve.Arguments;
        options: never;
        result: GetAttenuationCurve.Result;
    };
}
declare namespace Copy {
    interface Arguments {
        /** The ID (GUID), name, or path of the object to be copied. */
        object: string;
        /** The ID (GUID), name, or path of the new object's parent. */
        parent: string;
        /** The action to take if 'parent' already has a child with the same name. */
        onNameConflict?: 'rename' | 'replace' | 'fail';
    }
    interface Result {
        /** The ID (GUID) of the new object. */
        id: string;
        /** The name of the new object. */
        name: string;
    }
}
declare namespace Create {
    export interface Arguments {
        /** The ID (GUID), name, or path of the parent of the new object. */
        parent: string;
        /** The name of the list in which to insert the object. If this argument is set, the object gets inserted in a list owned by the parent and not as a child. */
        list?: string;
        /** The action to take if 'parent' already has a child with the same name. */
        onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
        /** The ID (GUID) or unique name of the platform used when setting properties via this command. Not specifying a platform sets the value for all linked platforms. */
        platform?: string;
        /** Determines if Wwise automatically performs an Add or Checkout source control operation for affected work units. */
        autoAddToSourceControl?: boolean;
        /** The type of the new object. */
        type: string;
        /** The name of the new object. */
        name: string;
        /** The notes or comments of the new object. */
        notes?: string;
        /** Sets the value of property @propertyName. */
        [property: `@${string}`]: null | string | number | boolean;
        /** An array of child objects to be created. */
        children?: Children;
    }
    type Children = {
        /** The type of the new object. */
        type: string;
        /** The name of the new object. */
        name: string;
        /** The notes or comments of the new object. */
        notes?: string;
        /** Sets the value of property @propertyName. */
        [property: `@${string}`]: null | string | number | boolean;
        /** An array of child objects to be created. */
        children?: Children;
    }[];
    export interface Result {
        /** The ID (GUID) of the newly created Object. */
        id: string;
        /** The name of the newly created Object. */
        name: string;
        /** The children of objects created. */
        children?: ChildrenR;
    }
    type ChildrenR = {
        /** The ID (GUID) of the newly created Object. */
        id: string;
        /** The name of the newly created Object. */
        name: string;
        /** The children of objects created. */
        children?: ChildrenR;
    }[];
    export {};
}
declare namespace Delete {
    interface Arguments {
        /** The ID (GUID), name, or path of the object to be deleted. */
        object: string;
    }
}
declare namespace Diff {
    interface Arguments {
        /** The ID (GUID), name, or path of the source object. */
        source: string;
        /** The ID (GUID), name, or path of the target object. */
        target: string;
    }
    interface Result {
        /** Array of names of properties and references that differ. */
        properties: string[];
        /** Array of names of lists that differ. */
        lists: string[];
    }
}
export declare namespace Get {
    interface Arguments {
        /** Specifies a query in the WAQL language. */
        waql?: string;
    }
    interface options extends IOptions {
        /** The ID (GUID) or name of the platform. When not specified, the current platform is used. */
        platform?: string;
        /** The ID (GUID) or name of the language. */
        language?: string;
    }
    interface Result {
        return: IObject[];
    }
}
declare namespace GetAttenuationCurve {
    interface Arguments {
        /** The ID (GUID), name, or path of attenuation object. */
        object: string;
        /** The ID (GUID) or unique name of the platform to get curves.  Set to null-guid for unlinked reference. */
        platform?: string;
        /** Type of attenuation curve. */
        curveType: 'VolumeDryUsage' | 'VolumeWetGameUsage' | 'VolumeWetUserUsage' | 'LowPassFilterUsage' | 'HighPassFilterUsage' | 'SpreadUsage' | 'FocusUsage';
    }
    interface Result {
        /** Name of attenuation curve. */
        curveType: 'VolumeDryUsage' | 'VolumeWetGameUsage' | 'VolumeWetUserUsage' | 'LowPassFilterUsage' | 'HighPassFilterUsage' | 'SpreadUsage' | 'FocusUsage';
        /** Defines whether the curve has no points, has its own set of points, or uses those of the VolumeDryUsage curve. */
        use: 'None' | 'Custom' | 'UseVolumeDry';
        /** The attenuation curve. An array of points defining a curve. */
        points: {
            /** X coordinate of curve point. */
            x: number;
            /** Y coordinate of curve point. */
            y: number;
            /** Shape of the curve segment between this point and the next. */
            shape: 'Constant' | 'Linear' | 'Log3' | 'Log2' | 'Log1' | 'InvertedSCurve' | 'SCurve' | 'Exp1' | 'Exp2' | 'Exp3';
        }[];
    }
}
declare namespace GetPropertyAndReferenceNames {
    interface Arguments {
        /** The ID (GUID), name, or path of the object to watch. */
        object?: string;
        /** The ID (class ID) of the object to retrieve the property and reference names from. */
        classId?: number;
    }
    interface Result {
        /** An array of all properties and references for the specified object. */
        return: string[];
    }
}
declare namespace GetPropertyInfo {
    interface Arguments {
        /** The ID (GUID), name, or path of the object to watch. */
        object?: string;
        /** The ID (class ID) of the object to retrieve the property from. */
        classId?: number;
        /** The name of the property to retrieve. */
        property?: string;
    }
    interface Result {
        /** The name of the property. */
        name?: string;
        /** The type of the property. */
        type?: string;
        /** The ID (audio engine ID) of the property. */
        audioEngineId?: number;
        /** The default value of the property. */
        default?: null | string | number | boolean;
        /** The features supported by the property. */
        supports?: {
            /** The RTPC mode that is supported by the property. */
            rtpc?: 'None' | 'Additive' | 'Exclusive' | 'Multiplicative';
            /** Indicates if the randomizer is supported by the property. */
            randomizer?: boolean;
            /** Indicates if unlink is supported by the property. */
            unlink?: boolean;
        };
        /** Displays information related to the property. */
        display?: {
            /** The display name of the property. */
            name?: string;
            /** The display group of the property. */
            group?: string;
            /** The display index of the property. */
            index?: number;
        };
        /** List of dependencies on other properties with their related action and conditions. */
        dependencies?: {
            /** Defines the type of dependency. */
            type: 'override' | 'property' | 'reference' | 'objectType';
            /** The name of the property to which the dependency is applied. */
            property?: string;
            /** The name of the action that is performed when the conditions are met. */
            action: string;
            /** The name of the context in which the dependency is evaluated. */
            context: string;
            /** An array of conditions related to the dependency. */
            conditions?: ({
                [k: string]: unknown;
            } | {
                [k: string]: unknown;
            })[];
        }[];
        /** Restricts the value of the property. */
        restriction?: {} | {
            /** The value restriction of the property. */
            type: 'range';
            /** The minimum value for the property. */
            min: number;
            /** The maximum value for the property. */
            max: number;
        } | {
            /** The object reference restrictions of the property. */
            type: 'reference';
            /** The list of object reference restrictions. */
            restrictions: ({
                /** An array of possible types. */
                type: string[];
                /** An array of types that are only supported as Shared objects (i.e., not Custom) even if the reference can support Custom objects. This is always a subset of "type". */
                sharedOnlyTypes?: string[];
            } | {
                /** An array of supported categories. */
                category: string[];
            } | {
                /** Name of the reference. */
                childOfReference: string;
            } | ('notNull' | 'playable'))[];
        } | {
            /** The value restriction of the property. */
            type: 'enum';
            /** Array of the possible enumerated values the property is restricted to. */
            values: {
                /** The enumerated value.
                 */
                value?: number | boolean;
                /** The name associated with the value.
                 */
                displayName?: string;
            }[];
        };
        /** Information related to how the property is displayed. */
        ui?: {
            /** Specifies how the property value is handled by Wwise UI. */
            value?: {
                /** The number of decimals displayed for the value. */
                decimals?: number;
                /** The amount by which the display increments the value. */
                step?: number;
                /** The amount by which the display increments the value for fine adjustment. */
                fine?: number;
                /** The minimum display value. */
                min?: number;
                /** The maximum display value. */
                max?: number;
                /** The number used to represent infinity. */
                infinity?: number;
            };
            /** Describe how the property is displayed. */
            displayAs?: {
                /** Indicates if the property should be displayed as a left-right mix. */
                lrMix?: boolean;
                /** Indicates if the property should be displayed as a music note (MIDI). */
                musicNote?: boolean;
                /** Indicates if the property should be displayed as a bitfield. */
                bitfield?: boolean;
            };
            /** The unit type of the property. */
            dataMeaning?: 'None' | 'Frequency' | 'Decibels' | 'PitchCents';
            /** Indicates if the value of the property is updated while moving the slider. */
            autoUpdate?: boolean;
        };
    }
}
declare namespace GetTypes {
    interface Result {
        /** An array of all Wwise object types. */
        return: {
            /** The ID (class ID) of the object. */
            classId: number;
            /** The name of the object. */
            name: string;
            /** The type of the object. */
            type: string;
        }[];
    }
}
declare namespace IsPropertyEnabled {
    interface Arguments {
        /** The ID (GUID), name, or path of the object to check. */
        object: string;
        /** The ID (GUID) or unique name of the platform to link the reference. Set to null-guid for unlinked reference. */
        platform: string;
        /** The name of the property. */
        property: string;
    }
    interface Result {
        /** Indicates if the property is enabled. */
        return?: boolean;
    }
}
declare namespace Move {
    interface Arguments {
        /** The ID (GUID), name, or path of the object to be moved. */
        object: string;
        /** The ID (GUID), name, or path of the new object's parent. */
        parent: string;
        /** The action to take if 'parent' already has a child with the same name. */
        onNameConflict?: 'rename' | 'replace' | 'fail';
    }
    interface Result {
        /** The ID (GUID) of the new object. */
        id: string;
        /** The name of the new object. */
        name: string;
    }
}
declare namespace PasteProperties {
    interface Arguments {
        /** The ID (GUID), name, or path of the source object. */
        source: string;
        /** Array of target objects to paste into. */
        targets: string[];
        /** Paste mode for lists. */
        pasteMode?: 'replaceEntire' | 'addReplace' | 'addKeep';
        /** Array of properties, references and lists to include in the paste operation. When not specified, all properties, references and lists are included, and the exclusion defines which ones to exclude */
        inclusion?: string[];
        /** Array of properties, references and lists to exclude from the paste operation. When not specified, no properties, references and lists are excluded. */
        exclusion?: string[];
    }
}
declare namespace Set {
    export interface Arguments {
        /** An array of objects on which to set values and create child or list objects. */
        objects: {
            /** The ID (GUID), name, or path of the existing object on which to set the name, notes, properties or references and under which to create children or create objects in a list. */
            object: string;
            /** The ID (GUID) or unique name of the platform used when setting properties and references via this operation. Not specifying a platform sets the value for all linked platforms. */
            platform?: string;
            /** The action to take if 'object' already has a child with the same name. */
            onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
            /** The action to take if 'object' already has objects in a specified list. */
            listMode?: 'replaceAll' | 'append';
            /** The new name of 'object'. */
            name?: string;
            /** The new notes or comments of 'object'. */
            notes?: string;
            /** Sets the value of property @propertyName. */
            [property: `@${string}`]: null | string | number | boolean;
            /** An array of child objects to be created. */
            children?: Children;
        }[];
        /** Unless overriden by an individual 'object', the ID (GUID) or unique name of the platform used when setting properties and references via this operation. Not specifying a platform sets the value for all linked platforms. */
        platform?: string;
        /** Unless overriden by an individual 'object', the action to take if 'object' already has a child with the same name. */
        onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
        /** Unless overriden by an individual 'object', the action to take if 'object' already has objects in a specified list. */
        listMode?: 'replaceAll' | 'append';
        /** Determines if Wwise automatically performs an Add or Checkout source control operation for affected work units. */
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
        /** The ID (class ID) of the plug-in. Only specify for Effect or Source plug-ins. */
        classId?: number;
        /** The ID (GUID) or name of the language. Only use this argument when creating Sound Voice objects. */
        language?: string;
        /** Sets the value of property @propertyName. */
        [property: `@${string}`]: null | string | number | boolean;
        /** An array of child objects to be created (Recursive). */
        children?: Children;
    }[];
    export interface Result {
        /** Array of {object, created objects} associations for each parent object. */
        objects?: {
            /** The ID (GUID) of the parent. */
            id: string;
            /** The name of the parent. */
            name: string;
            /** The child objects created. */
            children?: ChildrenR;
        }[];
    }
    type ChildrenR = {
        /** The ID (GUID) of the parent. */
        id: string;
        /** The name of the parent. */
        name: string;
        /** The child objects created. */
        children?: ChildrenR;
    }[];
    export {};
}
declare namespace SetAttenuationCurve {
    interface Arguments {
        /** The ID (GUID), name, or path of attenuation object. */
        object: string;
        /** The ID (GUID) or unique name of the platform to set curves. Set to null-guid for unlinked curve. */
        platform?: string;
        /** The type of attenuation curve. */
        curveType: 'VolumeDryUsage' | 'VolumeWetGameUsage' | 'VolumeWetUserUsage' | 'LowPassFilterUsage' | 'HighPassFilterUsage' | 'SpreadUsage' | 'FocusUsage';
        /** Defines if the curve has no points, has its own set of points, or uses those of the VolumeDryUsage curve. */
        use: 'None' | 'Custom' | 'UseVolumeDry';
        /** The attenuation curve. An array of points defining a curve. */
        points: {
            /** X coordinate of curve point. */
            x: number;
            /** Y coordinate of curve point. */
            y: number;
            /** Shape of the curve segment between this point and the next. */
            shape: 'Constant' | 'Linear' | 'Log3' | 'Log2' | 'Log1' | 'InvertedSCurve' | 'SCurve' | 'Exp1' | 'Exp2' | 'Exp3';
        }[];
    }
}
export {};
