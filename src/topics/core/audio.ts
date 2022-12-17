import { IObject, IOptions } from '../../shared';

export interface IAudioTopics {
  'ak.wwise.core.audio.imported': {
    publish: Imported.Publish;
    options: Imported.Options;
  };
}

namespace Imported {
  export interface Publish {
    /** The list of objects that have been created as part of the same import operation. */
    objects: IObject[];
  }

  export interface Options extends IOptions {}
}
