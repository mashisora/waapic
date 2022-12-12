import { Session, Connection } from 'autobahn';
import { ICallAudio } from './types/functions/audio';
import { ICallCore } from './types/functions/core';

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

interface ICallFuntion extends ICallAudio, ICallCore {}

class Client {
  session: Session;
  connection: Connection;

  constructor(session: Session, connection: Connection) {
    this.session = session;
    this.connection = connection;
  }

  call<U extends keyof ICallFuntion, T extends ICallFuntion[U]>(
    uri: U,
    args: T['args'],
    opts: T['opts']
  ): Promise<T['result']> {
    return new Promise((resolve, reject) => {
      this.session.call(uri, [], args, <any>opts).then(
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
