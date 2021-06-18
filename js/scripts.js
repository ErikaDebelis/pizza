// Utility Logic





// Business Logic for objects
function CreatePizza () {
  let pizza = {
    size: "",
    toppings: "",
    cost: 13
  };

  return pizza;
  //this.currentID = 0; //needed? i think so- need to keep track of pizzas 'added to cart'
}
function Pizza (pizza, size, toppings) {
  Size(pizza,size) 
  Toppings(pizza, toppings)
  var finalPizza = Cost(pizza)

  return finalPizza;
}

function Size (pizza, size) {
  pizza.size= size;
}
function Toppings (pizza, toppings) {
  pizza.toppings= toppings;
}

function Cost (pizza) {
  if (pizza.size ==="small") {
    pizza.cost = pizza.cost - 3;
  }
  if (pizza.size ==="large") {
    pizza.cost = pizza.cost + 4;
  }
  if (pizza.toppings === "meatlovers") {
    pizza.cost = pizza.cost + 5;
  }
  if (pizza.toppings === "veggie") {
    pizza.cost = pizza.cost + 2;
  }
  return pizza;
}

//Business logic for pizza
// PizzaPlanet.prototype.addPizza = function (pizza) {
//   pizza.id = this.assignPizzaId();
//   this.pizzas[pizza.id] = pizza;
// }
// PizzaPlanet.prototype.assignPizzaId = function () {
//   this.currentID += 1;
//   return this.currentID;
// }
// PizzaPlanet.prototype.customizePizza = function () {
//   this.totalCost= 0;
//     if (chosenSize ==="small") {
//       return this.totalCost = this.cost - 3;
//     }
//     if (chosenSize ==="large") {
//       return this.totalCost = this.cost + 4;
//     }
//     if (chosenToppings === "meatlovers") {
//       return this.totalCost === this.cost + 5;
//     }
//     if (chosenToppings === "veggie") {
//       return this.totalCost === this.cost + 2;
//     }
// }




// UI Logic
let pizzaObject = CreatePizza(); // created our pizza object

//got the values from our user
let chosenSize = $("input:radio[name=size]:checked").val();
let chosenToppings = $("#toppings").val();

//passing in our object and user values to manipulate them 
let pizza = new Pizza(pizzaObject, chosenSize, chosenToppings);


// let newPizza = new Pizza(pizza.chosenSize, pizza.chosenToppings, totalCost);console.log(pizza);

$(document).ready(function() {
  $("#pizza-input").click(function(event) {
   let pizzaObject = CreatePizza(); // created our pizza object
//got the values from our user
  let chosenSize = $("input:radio[name=size]:checked").val();
  let chosenToppings = $("#toppings").val();

//passing in our object and user values to manipulate them 
  let pizza = new Pizza(pizzaObject, chosenSize, chosenToppings);
  event.preventDefault();
  console.log(pizza);
  // newPizza.customizePizza();
  // PizzaPlanet.addPizza(newPizza);
  // $("#size").text(pizza.chosenSize);
  // $("#toppings").text(pizza.chosenToppings);
  // $("#cost").text(newPizza.totalCost);
  });
});