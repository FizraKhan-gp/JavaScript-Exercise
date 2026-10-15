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

function calculateHypotenuse(base, perpendicular) {

    function calculateSquare(num) {
        return num * num;
    }

    var result = calculateSquare(base) + calculateSquare(perpendicular);

    return Math.sqrt(result);
}

var base = Number(prompt("Enter base:"));
var perpendicular = Number(prompt("Enter perpendicular:"));

console.log("Hypotenuse = " + calculateHypotenuse(base, perpendicular));


//  9. Write a function that calculates the area of a rectangle. 
// A = width * height 
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables 

// Arguments as value

function calculateArea (width , height){
    return width * height;
}

calculateArea(5, 10); 

// Arguments as variables

function calculateArea (width , height){
    return width * height;
}

var width = 5;
var height = 10;
calculateArea(width, height);


// 10. Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam. 

function isPalindrome(word){
    word = word.toLowerCase();
    var reverse= "";
    for (var i = word.length-1 ; i>=0 ; i--){
        reverse += word[i];
    }
    if( word === reverse){
        console.log(word + " is a palindrome.");
    }else{
        console.log(word + " is not a palindrome.");
    }
}


// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox' 

function capitalizeFirstLetter(sentence){ //i love javascript
     var words = sentence.split(" "); // "i", "love", "javascript"

     for (var i = 0; i < words.length; i++){
        var word = words[i]; //"i"
        var firstLetter = word.charAt(0).toUpperCase(); //"I"
        var remainingLetters = word.slice(1).toLowerCase(); //""
        words[i]= firstLetter + remainingLetters; //"I"
     }
     return words.join(" "); // "I Love Javascript"
} 
var inputString = prompt("Enter a string: ");

console.log("Capitalized String: " + capitalizeFirstLetter(inputString));


// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
// EXAMPLE STRING : 'Web Development Tutorial'  
// EXPECTED OUTPUT : 'Development' 

function longestWord(text) { //Web Development Tutorial
    var words = text.split(" "); // ["Web", "Development", "Tutorial"]
    var longest = words[0]; // "Web"

    for (var i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

// var text = prompt("Enter a sentence:");

console.log("Longest Word: " + longestWord("Web Development Tutorial"));

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'  

function countLetter(text, letter) {
    var count = 0; 

    for (var i = 0; i < text.length; i++) {
      
        if (text[i] === letter) {
            count++;
        }
    }

    return count; 
}


var result = countLetter('JSResourceS.com', 'o');

console.log("The letter 'o' appears " + result + " times.");

// 14. The Geometrizer 
// Create 2 functions that calculate properties of a circle, using 
// the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN". 
// Circumference of circle    =     2πr 


function calcCircumference(radius) {
    // Formula: 2 * Pi * radius
    var circumference = 2 * Math.PI * radius;
    
    console.log("The circumference is " + circumference.toFixed(2));
}

// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area 
// is NN". 
// Area of circle       =     πr2

function calcArea(radius) {
    // Formula: Pi * radius * radius
    var area = Math.PI * radius * radius;
    
    console.log("The area is " + area.toFixed(2));
}


