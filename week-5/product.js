/**
  Title: product.js
  Author: Erin Brady
  Date: 2/5/2023
  Description: Bob's Auto Repair App: Product model
*/

export default class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
        this.id = Math.random().toString(16).slice(2)
    }

}
