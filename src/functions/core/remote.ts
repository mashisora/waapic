export interface IRemoteFunctions {
  'ak.wwise.core.remote.connect': {
    args: any;
    options: never;
    result: void;
  };
  'ak.wwise.core.remote.disconnect': {
    args: {};
    options: never;
    result: void;
  };
  'ak.wwise.core.remote.getAvailableConsoles': {
    args: {};
    options: never;
    result: any;
  };
  'ak.wwise.core.remote.getConnectionStatus': {
    args: {};
    options: never;
    result: any;
  };
}
namespace Connect {}
namespace Disconnect {}
namespace GetAvailableConsoles {}
namespace GetConnectionStatus {}
