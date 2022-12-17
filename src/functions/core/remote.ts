export interface IRemoteFunctions {
  'ak.wwise.core.remote.connect': {
    args: any;
    opts: never;
    result: void;
  };
  'ak.wwise.core.remote.disconnect': {
    args: {};
    opts: never;
    result: void;
  };
  'ak.wwise.core.remote.getAvailableConsoles': {
    args: {};
    opts: never;
    result: any;
  };
  'ak.wwise.core.remote.getConnectionStatus': {
    args: {};
    opts: never;
    result: any;
  };
}
namespace Connect {}
namespace Disconnect {}
namespace GetAvailableConsoles {}
namespace GetConnectionStatus {}
