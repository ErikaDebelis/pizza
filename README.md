# __Pizza Planet__
## Authored by Erika Debelis

### __Description__
'Pizza Planet' is a website for a greek-style pizza restaurant. The customer builds their custom pizza; choosing the size and toppings for their pie.

_Rules:_
1. There are 3 sizes to choose from: small, medium, and large.
2. Then choose between our 3 specialty pizzas; meatlovers, classic margherita, and veggie.
3. Once you've made your selections; add to cart!

### __Technologies Used__
Pizza Planet uses HTML, CSS, and Bootstrap for the user interface. Javascript and JQuery are used for the business and user interface logic. 

### __Setup/Installation__
1. Download or clone the https://github.com/ErikaDebelis/pizza to your local machine
2. Navigate to the top level of the directory
3. Open index.html in your browser
4. Click through the forms for size and toppings to customize your pizza
5. Click "add to cart"!

Alternately, visit https://erikadebelis.github.io/pizza/

### __Tests/Specifications__

_Describe PizzaPlanet()_

1. Test: Create a constructor for an empty PizzaPlanet object that will hold an empty pizza array to eventually add to + currentId to keep track of pizzas eventually added to cart
Code: 
function PizzaPlanet () {
  this.pizza = {};
  this.currentID = 0;
Expected Output: PizzaPlanet{ } 

2. Test: Create a constructor for pizzas that will hold the ways the customer can customize the pizza (by size and toppings)
Code: 
function Pizza (size, toppings) {
  this.chosenSize= size;
  this.chosenToppings= toppings;
}
Output: Pizza { }


_Describe Pizza ()_

1. Test: Create a prototype for pizzas that will create a custom method which then adds the customized pizza to cart 
Code: 
PizzaPlanet.prototype.addPizza = function (pizza) {
  pizza.id = this.assignPizzaId();
  this.pizzas[pizza.id] = pizza;
}
Output: Pizza { }


2. Test: Create a prototype for pizzas that will create a custom method which then assigns an ID to the customized pizza in the cart
Code: 
PizzaPlanet.prototype.assignPizzaId = function () {
  this.currentID += 1;
  return this.currentID;
}
Output: Pizza { }


3. Test: Create a prototype for pizzas that will create the formula for which the pricing is determined for the custom pizza based on the size and topping selections made
Code: 
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
Output: Pizza { }

_Describe UI logic for pizza()_

## Bugs

_no known bugs at this time_

## License

_MIT_

_Copyright (c) 2021 Erika Debelis_

if any issues are discovered while navigating the site, please let me know! It will help me learn and grow!

## Contact Information

Erika Debelis _erika.debelis@gmail.com_