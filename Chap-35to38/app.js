// 1. Write a function that displays current date & time in your browser. 
 
function displayDateTime() {
    var currentDate = new Date();
    var dateTimeString = currentDate.toLocaleString();
    console.log("Current Date and Time: " + dateTimeString);
}

displayDateTime();


// 2. Write a function that takes first & last name and then it greets the user using his full name. 

function userGreeting(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName + "!");
}

userGreeting("Fizra", "Khan");

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers. 

function addNumbers(num1, num2) {
    var sum = num1 + num2;
    console.log("Sum: " + sum);
}

var a= +prompt("Enter first number: ");
var b= +prompt("Enter second number: ");

addNumbers(a, b);


// 4. Calculator:  Write a function that takes three arguments num1, num2  & operator & compute the desired operation. Return and show the desired result in your browser. 

function calculator(num1, num2, operator) {
    var result;
    if (operator === "+") {
        result = num1 + num2;
    }
    console.log("Result: " + result);
    if (operator === "-") {
        result = num1 - num2;
    }       
    console.log("Result: " + result);
    if (operator === "*") {
        result = num1 * num2;
    }   
    console.log("Result: " + result);
    if (operator === "/") {
        result = num1 / num2;
    }
    console.log("Result: " + result);
    if (operator === "%") {
        result = num1 % num2;
    }   
    console.log("Result: " + result);
}

var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
var operator = prompt("Enter operator (+, -, *, /, %): ");

calculator(num1, num2, operator);

// 5. Write a function that squares its argument.

function squareNumber(num) {
    var square = num * num;
    console.log("Square of " + num + " is: " + square);
}

var number = +prompt("Enter a number to square: ");

squareNumber(number);

// 6. Write a function that computes factorial of a number. 

function factorial(num) {

    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i;    
    }
    console.log("Factorial of " + num + " is: " + result);
}

var factNumber = +prompt("Enter a number to compute factorial: ");

factorial(factNumber);


// 7. Write a function that take start and end number as inputs & display counting in your browser. 

function displayCounting(start, end) {
   
    for (var i = start; i <= end; i++) {
        console.log(i);
    }   
     console.log("Counting from " + start + " to " + end + ":");
}
 var startNum = +prompt("Enter start number: ");
var endNum = +prompt("Enter end number: ");

displayCounting(startNum, endNum);



// 8. Write a nested function that computes hypotenuse of a right angle triangle.  Hypotenuse2 = Base2 + Perpendicular2 