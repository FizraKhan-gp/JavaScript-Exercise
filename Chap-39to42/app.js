// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

function power(a,b){
    return a ** b
}
console.log(power(2,3));

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not. Leap years ..., 2012, 2016, 2020, … 


// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions 

function semiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
console.log(semiPerimeter(3, 4, 5));
function area(a, b, c) {
    var s = semiPerimeter(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(area(3, 4, 5));

// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction. 

function average(a, b, c) {
    return (a + b + c) / 3;
}

function percentage(a, b, c) {
    return ((a + b + c) / 300) * 100;
}

function mainFunction() {
    var marks1 = 80;
    var marks2 = 70;
    var marks3 = 90;

    console.log("Average: " + average(marks1, marks2, marks3));
    console.log("Percentage: " + percentage(marks1, marks2, marks3) + "%");
}

mainFunction();
 
// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now. 
 

function myIndexOf(text, character) {
    for (var i = 0; i < text.length; i++) {
        if (text[i] === character) {
            return i;
        }
    }

    return -1;
}

console.log(myIndexOf("Hello", "l"));

// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long. 
 

function removeVowels(text) {
    var result = "";

    for (var i = 0; i < text.length; i++) {
        var ch = text[i].toLowerCase();

        if (ch !== "a" && ch !== "e" &&
            ch !== "i" && ch !== "o" && ch !== "u") {
            result += text[i];
        }
    }

    return result;
}

console.log(removeVowels("Hello World"));

// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui. 

function countVowels(text) {
    var count = 0;

    for (var i = 0; i < text.length - 1; i++) {
        var pair = text[i].toLowerCase() + text[i + 1].toLowerCase();

        switch (pair) {
            case "ae":
            case "ai":
            case "ao":
            case "au":
            case "ea":
            case "ei":
            case "eo":
            case "eu":
            case "ia":
            case "ie":
            case "io":
            case "iu":
            case "oa":
            case "oe":
            case "oi":
            case "ou":
            case "ua":
            case "ue":
            case "ui":
            case "uo":
                count++;
                break;
        }
    }

    return count;
}

console.log(countVowels("Pleases read this application and give me gratuity"));

// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters. 

function meters(km) {
    console.log("Meters: " + km * 1000);
}

function feet(km) {
    console.log("Feet: " + Math.floor (km * 3280.84));
}

function inches(km) {
    console.log("Inches: " + Math.floor (km * 39370.08));
}

function centimeters(km) {
    console.log("Centimeters: " + km * 100000);
}

var distance = 5;

meters(distance);
feet(distance);
inches(distance);
centimeters(distance);

// 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour. 

function overtime(hours) {
    if (hours > 40) {
        var extraHours = hours - 40;
        var pay = extraHours * 12;

        console.log("Overtime Pay: Rs. " + pay);
    } else {
        console.log("No Overtime");
    }
}

overtime(45);

// 10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. 

var amount = 580;

var notes100 = Math.floor(amount / 100);
amount = amount % 100;

var notes50 = Math.floor(amount / 50);
amount = amount % 50;

var notes10 = Math.floor(amount / 10);

console.log("100 notes: " + notes100);
console.log("50 notes: " + notes50);
console.log("10 notes: " + notes10);
