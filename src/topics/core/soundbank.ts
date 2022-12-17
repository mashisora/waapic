export interface ISoundbankTopics {
  'ak.wwise.core.soundbank.generated': {
    publish: any;
    options: any;
  };
  'ak.wwise.core.soundbank.generationDone': {
    publish: any;
    options: never;
  };
}

namespace Generated {}
namespace GenerationDone {}
