import { Session, Connection } from 'autobahn';
import { IFunctions } from './functions';

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

export class Client {
  private session: Session;
  private connection: Connection;

  constructor(session: Session, connection: Connection) {
    this.session = session;
    this.connection = connection;
  }

  call<K extends keyof IFunctions>(
    uri: K,
    args: IFunctions[K]['args'],
    opts?: IFunctions[K]['opts']
  ): Promise<IFunctions[K]['result']> {
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
