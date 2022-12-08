export interface MoveArguments {
  /**
   * The ID (GUID), name, or path of the object to be moved.
   */
  object: string;
  /**
   * The ID (GUID), name, or path of the object's new parent.
   */
  parent: string;
  /**
   * The action to take if "parent" already has a child with the same name. Default value is "fail".
   */
  onNameConflict?: 'rename' | 'replace' | 'fail';
}
