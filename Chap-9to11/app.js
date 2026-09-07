// ------------Chapter 9-11 Exercises------------
// 1. Write a program to take “city” name as input from user. Ifuser enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights” 

var city = prompt("Enter your city name: ");
if (city === "Karachi") {
    console.log("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender: ");
if (gender === "male") {
    console.log("Good Morning Sir");
} else if (gender === "female") {
    console.log("Good Morning Ma’am");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

var signalColor = prompt("Enter the color of road traffic signal: ");
if (signalColor === "red") {
    console.log("Must Stop");
}
else if (signalColor === "yellow") {
    console.log("Ready to move");
}
else if (signalColor === "green") {
    console.log("Move now");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

var remainingFuel = prompt("Enter remaining fuel in your car (in litres): ");
if (remainingFuel <= 0.25) {
    console.log("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs. 

// --------- a ---------

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// --------- b ---------

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// --------- c ---------

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// --------- d ---------

 var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
}

// --------- e ---------

 if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
}

// --------- f ---------

if("car" < "cat"){ 
alert("car is smaller than cat"); 
}

if("cat" > "car"){ 
alert("car is greater than cat"); 
}

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

var subject1 = prompt("Enter marks of Subject 1:");
var subject2 = prompt("Enter marks of Subject 2:");
var subject3 = prompt("Enter marks of Subject 3:");

var totalMarks = prompt("Enter total marks:");

var marksObtained = Number(subject1) + Number(subject2) + Number(subject3);

var percentage = (marksObtained / Number(totalMarks)) * 100;

var grade;
var remarks;

if (percentage >= 80) {
    grade = "A+";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Very Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "Good";
}
else if (percentage >= 50) {
    grade = "C";
    remarks = "You need to improve";
}
else if (percentage >= 40) {
    grade = "D";
    remarks = "Needs improvement";
}
else {
    grade = "F";
    remarks = "Sorry";
}

document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);

// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
//  a. If user guesses the same number, show “Bingo! Correct answer”. b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”. 

var secretNumber = 5;

var guess = prompt("Guess a number from 1 to 10:");

if (guess == secretNumber) {
    console.log("Bingo! Correct answer");
}

if (Number(guess) - 1 == secretNumber || Number(guess) + 1 == secretNumber) {
    console.log("Close enough to the correct answer");
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3. 

var number = prompt("Enter a number to check if it is divisible by 3:");
if (number % 3 === 0) {
    console.log(number + " is divisible by 3");
}
// 9. Write a program that checks whether the given input is an even number or an odd number. 

var number = prompt("Enter a number:");

if (number % 2 === 0) {
    console.log("The number is even");
}

if (number % 2 !== 0) {
    console.log("The number is odd");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
//  a. T > 40 then “It is too hot outside.”
//  b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.” 

var temperature = prompt("Enter temperature:");

if (temperature > 40) {
    console.log("It is too hot outside.");
}

if (temperature > 30 && temperature <= 40) {
    console.log("The Weather today is Normal.");
}

if (temperature > 20 && temperature <= 30) {
    console.log("Today's Weather is cool.");
}

if (temperature > 10 && temperature <= 20) {
    console.log("OMG! Today's weather is so Cool.");
}

// Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user. 

var num1 = Number(prompt("Enter first number:"));
var num2 = Number(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");

if (operation === "+") {
    console.log(num1 + num2);
}

if (operation === "-") {
    console.log(num1 - num2);
}

if (operation === "*") {
    console.log(num1 * num2);
}

if (operation === "/") {
    console.log(num1 / num2);
}

if (operation === "%") {
    console.log(num1 % num2);
}