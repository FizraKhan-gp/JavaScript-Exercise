//------------------- Math Expressions --------------------
// ----------Chapter 6 - Unfamiliar Operators----------- 
// ----------Chapter 7 - Eliminating ambiguity---------- 
// ----------Chapter 8 - Concatenating Text Strings----- 
// ----------      Chapter 9 - Prompts        ---------- 

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

num = 5;

document.write("Result:<br>");
document.write("The value of a is: " + num + "<br>");

document.write("...........................................<br><br>");

//Pre-Increment
document.write("The value of ++a is: " + (++num) + "<br>");
document.write("Now the value of a is: " + num + "<br><br>");

//Post-Increment
document.write("The value of a++ is: " + (num++) + "<br>");
document.write("Now the value of a is: " + num + "<br><br>");

//Pre-Decrement
document.write("The value of --a is: " + (--num) + "<br>");
document.write("Now the value of a is: " + num + "<br><br>");

//Post-Decrement
document.write("The value of a-- is: " + (num--) + "<br>");
document.write("Now the value of a is: " + num + "<br><br>");

// console.log(--num);
// console.log(num++);
// console.log(++num);
// console.log(num--);

// 2. What will be the output in variables a, b & result after 
// execution of the following script: 
// var a = 2, b = 1; 
// var result = --a - --b + ++b + b--; 
// // Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--;

var a= 2
var b = 1
document.write('The value of a is ' + a+'<br>')
document.write('The value of b is ' + b+'<br>')

var Result = --a - --b + ++b + b--;

document.write('The result is ' + Result + '<br>')

// Explain the output at each stage:

document.write('<h3>' + 'Explanation'+ '</h3>' + '<br>')

document.write('--a' + '<br>')
document.write('1' +'<br>')
document.write('<br>')

document.write('--a - --b' + '<br>')
document.write('1 - 0' + '<br>')
document.write('1' +'<br>')
document.write('<br>')

document.write('--a - --b + ++b' + '<br>')
document.write('1 - 0 + 1' + '<br>')
document.write('1 + 1' +'<br>')
document.write('2' + '</br>')
document.write('<br>')

document.write('--a - --b + ++b + b--' + '<br>')
document.write('1 - 0 + 1 + 1' + '<br>')
document.write('1 + 1 +1' +'<br>')
document.write('3' + '</br>')
document.write('<br>')

// 3. Write a program that takes input a name from user & greet the user.

var name = prompt("Enter your name:");
alert("Hello " + name + "! Welcome.");

// 4. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default. 

var number = prompt("Enter a number:");

if (number === null || number === "") {
    number = 10;
}

document.write("<h2>Multiplication Table of " + number + "</h2>");

for (var i = 1; i <= 10; i++) {
    document.write(number + " × " + i + " = " + (number * i) + "<br>");
}