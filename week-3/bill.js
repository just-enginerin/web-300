export class Bill {
    constructor() {
        //Types of products that can be included in the bill.
        this._beverages = []
        this._appetizers = []
        this._mainCourses = []
        this._desserts = []
    }

    // Functions to add new products to their respective types.
    addBeverage = (beverage) => this._beverages.push(beverage)
    addAppetizer = (appetizer) => this._appetizers.push(appetizer)
    addMainCourse = (mainCourse) => this._mainCourses.push(mainCourse)
    addDessert = (dessert) => this._desserts.push(dessert)

    /**
     * @returns {float} the total price of all items within the bill.
     */
    getTotal = () => {
        let total = 0

        // Iterates through each type of product and adds its price to the total.
        this._beverages.forEach(beverage => total += parseFloat(beverage.price))
        this._appetizers.forEach(appetizer => total += parseFloat(appetizer.price))
        this._mainCourses.forEach(mainCourse => total += parseFloat(mainCourse.price))
        this._desserts.forEach(dessert => total += parseFloat(dessert.price))

        return total.toFixed(2)
    }
}
