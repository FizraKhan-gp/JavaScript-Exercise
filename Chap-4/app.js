// ----------- Chapter 4 -----------
// ----------- VARIABLE NAMES: LEGAL & ILLEGAL ----------

// 1. Declare 3 variables in one statement

// var firstName = "John", lastName = "Doe", age = 25;

// 2. Declare 5 legal & 5 illegal variable names.

//5 Legal Variables

// var userName;
// var age;
// var firstName;
// var _total;
// var $price;

//5 Illegal Variables

// var 1name;        // It cannot start with a number.
// var user-name;    // Hyphen is not allowed
// var first name;   // Space is not allowed 
// var var;          // Reserved keyword
// var @email;       // @ is not allowed 

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______, ______ and ______.For example $my_1stVariable
// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write("<h1>Rules for naming JS variables</h1>");

document.write("<p>Variable names can only contain letters, numbers, $ and _.<br>");
document.write("For example $my_1stVariable</p>");

document.write("<p>Variables must begin with a letter, $ or _.<br>");
document.write("For example $name, _name or name</p>");

document.write("<p>Variable names are case sensitive.</p>");

document.write("<p>Variable names should not be JS reserved keywords.</p>");

