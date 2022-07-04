// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
var multArr = [
    [ ],
    [ ],
    [ ]
];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
document.write("<h2> Question no.2 </h2>")
var multiDimArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
for(var i = 0; i < multiDimArr.length; i++){
    for(var j = 0; j < 4; j++ ){
        document.write(multiDimArr[i][j] + " ");
    }
    document.write("<br>");
}

// 3. Write a program to print numeric counting from 1 to 10.
document.write("<h2> Question no.3 </h2>");
for(var i = 1; i <= 10; i++){
    document.write(i + "<br>");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
document.write("<h2> Question no.4 </h2>");
var table = prompt("Please, Enter the number whose table is required", "12");
table = +table;
var maxLim = prompt("Please, Enter the maximum limit of table", "15");
maxLim = +maxLim;
document.write("<h3> Table of " + table +"</h3>")
for(var i = 1; i <= maxLim; i++){
    document.write(table + " x " + i + " = " + (i * table) + "<br>");
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“Apple”, “Banana”, “Mango”, “range”,
// “strawberry”]
document.write("<h2> Question no.5 </h2>");
var fruits = ["Apple", "Banana", "Mango", "Orange", "Strawberry"];
for(var i = 0; i < fruits.length; i++){
    document.write(fruits[i] + "<br>");
}
document.write("<br>")
for(var i = 0; i < fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + ".<br>");
}

// 6. Generate the following series in your browser. See
// example output.
document.write("<h2> Question no.6 </h2>");
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<h3> Counting : </h3>")
for(var i = 1; i <= 15; i++){
    document.write(i + ", ");
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<h3>  Reverse Counting : </h3>");
for(var i = 10; i >= 1; i--){
    document.write(i + ", ");
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<h3>  Even : </h3>");
for(var i = 0; i <= 20 ; i++){
    if(i % 2 == 0){
        document.write(i + ", ");
    }
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<h3>  Odd : </h3>");
for(var i = 0; i <= 20 ; i++){
    if(i % 2 != 0){
        document.write(i + ", ");
    }
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h3>  Even : </h3>");
for(var i = 1; i <= 20 ; i++){
    if(i % 2 == 0){
        document.write(i + "k, ");
    }
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. 
document.write("<h2> Question no.7 </h2>");
var items = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInp = prompt("Welcome to Desi Bakery. What do you want to order Sir/Ma'am.");
var userInp1 = userInp.toLowerCase();
var available = 0;
for(var i = 0; i < items.length; i++){
    if(userInp1 == items[i]){
        document.write(userInp + " is <b> available </b> at index " + i + " in our Bakery.");
        var available = 1;
    }
}
if(available == 0){
    document.write("We are sorry. " + userInp + " is <b> not available </b> at our store.");
}

// 8. Write a program to identify the largest number in the
// given array.
document.write("<h2> Question no.9 </h2>");
A = [24, 53, 78, 91, 12]
var max = Math.max(...A);
document.write( "The largest number is " +max);

// 9. Write a program to identify the smallest number in the
// given array.
document.write("<h2> Question no.9 </h2>");
A = [24, 53, 78, 91, 12]
var min = Math.min(...A);
document.write( "The smallest number is" + min);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
document.write("<h2> Question no.10 </h2>");
for(var i = 1;  i <= 100; i++){
    if(i % 5 == 0){
        document.write(i + ", ");
    }
}
