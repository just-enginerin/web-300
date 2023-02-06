/**
  Title: shopping-cart.js
  Author: Erin Brady
  Date: 2/5/2023
  Description: Bob's Auto Repair App: Shopping Cart logic
*/

export default class ShoppingCart {
    constructor() {
        this.products = []
    }

    count = () => this.products.length
    add = product => this.products.push(product)

    productIterable = {
        *[Symbol.iterator]() {
            for (let product of this.products) {
                yield product
            }
        }
    }

    
}