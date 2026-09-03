// ----------- Chapter 5 MATH EXPRESSIONS ---------- 

// 1. Write a program that take two numbers & add them in a new variable.
// Show the result in your browser.

document.write("<h2>Addition of Two Numbers</h2>");

var firstNumber = 3;
var secondNumber = 5;
var sum = firstNumber + secondNumber;
document.write("Sum of " + firstNumber + " and " + secondNumber + " is " + sum + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

document.write("<h2>Subtraction, Multiplication, Division & Modulus</h2>");

var difference = firstNumber - secondNumber;
var product = firstNumber * secondNumber;
var quotient = firstNumber / secondNumber;
var modulus = firstNumber % secondNumber;

// For Console

console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);
console.log(firstNumber % secondNumber);


// For Browser
document.write("Difference of " + firstNumber + " and " + secondNumber + " is " + difference + "<br>");
document.write("Product of " + firstNumber + " and " + secondNumber + " is " + product + "<br>");
document.write("Quotient of " + firstNumber + " and " + secondNumber + " is " + quotient + "<br>");
document.write("Modulus of " + firstNumber + " and " + secondNumber + " is " + modulus + "<br>");

// 3. Do the following using JS Mathematic Expressions 

document.write("<h2>Using JS Mathematic Expressions</h2>");

// a. Declare a variable. 

var number;

// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 

document.write("Value after variable declaration is: " + number + "<br>");

// c. Initialize the variable with some number. 

console.log(number = 5);

// d. Show the value of variable in your browser like “Initial value: 5”. 

document.write("Initial value: " + number + "<br>");

// e. Increment the variable. 

console.log(number++);

// f. Show the value of variable in your browser like “Value after increment is: 6”.

document.write("Value after increment is:" + number + "<br>");

// g. Add 7 to the variable.

console.log(number += 7);

// h. Show the value of variable in your browser like “Value after addition is: 13”.

document.write("Value after addition is: " + number + "<br>");

// i. Decrement the variable.

console.log(number--);

// j. Show the value of variable in your browser like “Value after decrement is: 12”.

document.write("Value after decrement is: " + number + "<br>");

// k. Show the remainder after dividing the variable’s value by 3.

console.log(number % 3);

// l. Output : “The remainder is : 0”.

document.write("The remainder is: " + (number % 3) + "<br>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
 
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR" + "<br>");

// 5. Write a script to display multiplication table of an number in your browser. E.g

var number = 5;

document.write("<h2>Multiplication Table of " + number + "</h2>");

document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>");

// 6. The Temperature Converter

// a. Store a Celsius temperature into a variable.

var celsius = 25;

// b. Convert it to Fahrenheit.

var fahrenheit = (celsius * 9 / 5) + 32;

// c. Now store a Fahrenheit temperature into a variable.

fahrenheit = 77;

// d. Convert it to Celsius.

celsius = (fahrenheit - 32) * 5 / 9;

document.write("<h2> The Temperature Converter </h2>");

document.write(celsius + "°C is " + fahrenheit + "°F" + "<br/>");

document.write(fahrenheit + "°F is " + celsius + "°C" + "<br/>");


// 7. Shopping Cart Checkout Process

// a. Price of item 1

var itemprice1 = 500;

// b. Price of item 2

var itemprice2 = 1000;

// c. Ordered quantity of item 1

var quantityItem1 = 2;

// d. Ordered quantity of item 2

var quantityItem2 = 4;

// e. Shipping charges

var shippingCharges = 150;

// Compute the total cost

var total =
    (itemprice1 * quantityItem1) +
    (itemprice2 * quantityItem2) +
    shippingCharges;


document.write("<h2>Shopping Cart Checkout Process</h2>");

document.write("Price of Item 1 is " + itemprice1 + "<br/>");

document.write("Quantity of Item 1 is " + quantityItem1 + "<br/>");

document.write("Price of Item 2 is " + itemprice2 + "<br/>");

document.write("Quantity of Item 2 is " + quantityItem2 + "<br/>");

document.write("Shipping Charges " + shippingCharges + "<br/>");

document.write("<br/>");

document.write("<p>Total cost of your order is " + total + "</p>" + "<br/>");

// 8. Marks Sheet

var totalMarks = 980;

var marksObtained = 804;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Marks Sheet</h2>");

document.write("Total Marks: " + totalMarks + "<br/>");

document.write("Marks Obtained: " + marksObtained + "<br/>");

document.write("Percentage: " + percentage + "%<br/>");


// 9. Currency Conversion

// 1 US Dollar = 104.80 Pakistani Rupee
// 1 Saudi Riyal = 28 Pakistani Rupee

var pkr = (10 * 104.80) + (25 * 28);

document.write("<h2>Currency Conversion in PKR</h2>");

document.write("Total Currency in PKR: " + pkr + "<br/>");


// 10. Arithmetic Operations in Single Expression

var num = 10;

var result = ((num + 5) * 10) / 2;

document.write("<h2>Arithmetic Operations in Single Expression</h2>");

document.write("Result: " + result);

// 11. Age Calculator

// a. Store the current year in a variable. 

var currentYear = 2026;

// b. Store their birth year in a variable. 

var birthYear = 2001;

// c. Calculate their 2 possible ages based on the stored values.

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Output them to the screen like so: “They are either NN or NN years old”.

document.write("<h2>Age Calculator</h2>");

document.write("They are either " + age1 + " or " + age2 + " years old");

// 12. The Geometrizer: Calculate properties of a circle.

document.write("<h2>The Geometrizer</h2>");
// a. Store a radius into a variable. 

var radius = 5;
var pi = 3.142;

// b. Calculate the circumference based on the radius. 

var circumference = 2 * pi * radius;

// Output “The circumference is NN”.

document.write("The circumference is " + circumference + "<br>");

// c. Calculate the area based on the radius. 

var area = pi * radius * radius;

// Output “The area is NN”.

document.write("The area is " + area + "<br>");

//  Ever wonder how much a “lifetime supply” of your favorite snack is?

document.write("<h2>The Lifetime Supply Calculator</h2>");

// a. Store your favorite snack into a variable 

var favoriteSnack = "Chocolate Chip Cookies";

// b. Store your current age into a variable.

var currentAge = "24";

// c. Store a maximum age into a variable. 

var maximumAge = "60";

// d. Store an estimated amount per day.

var amountPerDay = "2";

// e. Calculate how many would you eat total for the rest of your life.     

var total = (maximumAge - currentAge) * 365 * amountPerDay;

// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

document.write("Current Age: " + currentAge + "<br>");

document.write("Maximum Age: " + maximumAge + "<br>");

document.write("Amount Per Day: " + amountPerDay + "<br>");

document.write("<h4>You will need " + total + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "</h4><br>");
