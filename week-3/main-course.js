import { Product } from "./product.js"

// Initializes the schema for a new type of product: main courses.
export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price)
    }
}
