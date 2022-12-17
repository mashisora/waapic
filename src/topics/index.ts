import { IMiscTopics } from './misc';
import { IObjectTopics } from './object';
import { IProfilerTopics } from './profiler';
import { IProjectTopics } from './project';
import { ISoundbankTopics } from './soundbank';
import { ISwitchTopics } from './switch';
import { IUITopics } from './ui';

export interface ITopics
  extends IMiscTopics,
    IObjectTopics,
    IProfilerTopics,
    IProjectTopics,
    ISoundbankTopics,
    ISwitchTopics,
    IUITopics {}
