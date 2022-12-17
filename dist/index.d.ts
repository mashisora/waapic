import { Session, Connection, ISubscription } from 'autobahn';
import { IFunctions } from './functions';
import ITopics from './topics';
export declare function connect(host: string): Promise<Client>;
export declare class Client {
    private session;
    private connection;
    constructor(session: Session, connection: Connection);
    call<K extends keyof IFunctions>(uri: K, args: IFunctions[K]['args'], opts?: IFunctions[K]['opts']): Promise<IFunctions[K]['result']>;
    subscribe<K extends keyof ITopics>(uri: K, handler: (publish: ITopics[K]['publish']) => void, options: ITopics[K]['options']): Promise<ISubscription>;
    unsubscribe(subscription: ISubscription): Promise<any>;
    disconnect(): Promise<void>;
}
