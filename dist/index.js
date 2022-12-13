import { Connection } from 'autobahn';
export function connect(host) {
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
    session;
    connection;
    constructor(session, connection) {
        this.session = session;
        this.connection = connection;
    }
    call(uri, args, opts) {
        return new Promise((resolve, reject) => {
            this.session.call(uri, [], args, opts).then((res) => resolve(res ? res.kwargs : null), (error) => reject(error));
        });
    }
    disconnect() {
        return new Promise((resolve, reject) => {
            if (this.session.isOpen) {
                this.session.onleave = () => resolve();
                this.connection.close();
            }
            else {
                reject();
            }
        });
    }
}
