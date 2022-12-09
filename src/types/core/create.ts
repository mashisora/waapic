export interface CreateArguments {
  /**
   * The ID (GUID), name, or path of the parent of the new object.
   */
  parent: string;
  /**
   * The name of the list in which to insert the object. If this argument is set, the object gets inserted in a list owned by the parent and not as a child.
   */
  list?: string;
  /**
   * The action to take if "parent" already has a child with the same name. Default value is "fail".
   */
  onNameConflict?: 'rename' | 'replace' | 'fail' | 'merge';
  /**
   * The ID (GUID) or unique name of the platform used when setting properties via this command. Not specifying a platform sets the value for all linked platforms.
   */
  platform?: string;
  /**
   * Determines if Wwise automatically performs an Add or Checkout source control operation for affected work units. Defaults to false.
   */
  autoAddToSourceControl?: boolean;
  /**
   * The type of the new object. Refer to \ref wobjects_index for possible object types.
   */
  type: string;
  /**
   * The name of the new object.
   */
  name: string;
  /**
   * The notes or comments of the new object.
   */
  notes?: string;
  /**
   * An array of child objects to be created.
   */
  children?: ChildrenArguments;
  /**
   * Sets the value of property @propertyName. The value of a property.
   */
  [k: string]: any;
}

export interface CreateResult {
  /**
   * The ID (GUID) of the newly created Object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
   */
  id: string;
  /**
   * The name of the newly created Object.
   */
  name: string;
  /**
   * The children of objects created.
   */
  children: ChildrenResult;
}

type ChildrenArguments = {
  /**
   * The type of the new object.
   */
  type: string;
  /**
   * The name of the new object.
   */
  name: string;
  /**
   * The notes or comments of the new object.
   */
  notes?: string;
  /**
   * An array of child objects to be created.
   */
  children?: ChildrenArguments;
  /**
   * Sets the value of property @propertyName. The value of a property.
   */
  [k: string]: any;
}[];

type ChildrenResult = {
  /**
   * The ID (GUID) of the newly created Object. An object GUID of the form: {aabbcc00-1122-3344-5566-77889900aabb}.
   */
  id: string;
  /**
   * The name of the newly created Object.
   */
  name: string;
  /**
   * The children of objects created.
   */
  children: ChildrenResult;
}[];
