export interface GetPropertyAndReferenceNamesArguments {
  /**
   * The ID (GUID), name, or path of the object to watch.
   */
  object?: string;
  /**
   * The ID (class ID) of the object to retrieve the property and reference names from.\n Unsigned Integer 32-bit.
   */
  classId?: number;
}

export interface GetPropertyAndReferenceNamesResult {
  /**
   * An array of all properties and references for the specified object.
   */
  return?: string[];
}
