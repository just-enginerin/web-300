/**
  Title: finance-calculator.js
  Author: Erin Brady
  Date: 2/10/2023
  Description: Future Value App: Finance Calculator
*/

"use strict"

export default class FinanceCalculator {

    static MONTHS_IN_YEAR = 12

    /**
     * @param {float} monthlyPayment - user input value for the payment they intend to make monthly. 
     * @param {float} rate - user input value for their yearly interest rate.
     * @param {number} years - user selected value for the number of years they intend to pay. 
     * @returns the calculated future value, rounded to 2 decimal places.
     */
    static calculateFutureValue = (monthlyPayment, rate, years) => {

        let months = this.MONTHS_IN_YEAR * years
        let interestRate = 1 + (rate / 100)
        let presentValue = monthlyPayment * months
        let futureValue = presentValue * (Math.pow(interestRate, months))

        return futureValue.toFixed(2)
    }

    /**
     * @param {float} field - number to be converted.
     * @returns a number converted into US currency format.
     */
    static convertToCurrency = field => {
        let currencyFormatter = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        })

        return currencyFormatter.format(field)
    }
}
