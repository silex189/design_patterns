import {IMemento} from "src/Basic_Patterns/Behavioural_Patterns/Memento/Interface_Concept/code/IMemento";

class ConcreteMemento implements IMemento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    }

    public getState(): string {
        return this.state;
    }

    public getName(): string {
        return `${this.date} / (${this.state.substring(0, 9)}...)`;
    }

    public getDate(): string {
        return this.date;
    }
}

export {ConcreteMemento};