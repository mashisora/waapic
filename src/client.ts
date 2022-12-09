import { Session, Connection } from 'autobahn';
import { Copy, Get } from './types/core/object';
import { Options } from './types/shared';

import { IObject } from './types/shared/object';

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
    args: Get.Arguments,
    opts: Options
  ): Promise<Get.Result> =>
    await this.call('ak.wwise.core.object.get', args, opts);

  copyObject = async (args: Copy.Arguments): Promise<Copy.Result> =>
    await this.call('ak.wwise.core.object.copy', args);
}
