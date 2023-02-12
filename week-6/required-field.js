/**
  Title: required-field.js
  Author: Erin Brady
  Date: 2/10/2023
  Description: Future Value App: Required Field validation logic
*/

"use strict"

export default class RequiredField {
    constructor(name, field) {
        this.name = name
        this.field = field
    }

    // Determines whether the user input a value for this field.
    validate = () => typeof this.field === "string"

    // Dynamic error message
    getMessage = () => `${this.name} is a required field.`
}
