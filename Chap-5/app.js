// ----------- Chapter 5 MATH EXPRESSIONS ---------- 

// 1. Write a program that take two numbers & add them in a new variable.
// Show the result in your browser.
var firstNumber = 3;
var secondNumber = 5;
var sum = firstNumber + secondNumber;
document.write("Sum of " + firstNumber + " and " + secondNumber + " is " + sum + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

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
document.write(number + " x 10 = " + (number * 10));

