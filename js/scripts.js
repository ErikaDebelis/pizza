// Utility Logic





// Business Logic for objects
function PizzaPlanet () {
  this.pizza = {};
  this.currentID = 0; //needed? i think so- need to keep track of pizzas 'added to cart'
}
function Pizza (size, toppings, totalCost) {
  this.chosenSize= size;
  this.chosenToppings= toppings;
  this.totalCost= 0;
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
    this.totalCost === this.cost - 3;
  }
  if (chosenSize ==="large") {
    this.totalCost === this.cost + 4;
  }
  if (chosenToppings === "meatlovers") {
    this.totalCost === this.cost + 5;
  }
  if (chosenToppings === "veggie") {
    this.totalCost === this.cost + 2;
  }
};




// UI Logic
let pizza = new Pizza();

pizza.chosenSize = $("input:radio[name=size]:checked").val();
pizza.chosenToppings = $("#toppings").val();
let newPizza = new Pizza(pizza.chosenSize, pizza.chosenToppings);
console.log(pizza.chosenSize);

$(document).ready(function() {
  $("#pizza-input").submit(function(event) {
  event.preventDefault();
  newPizza.customizePizza();
  PizzaPlanet.addPizza(newPizza);
  }
});