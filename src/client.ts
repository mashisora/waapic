import { Session, Connection } from 'autobahn';
import { Import } from './types/audio';
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
} from './types/object';
import { Create as CreateTrans, ExecuteAction } from './types/transport';

export function connect(host: string): Promise<Client> {
  return new Promise((resolve, reject) => {
    var connection = new Connection({
      url: host,
      realm: 'realm1',
      protocols: ['wamp.2.json'],
    });

    connection.onclose = (reason, details) => {
      reject(new Error(`Session closed: ${reason} ${details}`));
      return true;
    };

    connection.onopen = (session) => resolve(new Client(session, connection));

    connection.open();
  });
}

interface Object {
  call(uri: 'ak.wwise.core.object.copy', args: Copy.Arguments): Promise<Copy.Result>;
  call(uri: 'ak.wwise.core.object.create', args: Create.Arguments): Promise<Create.Result>;
  call(uri: 'ak.wwise.core.object.delete', args: Delete.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.diff', args: Diff.Arguments): Promise<Diff.Result>;
  call(uri: 'ak.wwise.core.object.get', args: Get.Arguments, opts: Get.Options): Promise<Get.Result>;
  call(uri: 'ak.wwise.core.object.getAttenuationCurve', args: GetAttenuationCurve.Arguments): Promise<GetAttenuationCurve.Result>;
  call(uri: 'ak.wwise.core.object.getPropertyAndReferenceNames', args: GetPropertyAndReferenceNames.Arguments): Promise<GetPropertyAndReferenceNames.Result>;
  call(uri: 'ak.wwise.core.object.getPropertyInfo', args: Get.Arguments): Promise<Copy.Result>;
  call(uri: 'ak.wwise.core.object.getPropertyNames', args: Get.Arguments): Promise<Copy.Result>;
  call(uri: 'ak.wwise.core.object.getTypes', args: Copy.Arguments): Promise<Copy.Result>;
  call(uri: 'ak.wwise.core.object.isPropertyEnabled', args: IsPropertyEnabled.Arguments): Promise<IsPropertyEnabled.Result>;
  call(uri: 'ak.wwise.core.object.move', args: Move.Arguments): Promise<Move.Result>;
  call(uri: 'ak.wwise.core.object.pasteProperties', args: PasteProperties.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.set', args: Set.Arguments): Promise<Set.Result>;
  call(uri: 'ak.wwise.core.object.setAttenuationCurve', args: SetAttenuationCurve.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.setName', args: SetName.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.setNotes', args: SetNotes.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.setProperty', args: SetProperty.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.setRandomizer', args: SetRandomizer.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.setReference', args: SetReference.Arguments): Promise<void>;
  call(uri: string, args?: any, opts?: any): Promise<any>;
}

interface Ui {}

class Client implements Object, Ui {
  session: Session;
  connection: Connection;

  constructor(session: Session, connection: Connection) {
    this.session = session;
    this.connection = connection;
  }

  call(uri: 'ak.wwise.core.object.copy', args: Copy.Arguments): Promise<Copy.Result>;
  call(uri: 'ak.wwise.core.object.create', args: Create.Arguments): Promise<Create.Result>;
  call(uri: 'ak.wwise.core.object.delete', args: Delete.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.diff', args: Diff.Arguments): Promise<Diff.Result>;
  call(uri: 'ak.wwise.core.object.get', args: Get.Arguments, opts: Get.Options): Promise<Get.Result>;
  call(uri: 'ak.wwise.core.object.getAttenuationCurve', args: GetAttenuationCurve.Arguments): Promise<GetAttenuationCurve.Result>;
  call(uri: 'ak.wwise.core.object.getPropertyAndReferenceNames', args: GetPropertyAndReferenceNames.Arguments): Promise<GetPropertyAndReferenceNames.Result>;
  call(uri: 'ak.wwise.core.object.getPropertyInfo', args: Get.Arguments): Promise<Copy.Result>;
  call(uri: 'ak.wwise.core.object.getPropertyNames', args: Get.Arguments): Promise<Copy.Result>;
  call(uri: 'ak.wwise.core.object.getTypes', args: Copy.Arguments): Promise<Copy.Result>;
  call(uri: 'ak.wwise.core.object.isPropertyEnabled', args: IsPropertyEnabled.Arguments): Promise<IsPropertyEnabled.Result>;
  call(uri: 'ak.wwise.core.object.move', args: Move.Arguments): Promise<Move.Result>;
  call(uri: 'ak.wwise.core.object.pasteProperties', args: PasteProperties.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.set', args: Set.Arguments): Promise<Set.Result>;
  call(uri: 'ak.wwise.core.object.setAttenuationCurve', args: SetAttenuationCurve.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.setName', args: SetName.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.setNotes', args: SetNotes.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.setProperty', args: SetProperty.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.setRandomizer', args: SetRandomizer.Arguments): Promise<void>;
  call(uri: 'ak.wwise.core.object.setReference', args: SetReference.Arguments): Promise<void>;

  call(uri: string, args?: any, opts?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.session.call(uri, [], args, opts).then(
        (res) => resolve(res ? (<any>res).kwargs : null),
        (error) => reject(error)
      );
    });
  }

  disconnect(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.session.isOpen) {
        this.session.onleave = () => resolve();
        this.connection.close();
      } else {
        reject();
      }
    });
  }
}
