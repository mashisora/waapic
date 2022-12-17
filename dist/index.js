import { Connection } from 'autobahn';
export function connect(host) {
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
    session;
    connection;
    constructor(session, connection) {
        this.session = session;
        this.connection = connection;
    }
    call(uri, args, options) {
        return new Promise((resolve, reject) => {
            this.session.call(uri, [], args, options).then((res) => resolve(res ? res.kwargs : null), (error) => reject(error));
        });
    }
    subscribe(uri, handler, options) {
        const handlerImpl = (_args, kwargs) => handler(kwargs);
        return new Promise((resolve, reject) => {
            this.session.subscribe(uri, handlerImpl, options).then((res) => resolve(res), (err) => reject(err));
        });
    }
    unsubscribe(subscription) {
        return new Promise((resolve, reject) => {
            this.session.unsubscribe(subscription).then((res) => resolve(res), (err) => reject(err));
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
