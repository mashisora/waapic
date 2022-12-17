export interface ISwitchTopics {
  'ak.wwise.core.switchContainer.assignmentAdded': {
    publish: any;
    options: any;
  };
  'ak.wwise.core.switchContainer.assignmentRemoved': {
    publish: any;
    options: any;
  };
}

namespace AssignmentAdded {}
namespace AssignmentRemoved {}
