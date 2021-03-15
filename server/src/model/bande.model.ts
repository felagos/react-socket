import { v4 as uuid } from 'uuid';

export class Band {

    private id: string;
    private votes: number;
    private name: string;

    constructor(name: string) {
        this.name = name;
        this.id = uuid();
        this.votes = 0;
    }

    public get getId(): string {
        return this.id;
    }

    public set getId(id: string) {
        this.id = id;
    }

    public get getVotes(): number {
        return this.votes;
    }

    public set setVotes(votes: number) {
        this.votes = votes;
    }

    public get getName(): string {
        return this.name;
    }

    public set setName(name: string) {
        this.name = name;
    }
    

}