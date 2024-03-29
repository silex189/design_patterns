import {Process} from "src/Basic_Patterns/Structural_Patterns/Decorator/Logger/code/components/Process";

class StandardProcess implements Process {
    public execute() {
        console.log('Executing process...');
    }
}

export { StandardProcess };