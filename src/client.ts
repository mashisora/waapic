import { Session, Connection } from 'autobahn';
import {
  CopyObject,
  DiffObject,
  GetObject,
  Set,
  SetRandomizer,
} from './types/object';

export class Client {
  session: Session;
  connection: Connection;

  constructor(session: Session, connection: Connection) {
    this.session = session;
    this.connection = connection;
  }

  /** call a function using wamp RPC */
  call(uri: string, args?: any, options?: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.session.call(uri, [], args, options).then(
        (res) => resolve(res ? (<any>res).kwargs : null),
        (err) => reject(err)
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

export function connect(host: string): Promise<WaapiClient> {
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

    connection.onopen = (session) =>
      resolve(new WaapiClient(session, connection));
    connection.open();
  });
}

export class WaapiClient extends Client {
  getObjects = async (
    args: GetObject.Arguments,
    opts: GetObject.Options
  ): Promise<GetObject.Result> =>
    await this.call('ak.wwise.core.object.get', args, opts);

  copyObject = async (args: CopyObject.Arguments): Promise<CopyObject.Result> =>
    await this.call('ak.wwise.core.object.copy', args);

  diffObject = async (args: DiffObject.Arguments): Promise<DiffObject.Result> =>
    await this.call('ak.wwise.core.object.diff', args);

  setObject = async (args: Set.Arguments): Promise<Set.Result> =>
    await this.call('ak.wwise.core.object.set', args);

  setRandomizer = async (args: SetRandomizer.Arguments): Promise<void> =>
    await this.call('ak.wwise.core.object.setRandomizer', args);
}
