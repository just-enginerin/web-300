/**
  Title: float-min-field.js
  Author: Erin Brady
  Date: 2/10/2023
  Description: Future Value App: Float Min field validation logic
*/

"use strict"

export default class FloatMinField {
  constructor(name, field, min) {
      this.name = name
      this.field = field
      this.min = min
  }

  // Determines whether the user input value is greater than the minimum value.
  validate = () => this.field > this.min

  // Dynamic error message
  getMessage = () => `${this.name} must be more than ${this.min}. You entered ${this.field}.`
}
