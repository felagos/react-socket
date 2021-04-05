import { Band } from "./bande.model";

export class BandList {

    private _bands: Band[] = [];

    constructor() {
        this._bands.push(
            new Band("Gojira"),
            new Band("Metallica"),
            new Band("Dream Theater"),
            new Band("Pantera")
        );
    }

    public addBand(band: Band) {
        this._bands.push(band);
    }

    public remove(id: string) {
        this._bands = this._bands.filter(band => band.id !== id);
    }

    public increaseVote(id: string) {
        this._bands = this._bands.map(band => {
            if (band.id === id) band.votes = band.votes + 1;
            return band;
        });
    }

    public changeName(id: string, name: string) {
        this._bands = this._bands.map(band => {
            if (band.id === id) band.name =name;
            return band;
        });
    }

    public get bands(): Band[] {
        return this._bands;
    }

}