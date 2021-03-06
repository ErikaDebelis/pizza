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

_Describe Pizza()_

1. Test: Create a constructor for Pizza and take in the users selections and initialize a new pizza.
Code: 

        let pizza = new Pizza(size: "large", toppings:"meatlovers")

Expected Output: 

        Pizza{ } 

2. Test: Take in the users selections and initialize a new pizza that will hold the ways the customer can customize the pizza (by size and toppings) and define the base cost for a pizza as 13.
Code: 

        let pizza = new Pizza(size: "large", toppings:"meatlovers")

Expected Output: 

        Pizza{size: "large", toppings:"meatlovers", cost: 13} 

_Describe Pizza.prototype.finalCost = function () {_

1. Test: Create a prototype for pizza's final cost. (no logic/ cost formula created yet).
Code:

        let pizza = new Pizza(size: "large", toppings:"margherita")

Expected Output: 

        Pizza {size: "large", toppings:"margherita", cost: 13}

2. Test: Add logic and create branching statements for finalCost prototype that will determine the cost based on the size and topping selections made. Testing if price will increase based on large size input alone as expected.

Code: 

        let pizza = new Pizza(size: "large", toppings:"margherita")

          pizza.finalCost()

Expected Output: 

        Pizza {size: "large", toppings:"margherita", cost: 17}

3. Test: Testing if price will increase based on toppings input alone as expected.
Code:

        let pizza = new Pizza(size: "medium", toppings:"veggie")

          pizza.finalCost()

Expected Output: 

        Pizza {size: "medium", toppings:"veggie", cost: 15}

4. Test: Testing if price will decrease based on small size input as expected.

Code: 

        let pizza = new Pizza(size: "small", toppings:"margherita")

          pizza.finalCost()

Expected Output: 

        Pizza {size: "small", toppings:"margherita", cost: 10}

5. Test: Testing if price will decrease based on small size input and increase from topping selection as expected.

Code: 

        let pizza = new Pizza(size: "small", toppings:"veggie")

          pizza.finalCost()

Expected Output: 

        Pizza {size: "small", toppings:"veggie", cost: 12}

## Bugs

_no known bugs at this time_

## License

_MIT_

_Copyright (c) 2021 Erika Debelis_

if any issues are discovered while navigating the site, please let me know! It will help me learn and grow!

## Contact Information

Erika Debelis _erika.debelis@gmail.com_