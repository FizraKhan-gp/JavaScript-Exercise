// 1. Write a program that displays current date and time in your browser. 

var date = new Date();

document.write(date);


// 2. Write a program that alerts the current month in words. For example December.

var date = new Date();

var month = date.getMonth();

var months = ["January","February","March","April","May","June","July","August","September","October","November", "December"];

alert(months[month]);


// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun. 

var date = new Date();

var days = [
    "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var day = days[date.getDay()];

alert(day.slice(0, 3));

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 

var date = new Date();

var day = date.getDay();

if (day === 0 || day === 6) {
    alert("It's Fun day");
}

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 

var date = new Date();

var day = date.getDate();

if (day < 16) {
    alert("First fifteen days of the month");
}
else {
    alert("Last days of the month");
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. 

var date = new Date();

var minutes = date.getTime() / (1000 * 60);

document.write(minutes);

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.


var date = new Date();

var hour = date.getHours();

if (hour < 12) {
    alert("Its AM");
}
else {
    alert("its PM");
}


// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 

var laterDate = new Date(2020, 11, 31);

document.write(laterDate);

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 

var ramadan = new Date("June 18, 2015");

var today = new Date();

var difference = today.getTime() - ramadan.getTime();

var days = difference / (1000 * 60 * 60 * 24);

alert(Math.floor(days));

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. 

var referenceDate = new Date();

var beginning2015 = new Date("January 1, 2015");

var difference = referenceDate.getTime() - beginning2015.getTime();

var seconds = difference / 1000;

document.write(seconds);

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 

var date = new Date();

var hours = date.getHours();

date.setHours(hours + 1);

document.write(date);

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 

var date = new Date();

date.setFullYear(date.getFullYear() - 100);

alert(date);

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

var age = prompt("Enter your age:");

var currentYear = new Date().getFullYear();

var birthYear = currentYear - age;

document.write("Your birth year is: " + birthYear);

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: 
// a. Customer Name b. Current Month c. Number of units d. Charges per unit e. Net Amount Payable (within Due Date) f. Late Payment Surcharge g. Gross Amount Payable (after Due Date) Where,

