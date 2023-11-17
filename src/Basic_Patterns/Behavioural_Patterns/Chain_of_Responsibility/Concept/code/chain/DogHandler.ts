import {
    AbstractHandler
} from "src/Basic_Patterns/Behavioural_Patterns/Chain_of_Responsibility/Concept/code/chain/AbstractHandler";

/** Concrete Handler */
class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'MeatBall') {
            return `Dog: I'll eat the ${request}`;
        }

        return super.handle(request);
    }
}

export { DogHandler };