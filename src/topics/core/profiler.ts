export interface IProfilerTopics {
  'ak.wwise.core.profiler.gameObjectRegistered': {
    publish: any;
    options: any;
  };
  'ak.wwise.core.profiler.gameObjectReset': {
    publish: any;
    options: any;
  };
  'ak.wwise.core.profiler.gameObjectUnregistered': {
    publish: any;
    options: any;
  };
  'ak.wwise.core.profiler.stateChanged': {
    publish: any;
    options: any;
  };
  'ak.wwise.core.profiler.switchChanged': {
    publish: any;
    options: any;
  };
}

namespace GameObjectRegistered {}
namespace GameObjectReset {}
namespace GameObjectUnregistered {}
namespace StateChanged {}
namespace SwitchChanged {}
