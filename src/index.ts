import { Session, Connection, SubscribeHandler, Subscription } from 'autobahn';
import { IFunctions } from './functions';
import { ITopics } from './topics';

export function connect(host: string): Promise<Client> {
  return new Promise((resolve, reject) => {
    var connection = new Connection({
      url: host,
      realm: 'realm1',
      protocols: ['wamp.2.json'],
    });

    connection.onclose = (reason) => {
      reject(new Error(`Session closed: ${reason}`));
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
    options?: IFunctions[K]['options']
  ): Promise<IFunctions[K]['result']> {
    return new Promise((resolve, reject) => {
      this.session.call(uri, [], args, <any>options).then(
        (res) => resolve(res ? (<any>res).kwargs : null),
        (error) => reject(error)
      );
    });
  }

  subscribe<K extends keyof ITopics>(
    uri: K,
    handler: (publish: ITopics[K]['publish']) => void,
    options?: ITopics[K]['options']
  ): Promise<Subscription> {
    const handlerImpl: SubscribeHandler = (_args, kwargs) => handler(kwargs);
    return new Promise((resolve, reject) => {
      this.session.subscribe(uri, handlerImpl, <any>options).then(
        (res) => resolve(<any>res),
        (err) => reject(err)
      );
    });
  }

  unsubscribe(subscription: Subscription): Promise<any> {
    return new Promise((resolve, reject) => {
      this.session.unsubscribe(subscription).then(
        (res) => resolve(res),
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
