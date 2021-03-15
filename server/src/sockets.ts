import ioserver from 'socket.io';
import { SOCKET_EVENTS } from './enums';
import { BandList } from './model/band-list.model';

export class Sockets {

    constructor(private io: ioserver.Server, private _bandList: BandList) {
        this.socketEvents();
    }

    private socketEvents() {
        this.io.on("connection", (socket) => {
            console.log("cliente conectado");
            console.log(this._bandList.bands)

            socket.emit(SOCKET_EVENTS.CURRENT_BANDS, this._bandList.bands);

        });
    }

}