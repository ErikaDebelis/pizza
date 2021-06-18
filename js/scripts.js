// Utility Logic





// Business Logic for objects
function PizzaPlanet () {
  this.pizza = {};
  this.currentID = 0; //needed? i think so- need to keep track of pizzas 'added to cart'
}
function Pizza (size, toppings) {
  this.chosenSize= size;
  this.chosenToppings= toppings;
}
//Business logic for pizza
PizzaPlanet.prototype.addPizza = function (pizza) {
  pizza.id = this.assignPizzaId();
  this.pizzas[pizza.id] = pizza;
}












// UI Logic




$(document).ready(function() {