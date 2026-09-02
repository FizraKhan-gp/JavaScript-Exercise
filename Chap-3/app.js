// ----------- Chapter 2 -------------
// ----------- Variable for Numbers -------------
// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 24;
 alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.

var N = 99;
 alert("You have visited this site " + N + " times.");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear = 2001;
 document.write("My birth year is " + birthYear + "<br>Data type of my declared variable is number");

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "John Doe";
var productTitle = "T-shirt";
var quantity = 5;
document.write('<br>' + visitorName + ' ordered ' + quantity + ' ' + 
        productTitle + '(s) on XYZ Clothing store');