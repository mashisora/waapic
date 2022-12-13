import { Session, Connection } from 'autobahn';
import { IFunctions } from './types/functions';
export declare function connect(host: string): Promise<Client>;
export declare class Client {
    session: Session;
    connection: Connection;
    constructor(session: Session, connection: Connection);
    call<K extends keyof IFunctions>(uri: K, args: IFunctions[K]['args'], opts?: IFunctions[K]['opts']): Promise<IFunctions[K]['result']>;
    disconnect(): Promise<void>;
}
