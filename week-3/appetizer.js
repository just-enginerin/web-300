import { Product } from "./product.js"

// Initializes the schema for a new type of product: appetizers.
export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price)
    }
}
