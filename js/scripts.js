// Utility Logic





// Business Logic for objects
function PizzaPlanet () {
  this.pizza = {};
  this.currentID = 0; //needed? i think so- need to keep track of pizzas 'added to cart'
}
function Pizza (size, toppings) {
  this.chosenSize= size;
  this.chosenToppings= toppings;
  this.cost= 13;
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
  this.totalCost= function() {
    if (chosenSize ==="small") {
      return this.totalCost === this.cost - 3;
    }
    if (chosenSize ==="large") {
      return this.totalCost === this.cost + 4;
    }
    if (chosenToppings === "meatlovers") {
      return this.totalCost === this.cost + 5;
    }
    if (chosenToppings === "veggie") {
      return this.totalCost === this.cost + 2;
    }
  }
};




// UI Logic
let pizza = new Pizza();

pizza.chosenSize = $("input:radio[name=size]:checked").val();
pizza.chosenToppings = $("#toppings").val();
let newPizza = new Pizza(pizza.chosenSize, pizza.chosenToppings, totalCost);
console.log(pizza.chosenSize);

$(document).ready(function() {
  $("#pizza-input").submit(function(event) {
  event.preventDefault();
  newPizza.customizePizza();
  PizzaPlanet.addPizza(newPizza);
  $("#size").text(pizza.chosenSize);
  $("#toppings").text(pizza.chosenToppings);
  $("#cost").text(newPizza.totalCost);
  });
});