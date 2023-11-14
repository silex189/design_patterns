import {DataSource} from "src/Basic_Patterns/Structural_Patterns/Decorator/Notifier/code/DataSource";

class SalaryManager {
    constructor(private source: DataSource) {}

    public load(): string {
        return this.source.readData();
    }

    public save(data: string): void {
        this.source.writeData(data);
    }
}

export { SalaryManager };