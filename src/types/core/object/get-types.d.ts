export interface GetTypesResult {
  /**
   * An array of all Wwise object types.
   */
  return?: {
    /**
     * The ID (class ID) of the object.\n Unsigned Integer 32-bit.
     */
    classId?: number;
    /**
     * The name of the object.
     */
    name?: string;
    /**
     * The type of the object. Refer to \ref wobjects_index for more information on the types available.
     */
    type?: string;
  }[];
}
