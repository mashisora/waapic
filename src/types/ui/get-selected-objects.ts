import { ReturnExp } from '../shared';

export interface GetSelectedObjectsOptions {
  /**
   * Specifies what is being returned for every object. Refer to \ref wobjects_index for more information on the properties and references available.\n The array of return expressions defines which elements of the Wwise object is returned. This can include built-in accessors, such as the name or id, or object properties, such as the Volume or the Pitch.
   */
  return?: ReturnExp[];
  /**
   * The ID (GUID) or name of the platform. This is an optional argument. When not specified, the current platform is used.
   */
  platform?: string;
  /**
   * The ID (GUID) or name of the language.
   */
  language?: string;
}
