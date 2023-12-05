import {Shape} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/elements/Shape";
import {Visitor} from "src/Basic_Patterns/Behavioural_Patterns/Visitor/Geometric_Shapes/code/visitors/Visitor";

/** Concrete Element */
class CompoundShape implements Shape {
    move(x: number, y: number): void {
        // move shape
    }

    draw(): void {
        // draw shape
    }

    accept(visitor: Visitor): void {
        visitor.visitCompoundShape(this);
    }
}

export { CompoundShape };