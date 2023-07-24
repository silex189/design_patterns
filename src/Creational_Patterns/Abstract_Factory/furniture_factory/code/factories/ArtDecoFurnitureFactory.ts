import {AbstractFactory} from "./AbstractFactory";
import {Sofa} from "../interfaces/Sofa";
import {ArtDecoSofa} from "../products/sofas/ArtDecoSofa";
import {Chair} from "../interfaces/Chair";
import {ArtDecoChair} from "../products/chairs/ArtDecoChair";
import {CoffeTable} from "../interfaces/CoffeTable";
import {ArtDecoCoffeeTable} from "../products/coffee_tables/ArtDecoCoffeeTable";

class ArtDecoFurnitureFactory implements AbstractFactory {
    public createChair(): Chair {
        return new ArtDecoChair();
    }

    public createSofa(): Sofa {
        return new ArtDecoSofa();
    }

    public createCoffeTable(): CoffeTable {
        return new ArtDecoCoffeeTable();
    }
}

export { ArtDecoFurnitureFactory };