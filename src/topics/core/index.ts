import { IAudioTopics } from './audio';
import { IObjectTopics } from './object';
import { IProfilerTopics } from './profiler';
import { IProjectTopics } from './project';
import { ISoundbankTopics } from './soundbank';
import { ISwitchTopics } from './switch';
import { ITransportTopics } from './transport';

export interface ICoreTopics
  extends IAudioTopics,
    IObjectTopics,
    IProfilerTopics,
    IProjectTopics,
    ISoundbankTopics,
    ISwitchTopics,
    ITransportTopics {}
