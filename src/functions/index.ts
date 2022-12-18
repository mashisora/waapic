import { IAudioFunctions } from './audio';
import { IProjectFunctions } from './project';
import { IUIFunctions } from './ui';

export interface IFunctions extends IAudioFunctions, IProjectFunctions, IUIFunctions {}
