import { IAudioFunctions } from './audio';
import { IMiscFunctions } from './misc';
import { IObjectFunctions } from './object';
import { IProfilerFunctions } from './profiler';
import { IProjectFunctions } from './project';
import { IRemoteFunctions } from './remote';
import { ISoundbankFunctions } from './soundbank';
import { ISwitchFunctions } from './switch';
import { ITransportFunctions } from './transport';
import { IUIFunctions } from './ui';
import { IUndoFunctions } from './undo';
export interface IFunctions extends IAudioFunctions, IMiscFunctions, IObjectFunctions, IProfilerFunctions, IProjectFunctions, IRemoteFunctions, ISoundbankFunctions, ISwitchFunctions, ITransportFunctions, IUIFunctions, IUndoFunctions {
}
