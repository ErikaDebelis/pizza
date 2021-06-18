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
PizzaPlanet.prototype.assignPizzaId = function () {
  this.currentID += 1;
  return this.currentID;
}
PizzaPlanet.prototype.customizePizza = function () {
  this.cost = 13;
  if (chosenSize ==="small") {
    this.cost -= 3;
  }
  if (chosenSize ==="large") {
    this.cost += 4;
  }
  if (chosenToppings === "meatlovers") {
    this.cost += 5;
  }
  if (chosenToppings === "veggie") {
    this.cost += 2;
  }
};




// UI Logic




$(document).ready(function() {