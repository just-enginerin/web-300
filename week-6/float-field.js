/**
  Title: float-field.js
  Author: Erin Brady
  Date: 2/10/2023
  Description: Future Value App: Float field validation logic
*/

"use strict"

export default class FloatField {
    constructor(name, field) {
        this.name = name
        this.field = field
    }

    // Determines whether the user input is a float.
    validate = () => !isNaN(parseFloat(this.field))

    // Dynamic error message
    getMessage = () => `${this.name} must be a float value. You entered ${this.field}.`
}
