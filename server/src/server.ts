import express from 'express';
import http from 'http';
import ioserver from 'socket.io';
import cors from 'cors';
import { Sockets } from './sockets';

export class Server {

    private readonly PORT = 3001;
    private app = express();
    private server = new http.Server(this.app);
    private io = new ioserver.Server(this.server);

    constructor() { }

    public initServer() {
        this.middlewares();
        this.configSockets();

        this.server.listen(this.PORT, () => {
            console.log(`server up  port ${this.PORT}!`);
        });
    }

    private configSockets() {
        new Sockets(this.io);
    }

    private middlewares() {
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(cors());
    }
}