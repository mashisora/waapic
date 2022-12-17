export interface IProjectTopics {
  'ak.wwise.core.project.loaded': {
    publish: {};
    options: never;
  };
  'ak.wwise.core.project.postClosed': {
    publish: {};
    options: never;
  };
  'ak.wwise.core.project.preClosed': {
    publish: {};
    options: never;
  };
  'ak.wwise.core.project.saved': {
    publish: Saved.Publish;
    options: never;
  };
}

namespace Saved {
  export interface Publish {
    /** Array of paths. */
    modifiedPaths: string[];
  }
}
