import { IObject, IOptions } from '../shared';
export interface ISwitchTopics {
    'ak.wwise.core.switchContainer.assignmentAdded': {
        publish: AssignmentAdded.Publish;
        options: AssignmentAdded.Options;
    };
    'ak.wwise.core.switchContainer.assignmentRemoved': {
        publish: AssignmentRemoved.Publish;
        options: AssignmentRemoved.Options;
    };
}
declare namespace AssignmentAdded {
    interface Publish {
        /** The Switch Container to which the assignment was added. */
        switchContainer: IObject;
        /** The child object that was assigned. */
        child: IObject;
        /** The State or Switch to which the child object was assigned. */
        stateOrSwitch: IObject;
    }
    interface Options extends IOptions {
    }
}
declare namespace AssignmentRemoved {
    interface Publish {
        /** The Switch Container which had the assignment removed. */
        switchContainer: IObject;
        /** The child object that was assigned. */
        child: IObject;
        /** The State or Switch to which the child object was assigned. */
        stateOrSwitch: IObject;
    }
    interface Options extends IOptions {
    }
}
export {};
