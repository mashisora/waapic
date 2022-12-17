export interface IUITopics {
  'ak.wwise.ui.commands.executed': {
    publish: any;
    options: any;
  };
  'ak.wwise.ui.selectionChanged': {
    publish: any;
    options: any;
  };
}

namespace Executed {}
namespace SelectionChanged {}
