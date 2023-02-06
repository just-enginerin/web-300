/**
  Title: cart-component.js
  Author: Erin Brady
  Date: 2/5/2023
  Description: Bob's Auto Repair App: Cart Component Element
*/

class CartComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
            <i id="cartIcon" class="fa fa-shopping-cart"></i>(<span id="cart-count"></span>)
        `
    }
    
}

customElements.define("cart-component", CartComponent)
