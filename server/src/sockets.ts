import ioserver from 'socket.io';

export class Sockets {

    constructor(private io: ioserver.Server) {
        this.socketEvents();
    }

    private socketEvents() {
        this.io.on("connection", (socket) => {

            socket.on("message-to-server", (data: any) => {
                this.io.emit("message-from-server", data);
            });

        });
    }

}