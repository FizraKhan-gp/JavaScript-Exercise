
// -------------Chapter# 12 or 13---------------

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

var character = prompt("Enter a character (number or string):");

var asciiCode = character.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
    console.log(character + " is a number.");
}   
else if (asciiCode >= 65 && asciiCode <= 90) {
    console.log(character + " is an uppercase letter.");
}   
else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log(character + " is a lowercase letter.");
}   
else {
    console.log(character + " is not a number or a letter.");
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 

var num1 = +prompt("Enter the first integer:");
var num2 = +prompt("Enter the second integer:");

if (num1 > num2){
    console.log(num1 + " is larger than " + num2);
}
else if (num2 > num1){
    console.log(num2 + " is larger than " + num1);
}
else {
    console.log("Both integers are equal.");
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 

var number = +prompt ("Enter a number:");

if (number > 0) {
    console.log(number + " is a positive number.");
}
else if (number < 0) {
    console.log(number + " is a negative number.");
}
else {
    console.log(number + " is zero.");
}   

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 

var character = prompt("Enter a character:");

if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
    alert("true");
}
else {
    alert("false");
}

// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.

var correctPassword = "12345";

var userPassword = prompt("Enter your password:");

if (userPassword == "") {
    alert("Please enter your password");
}
else if (userPassword == correctPassword) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}

// 6. This if/else statement does not work. Try to fix it: 

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// } 

var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}

alert(greeting);

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

var time = +prompt("Enter time in 24-hour format:");

if (time >= 0 && time < 1200) {
    alert("Good morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night");
}
else {
    alert("Invalid time");
}

// -------------------------Chapter# 14 to 16-------------------------

=======
>>>>>>> 0f752a77405e444eec41003466b4de7fb11f6f0d
// 1. Declare an empty array using JS literal notation to store student names in future.

var studentName =[]

// 2. Declare an empty array using JS object notation to store student names in future.

var newarray = new Array ()

// 3. Declare and initialize a strings array.

var  stringsArray   =["SSC", "HSC", "BCS",
    "BS", "BCOM", "MS", "M. Phil.", "PhD"]

// 4. Declare and initialize a numbers array.

var numbersArray   =[10 , 20 , 30 , 40 ,50 , 60 ,70 ,80]

// 5. Declare and initialize a boolean array.

var booleanArray = [true, false];

// 6. Declare and initialize a mixed array.

var mixedArray = ["Umra", 25 , true ,]

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listedqualifications in your browser like:

document.write( `<h1>Qualification</h1><br>1)${stringsArray[0]} <br>2)${stringsArray[1]}<br>3)${stringsArray[2]}<br>$4){stringsArray[3]}<br>5)${stringsArray[4]}<br>6)${stringsArray[5]}<br>7)${stringsArray[6]}<br>8)${stringsArray[7]} <br>`)

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

var student= ["Michael", "John", "Tony"]
var score = [320, 230,480]
document.write(`Score of ${student[0]} is ${score[0]}. Percentage ${(score[0]/500) *100 }% <br>`)
document.write(`Score of ${student[1]} is ${score[1]}. Percentage ${(score[1]/500) *100 }% <br>`)
document.write(`Score of ${student[2]} is ${score[2]}. Percentage ${(score[2]/500) *100 }% <br>`)

// 9. Initialize an array with color names. Display the array elements in your browser.

var colors = ["Grey" , "Blue" , "Black" , "White" ]
console.log(colors)

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.Display the updated array in your browser.

var userClr = prompt(" what color he/she wants to add to the beginning")

colors.unshift(userClr)
console.log(colors)

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display theupdated array in your browser.


var userClr = prompt(" what color he/she wants to add to the end")

colors.push(userClr)
console.log(colors)

// c. Add two more color to the beginning of the array.Display the updated array in your browser.

colors.unshift("Green" , "Yellow")
console.log(colors)

// d. Delete the first color in the array. Display the updated array in your browser.

colors.shift()
console.log(colors)

// e. Delete the last color in the array. Display the updated array in your browser.

colors.pop()
console.log(colors)

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.

var userIndex = +prompt("Which Index he/she wants to add a color?")
var userClr = prompt("Which Index he/she wants to add a color name?")

colors.splice(userIndex , 0 , userClr)
console.log(colors)

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.

var deltClr = +prompt("At which index you want to delete a color?")
var colorQuantity = +prompt("How many colors you want to remove?")

colors.splice (deltClr , colorQuantity )
console.log(colors)

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var studentScore = [320, 230, 480, 120]
studentScore.sort()
console.log(studentScore)

// 11. Write a program to initialize an array with city names.Copy 3 array elements from cities array to selectedCities array.

var cityName = ["Karachi", "Lahore", "Islamabd", "Quetta", "Peshawar"]
var selectedCities = cityName.slice(1,4)
console.log(selectedCities)

// 12.  Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

var arr = ["This ", " is ", " my ", " cat"];
var singleString = arr.join("");
console.log(singleString);

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 

var arr = [];
console.log(arr);

arr.push("Keyboard");
console.log(arr);

arr.push("Mouse");
console.log(arr);

arr.push("Printer");
console.log(arr);

arr.push("Monitor");
console.log(arr);


arr.shift()
console.log(arr);

arr.shift()
console.log(arr);

arr.shift()
console.log(arr);

arr.shift()
console.log(arr);

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In First Out) 

var arr = [];
console.log(arr);

arr.push("Keyboard");
console.log(arr);

arr.push("Mouse");
console.log(arr);

arr.push("Printer");
console.log(arr);

arr.push("Monitor");
console.log(arr);


arr.pop()
console.log(arr);

arr.pop()
console.log(arr);

arr.pop()
console.log(arr);

arr.pop()
console.log(arr);


// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

var manufacturers = [
    "Apple", "Samsung", "Motorola","Nokia","Sony","Haier"];

document.write("<select>");

    document.write("<option>" + manufacturers[0] + "</option>");
    document.write("<option>" + manufacturers[1] + "</option>");
    document.write("<option>" + manufacturers[2] + "</option>");
    document.write("<option>" + manufacturers[3] + "</option>");
    document.write("<option>" + manufacturers[4] + "</option>");
    document.write("<option>" + manufacturers[5] + "</option>");

document.write("</select>");


