import { IObject, ReturnExp } from './shared';

export namespace GetSelectedObjects {
  export interface Options {
    /** Specifies what is being returned for every object. This can include built-in accessors, such as the name or id, or object properties, such as the Volume or the Pitch. */
    return?: ReturnExp[];
    /** The ID (GUID) or name of the platform. This is an optional argument. When not specified, the current platform is used. */
    platform?: string;
    /** The ID (GUID) or name of the language. */
    language?: string;
  }

  export interface Result {
    objects: IObject[];
  }
}
