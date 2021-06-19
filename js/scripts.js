// Business Logic for objects
function Pizza (size, toppings, cost) {
  this.size = size;
  this.toppings = toppings;
  this.cost = cost;
}

Pizza.prototype.finalCost = function () {
  if (this.size ==="small") {
    this.cost -= 3;
  }
  if (this.size ==="large") {
    this.cost += 4;
  }
  if (this.toppings === "meatlovers") {
    this.cost += 5;
  }
  if (this.toppings === "veggie") {
    this.cost += 2;
  }
}

//UI Logic
$(document).ready(function() {
  $("#pizza-input").click(function(event) {

    let chosenSize = $("input:radio[name=size]:checked").val();
let chosenToppings = $("#toppings").val();

let pizza = new Pizza(chosenSize, chosenToppings, 13);
pizza.finalCost();

  event.preventDefault();
  console.log(pizza);

  console.log();

  $("#size").html(pizza.size);
  $("#toppings").html(pizza.toppings);
  $("#cost").text(pizza.cost);

  });
});
