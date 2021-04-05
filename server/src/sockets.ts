import ioserver from 'socket.io';
import { SOCKET_EVENTS } from './enums';
import { BandList } from './model/band-list.model';
import { Band } from './model/bande.model';

export class Sockets {

    constructor(private io: ioserver.Server, private _bandList: BandList) {
        this.socketEvents();
    }

    private emitAllClients() {
        this.io.emit(SOCKET_EVENTS.CURRENT_BANDS, this._bandList.bands);
    }

    private socketEvents() {
        this.io.on("connection", (socket) => {
            console.log("cliente conectado");

            socket.emit(SOCKET_EVENTS.CURRENT_BANDS, this._bandList.bands);

            socket.on(SOCKET_EVENTS.VOTE_BAND, (id: string) => {
                this._bandList.increaseVote(id);
                this.emitAllClients();
            });

            socket.on(SOCKET_EVENTS.DELETE_BAND, (id: string) => {
                this._bandList.remove(id);
                this.emitAllClients();
            });

            socket.on(SOCKET_EVENTS.ADD_BAND, (bandName: string) => {
                this._bandList.addBand(new Band(bandName));
                this.emitAllClients();
            });

            socket.on(SOCKET_EVENTS.CHAGE_NAME, (band: Band) => {
                this._bandList.changeName(band.id, band.name);
                this.emitAllClients();
            });

        });
    }

}