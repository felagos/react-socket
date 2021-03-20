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
        this._bands = this._bands.filter(band => band.getId !== id);
    }

    public increaseVote(id: string) {
        this._bands = this._bands.map(band => {
            if (band.getId === id) band.setVotes = band.getVotes + 1;
            return band;
        });
    }

    public changeName(id: string, name: string) {
        this._bands = this._bands.map(band => {
            if (band.getId === id) band.setName = name;
            return band;
        });
    }

    public get bands(): Band[] {
        return this._bands;
    }

}