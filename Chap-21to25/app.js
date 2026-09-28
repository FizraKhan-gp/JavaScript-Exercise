// --------------Chapter 21 to 25----------------

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 


var firstName = prompt ("Enter your First Name");

var lastName = prompt ("Enter your Last Name");

var fullName = firstName+ " " +lastName;

// console.log(fullName)
document.write (`Hello ${fullName} <br>`)


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var userInput = prompt ("Enter your Fvrt Mobilephone Model");

var mobileNameLength = userInput.length

// console.log(mobileNameLength)
document.write (`Length of User Input is ${mobileNameLength} <br>`)

// 3. Write a program to find the index of letter “n” in the word“Pakistani” and display the result in your browser .

var word= "Pakistani";

var index = word.indexOf("n");

document.write (`Index of n is ${index} <br>`)


// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var word= "Hello World";

var lastIndex = word.lastIndexOf("l");

document.write (`Last Index of l is ${lastIndex} <br>`)

// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var word= "Pakistani";

var thirdIndex = word.charAt(3);

document.write (`3rd Index of l is ${thirdIndex} <br>`)


// Repeat Q1 using string concat() method.

var firstName = prompt ("Enter your First Name");

var lastName = prompt ("Enter your Last Name");

var fullName = firstName.concat( " " , lastName);

// console.log(fullName)
document.write (`Hello ${fullName} <br>`)


//  Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

var city="Hyderabad"

var replace = city.replace("Hyder" , "Islam")

document.write (` ${replace} <br>`)

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 

 var message ="Ali and Sami are best friends. They play cricket and football together."; 

 var replaceAll = message.replaceAll(/and/g , "&");

 document.write (` ${replaceAll} <br>`)



// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var string = "472";

var number = Number(string);

var  string = Number("472");

document.write (` ${ number} , ${string} <br>`)

//  Write a program that takes user input. Convert and show the input in capital letters.

var userInput = prompt("Enter something:");

var capitalLetter= userInput.toUpperCase();

document.write(`${capitalLetter} <br>`)

// Write a program that takes user input. Convert and show the input in title case. 

var userInput = prompt("Enter something:");

var titleCase= userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

document.write(`${titleCase} <br>`)

// console.log(user.charAt(0).toUpperCase()+user.slice(1));

//  Write a program that converts the variable num to  string. Remove the dot to display “3536” display in your browser.
var num = 35.36 ; 

var string = num.toString().replace(".","");

document.write(`${string} <br>`)

console.log(typeof string);

// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 

var username = prompt("Enter your username:");

if (username.indexOf("@") !== -1 || username.indexOf(".") !== -1 ||username.indexOf(",") !== -1 || username.indexOf("!") !== -1) {
    console.log("Please enter a valid username");
}
 else {
    console.log("Username is valid");
}

// You have an array 
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. 

var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput= prompt("Enter item to search:");
var searchItem = userInput.toLowerCase();

var isFound = false; 
var savedIndex ;

for (var i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === searchItem) {
        isFound = true;   
        savedIndex = i; 
        break;
    }
}


if (isFound === true) {
    alert(userInput + " is available at index " + savedIndex + " in our bakery.");
} else {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}

//  Write a program to take password as an input from user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long 
// If the password does not meet above requirements, 
// prompt the user to enter a valid password.



// Write a program to convert the following string to an array using string split method. 
// var university = “University of Karachi”; 
// Display the elements of array in your browser.

 var university = "University of Karachi"; 
 

//  for  Word

 var universityArray = university.split(" ");

 console.log(universityArray);

 document.write(`${universityArray} <br>`)

 for (var i = 0; i < universityArray.length; i++) {
            document.write(universityArray[i] + "<br>");
        }

//for Letter

 var universityArr = university.split("");

 console.log(universityArr);

 document.write(`${universityArr} <br>`)

 for (var i = 0; i < universityArr.length; i++) {
            document.write(universityArr[i] + "<br>");
        }

//  Write a program to display the last character of a user input.

var input = prompt("Enter something:");

var lastCharacter = input.charAt(input.length - 1);

document.write( `Last character: ${lastCharacter} <br>` );

//  You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var text = "The quick brown fox jumps over the lazy dog";

var words = text.toLowerCase().split(" ");

var count = 0;

for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++;
    }
}

document.write(`The word "the" occurs "${count}" time(s).`)