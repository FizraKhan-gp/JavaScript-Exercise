    // ---------Chapter # 17 to 20--------
// 1. Declare and initialize an empty multidimensional array. (Array of arrays) 
var arr = [[], []];

console.log(arr);

// 2. Declare and initialize a multidimensional array representing the following matrix: 

var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.log(arr);

// 3. Write a program to print numeric counting from 1 to 10. 

for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// 4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user. 

var number = prompt("Enter table number:");
var length = prompt("Enter table length:");

for (var i = 1; i <= length; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 

document.write("Counting: ");

for (var i = 1; i <= 15; i++) {
    document.write("<br>" + i + ", <br>");
}

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 

document.write("Reverse Counting: ");

for (var i = 10; i >= 1; i--) {
    document.write("<br>" + i + ", <br>");
}

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 

document.write("Even: ");

for (var i = 0; i <= 20; i += 2) {
    document.write("<br>" +i + ", <br>");
}

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 

document.write("Odd: ");

for (var i = 1; i <= 19; i += 2) {
    document.write("<br>" + i + ", <br>");
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write("Series: ");

for (var i = 2; i <= 20; i += 2) {
    document.write(`<br> ${i}k, <br>`);
}

//7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not. Example:  

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt("Enter item to search:");

var flag = false;

for (var i = 0; i < A.length; i++) {
    if (A[i] === search) {
        flag = true;
        console.log(`${search} is available at index ${i} in our bakery.`);
    }
}

if (flag == false) {
    console.log(`We are sorry, ${search} is not available in our bakery.`);
}

// 8. Write a program to identify the largest number in the given array. 
// A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];

var largest = A[0];  // largest = 24

for (var i = 1; i < A.length; i++) {

    if (A[i] > largest) {
        largest = A[i];
        console.log("Largest number is: " + largest);
    }
}


// 9. Write a program to identify the smallest number in the given array. 
// A = [24, 53, 78, 91, 12]

var A = [24, 53, 78, 91, 12];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {

    if (A[i] < smallest) {
        smallest = A[i];
        console.log("Smallest number is: " + smallest);
    }
}



// 10. Write a program to print multiples of 5 ranging 1 to 100.

for (var i = 5; i <= 100; i += 5) {
    document.write(i + "<br>");
}

var sum = 0;
 for (var i = 1; i <= 4; i++) { 
    console.log(sum = sum + i); //0+1=1 1+2=3 3+3=6 6+4=10
 }

 var arr = [3, 6, 9]; for (var i = 0; i < arr.length; i++) { arr[i] = arr[i] + 1; } console.log(arr[0]);

//  var rows = 5;

// // Outer loop: Controls the lines (rows)
// for (var i = 1; i <= rows; i++) {
//     var line = "";

//     // Inner Loop 1: Adds the decreasing leading spaces
//     for (var j = 1; j <= rows - i; j++) {
//         line += " ";
//     }

//     // Inner Loop 2: Adds the increasing asterisks
//     for (var k = 1; k <= i; k++) {
//         line += "*";
//     }

//     console.log(line);
// }


// for (var i = 5; i >= 0; i--) { //3
//     for(var j=1; j<=i; j++){ //1
//         document.write("*")
//     }
    
//     document.write("<br>")
// }


// // Outer loop: Starts at 5 spaces/slots and counts down to 1
// for (var i = 5; i >= 1; i--) { 
    
//     // Inner Loop 1: Prints the spaces (Starts at i-1 and decreases)
//     for (var j = 1; j <= i; j--) {
//         document.write("*");
//     }
    
//     // Moves to the next line in HTML
//     document.write("<br>");
// }

for (var i = 1; i <= 5; i++) {

    // spaces
    for (var j = 1; j <= 5 - i; j++) {
        document.write("&nbsp;");
    }

    // stars
    for (var k = 1; k <= (2 * i - 1); k++) {
        document.write("*");
    }

    document.write("<br>");
}