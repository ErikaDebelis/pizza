
function CreatePizza () {
  let pizza = {
    size: "",
    toppings: "",
    cost: 13
  };

  return pizza;
}

function SetPizza(size, toppings) {
  Size(pizza,size) 
  Toppings(pizza, toppings)
  
  const finalPizza = Cost(pizza);

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
    pizza.cost -= 3;
  }
  if (pizza.size ==="large") {
    pizza.cost += 4;
  }
  if (pizza.toppings === "meatlovers") {
    pizza.cost += 5;
  }
  if (pizza.toppings === "veggie") {
    pizza.cost += 2;
  }

  return pizza;
}


$(document).ready(function() {
  $("#pizza-input").click(function(event) {

//passing in our object and user values to manipulate them 
let pizzaObject = CreatePizza(); // created our pizza object

let chosenSize = $("input:radio[name=size]:checked").val();
let chosenToppings = $("#toppings").val();

let pizza = SetPizza(pizzaObject, chosenSize, chosenToppings);

console.log(pizza);

  event.preventDefault();

  $("#size").text(pizza.size);
  $("#toppings").text(pizza.toppings);
  $("#cost").text(pizza.cost);
  });
});
