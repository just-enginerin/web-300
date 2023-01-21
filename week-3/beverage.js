import { Product } from "./product.js"

// Initializes the schema for a new type of product: beverages.
export class Beverage extends Product {
    constructor(name, price) {
        super(name, price)
    }
}
