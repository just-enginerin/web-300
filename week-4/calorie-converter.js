/**
  Title: calorie-converter.js
  Author: Erin Brady
  Date: 1/29/2023
  Description: Calorie App: Calorie Converter
*/

import FoodModel from "./food-model";

export default class CalorieConverter {
    static data = [
        new FoodModel(1007, "Egg", 78),
        new FoodModel(1008, "Apple", 95),
        new FoodModel(1009, "Hamburger", 354),
        new FoodModel(1010, "Fries", 400),
        new FoodModel(1011, "Banana", 105),
        new FoodModel(1012, "Soda", 150)
    ]

    static find = stringToFind => this.data.find(foodItem => foodItem.name.toLowerCase().includes(stringToFind.toLowerCase()))
}
