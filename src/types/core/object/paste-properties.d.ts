export interface MySchema {
  /**
   * The ID (GUID), name, or path of the source object.
   */
  source: string;
  /**
   * Array of target objects to paste into.
   */
  targets: (string | string | string)[];
  /**
   * Paste mode for lists. Default value is "replaceEntire". With "replaceEntire" all elements in the lists of a target object are removed and all selected elements from the source's lists are copied. Conversely, with "addReplace" and "addKeep" elements in a target which are not in the source are not removed. Elements in the source's list which are not in a target's list are added to the target. For elements which are common to the source and a target "addReplace" will copy the one from the source, replacing the target's element, whereas "addKeep" will retain the element in the target.
   */
  pasteMode?: 'replaceEntire' | 'addReplace' | 'addKeep';
  /**
   * Array of properties, references and lists to include in the paste operation. When not specified, all properties, references and lists are included, and the exclusion defines which ones to exclude
   */
  inclusion?: string[];
  /**
   * Array of properties, references and lists to exclude from the paste operation. When not specified, no properties, references and lists are excluded.
   */
  exclusion?: string[];
}
