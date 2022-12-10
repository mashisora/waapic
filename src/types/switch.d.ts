export namespace AddAssignment {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object to assign to a State. This object must be the child of a Switch Container. */
    child: string;
    /** The ID (GUID), name, or path of the State or Switch with which to assign. Must be the child of the Switch Group or State Group that is currently set for the Switch Container. */
    stateOrSwitch: string;
  }
}

export namespace GetAssignments {
  export interface Arguments {
    /** The ID (GUID), name, or path of the Switch Container. */
    id: string;
  }
  export interface Result {
    /** List of assignments (pairs of child and state). */
    return: {
      /** The ID (GUID), name, or path of the child assigned to a State. */
      child: string;
      /** The ID (GUID), name, or path of the State or Switch to which the child is assigned. */
      stateOrSwitch: string;
    }[];
  }
}

export namespace RemoveAssignment {
  export interface Arguments {
    /** The ID (GUID), name, or path of the object assigned to a State. This object must be the child of a Switch Container and must be currently assigned to a State. */
    child: string;
    /** The ID (GUID), name, or path of the State or Switch to which the child is assigned. Must be the child of the Switch Group or State Group that is currently set for the Switch Container. */
    stateOrSwitch: string;
  }
}