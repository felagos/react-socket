import express from 'express';
import http from 'http';
import ioserver from 'socket.io';
import { ENV } from './environment';
import { Sockets } from './sockets';

export class Server {

    private readonly PORT = ENV.PORT;
    private app = express();
    private server = new http.Server(this.app);
    private io = new ioserver.Server(this.server);

    constructor() { }

    public initServer() {
        this.configSockets();

        this.server.listen(this.PORT, () => {
            console.log(`server up  port ${this.PORT}!`);
        });
    }

    private configSockets() {
        new Sockets(this.io);
    }

}