export interface IsPropertyEnabledArguments {
  /**
   * The ID (GUID), name, or path of the object to check.
   */
  object: string;
  /**
   * The ID (GUID) or unique name of the platform to link the reference. Set to null-guid for unlinked reference.
   */
  platform: string;
  /**
   * The name of the property. For more information, refer to the property list of Wwise Objects listed in \ref wobjects_index .\n A property name. Refer to \ref wobjects_index for information about the Wwise objects and their properties.
   */
  property: string;
}

export interface IsPropertyEnabledResult {
  /**
   * Indicates if the property is enabled.
   */
  return?: boolean;
}
