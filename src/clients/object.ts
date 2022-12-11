import { Session } from 'autobahn';
import {
  Copy,
  Create,
  Delete,
  Diff,
  Get,
  GetAttenuationCurve,
  GetPropertyAndReferenceNames,
  IsPropertyEnabled,
  Move,
  PasteProperties,
  Set,
  SetAttenuationCurve,
  SetName,
  SetNotes,
  SetProperty,
  SetRandomizer,
  SetReference,
} from '../types/object';

export class ObjectClient {
  private session: Session;

  constructor(session: Session) {
    this.session = session;
  }

  copy = async (args: Copy.Arguments): Promise<Copy.Result> => {
    return this.session
      .call('ak.wwise.core.object.copy', [], args)
      .then((res) => (res ? (<any>res).kwargs : null));
  };
}
