import { Session, Connection, Subscription } from 'autobahn';
import { IFunctions } from './functions';
import { ITopics } from './topics';
export declare function connect(host: string): Promise<Client>;
export declare class Client {
    private session;
    private connection;
    constructor(session: Session, connection: Connection);
    call<K extends keyof IFunctions>(uri: K, args: IFunctions[K]['args'], options?: IFunctions[K]['options']): Promise<IFunctions[K]['result']>;
    subscribe<K extends keyof ITopics>(uri: K, handler: (publish: ITopics[K]['publish']) => void, options?: ITopics[K]['options']): Promise<Subscription>;
    unsubscribe(subscription: Subscription): Promise<any>;
    disconnect(): Promise<void>;
}
