/**
  Title: float-max-field.js
  Author: Erin Brady
  Date: 2/10/2023
  Description: Future Value App: Float Max field validation logic
*/

"use strict"

export default class FloatMaxField {
    constructor(name, field, max) {
        this.name = name
        this.field = field
        this.max = max
    }

    // Determines whether the user input value is less than the maximum value.
    validate = () => this.field < this.max

    // Dynamic error message
    getMessage = () => `${this.name} must be less than ${this.max}. You entered ${this.field}.`
}
