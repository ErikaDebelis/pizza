// Utility Logic





// Business Logic for objects
function Pizza (size, toppings) {
  this.pizza= {};
  this.chosenSize= size;
  this.chosenToppings= toppings;
  this.cost= 13;
}
// function Pizza (pizza, size, toppings) {
//   Size(pizza,size) 
//   Toppings(pizza, toppings)
//   const finalPizza = pizza.cost;

//   return finalPizza;
// }
const customPizza = new Pizza(this.pizza, this.chosenSize, this.chosenToppings);
function Size (pizza, size) {
  pizza.size= size;
}
function Toppings (pizza, toppings) {
  pizza.toppings= toppings;
}

// function Cost (pizza, pizzaCost) {
//   pizza.cost= pizzaCost
//   // pizza.cost = pizzaCost;
Pizza.prototype.finalCost = function () {
  if (pizza.size ==="small") {
    this.cost -= 3;
  }
  if (pizza.size ==="large") {
    pizza.cost += 4;
  }
  if (pizza.toppings === "meatlovers") {
    this.cost += 5;
  }
  if (pizza.toppings === "veggie") {
    this.cost += 2;
  }
  return this.cost;
}


// UI Logic
// let pizzaObject = Pizza(); // created our pizza object

//got the values from our user
let chosenSize = $("input:radio[name=size]:checked").val();
let chosenToppings = $("#toppings").val();

//passing in our object and user values to manipulate them 
let pizza = new Pizza(customPizza, chosenSize, chosenToppings);


// let newPizza = new Pizza(pizza.chosenSize, pizza.chosenToppings, totalCost);console.log(pizza);

$(document).ready(function() {
  $("#pizza-input").click(function(event) {
   let pizzaObject = Pizza(); // created our pizza object
//got the values from our user
  let chosenSize = $("input:radio[name=size]:checked").val();
  let chosenToppings = $("#toppings").val();

//passing in our object and user values to manipulate them 
  let pizza = new Pizza(pizzaObject, chosenSize, chosenToppings);
  event.preventDefault();

  $("#size").text(pizza.size);
  $("#toppings").text(pizza.toppings);
  $("#cost").text(pizza.cost);
  });
});



// function CreatePizza () {
//   let pizza = {
//     size: "",
//     toppings: "",
//     cost: 13
//   };

//   return pizza;

// function Cost (pizza) {
//   if (pizza.size ==="small") {
//     pizza.cost = pizza.cost - 3;
//   }
//   if (pizza.size ==="large") {
//     pizza.cost = pizza.cost + 4;
//   }
//   if (pizza.toppings === "meatlovers") {
//     pizza.cost = pizza.cost + 5;
//   }
//   if (pizza.toppings === "veggie") {
//     pizza.cost = pizza.cost + 2;
//   }
//   return pizza;