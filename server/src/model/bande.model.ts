import { v4 as uuid } from 'uuid';

export class Band {

    private _id: string;
    private _votes: number;
    private _name: string;

    constructor(_name: string) {
        this._name = _name;
        this._id = uuid();
        this._votes = 0;
    }

    public get id(): string {
        return this._id;
    }

    public set id(id: string) {
        this._id = id;
    }

    public get votes(): number {
        return this._votes;
    }

    public set votes(votes: number) {
        this._votes = votes;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }

}