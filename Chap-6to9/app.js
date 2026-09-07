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


// 6. Take 
// a) Take three subjects name from user and store them in 3 
// different variables. 
// b) Total marks for each subject is 100, store it in another 
// variable. 
// c) Take obtained marks for first subject from user and 
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables. 
// e) Now calculate total marks and percentage and show the 
// result in browser like this.

var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarks = 100;

var obtained1 = Number(prompt("Enter obtained marks in " + subject1 + ":"));
var obtained2 = Number(prompt("Enter obtained marks in " + subject2 + ":"));
var obtained3 = Number(prompt("Enter obtained marks in " + subject3 + ":"));

var totalObtained = obtained1 + obtained2 + obtained3;
var totalMarksAll = totalMarks * 3;
var percentage = (totalObtained / totalMarksAll) * 100;

document.write("<table border='1' cellpadding='10'>");

document.write("<tr>");
document.write("<th>Subject</th>");
document.write("<th>Total Marks</th>");
document.write("<th>Obtained Marks</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtained1 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtained2 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>" + totalMarks + "</td>");
document.write("<td>" + obtained3 + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th>Total</th>");
document.write("<th>" + totalMarksAll + "</th>");
document.write("<th>" + totalObtained + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<th colspan='2'>Percentage</th>");
document.write("<th>" + percentage + "%</th>");
document.write("</tr>");

document.write("</table>");