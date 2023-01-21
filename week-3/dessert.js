import { Product } from "./product.js"

// Initializes the schema for a new type of product: desserts.
export class Dessert extends Product {
    constructor(name, price) {
        super(name, price)
    }
}
