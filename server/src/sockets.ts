import ioserver from 'socket.io';

export class Sockets {

    constructor(private io: ioserver.Server) {
        this.socketEvents();
    }

    private socketEvents() {
        this.io.on("connection", (socket) => {
        });
    }

}