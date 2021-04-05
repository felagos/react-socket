import { v4 as uuid } from 'uuid';

export class Band {

    public id: string;
    public votes: number;
    public name: string;

    constructor(name: string) {
        this.name = name;
        this.id = uuid();
        this.votes = 0;
    }

}