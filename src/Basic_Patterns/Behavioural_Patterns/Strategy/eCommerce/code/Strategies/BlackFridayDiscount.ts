import {
    DiscountStrategy
} from "src/Basic_Patterns/Behavioural_Patterns/Strategy/eCommerce/code/Strategies/DiscountStrategy";

/** Concrete Strategy */
class BlackFridayDiscount implements DiscountStrategy {
    public applyDiscount(amount: number): number {
        return amount * 0.5; // 50% discount
    }
}

export {BlackFridayDiscount};