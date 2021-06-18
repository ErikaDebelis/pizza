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
  const finalPizza = Pizza.cost;

  return finalPizza;
}

function Size (pizza, size) {
  pizza.size= size;
}
function Toppings (pizza, toppings) {
  pizza.toppings= toppings;
}

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
// }
Pizza.prototype.cost = function () {
  let totalCost = 0
  if (pizza.size ==="small") {
    totalCost = pizza.cost - 3;
  }
  if (pizza.size ==="large") {
    totalCost = pizza.cost + 4;
  }
  if (pizza.toppings === "meatlovers") {
    totalCost = pizza.cost + 5;
  }
  if (pizza.toppings === "veggie") {
    totalCost = pizza.cost + 2;
  }
  return pizza;
}


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

  $("#size").text(pizza.size);
  $("#toppings").text(pizza.toppings);
  $("#cost").text(pizza.cost);
  });
});