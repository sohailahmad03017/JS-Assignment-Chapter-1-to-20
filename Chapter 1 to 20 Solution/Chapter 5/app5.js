// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
var num1 = 45;
var num2 = 4;
var sum = num1 + num2;
document.write("<h2>Question no.1 </h2>");
document.write("Sum of " + num1 + " and " + num2 +" is " + sum + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var subtraction = num1-num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;
document.write("<h2>Question no.2 </h2>");
document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtraction + "<br>");

document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiplication + "<br>");

document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br>");

document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
document.write("<h2>Question no.3 </h2>");
var num3;
document.write("Value after declaration is : " + num3);
var num3 = 5;
document.write(" <br> Initial value is : " + num3);
num3++;
document.write(" <br> Value after increment is : " + num3 );
num3 += 5; 
document.write("<br> Value after is : " + num3);
num3--;
document.write("<br> Value after decrement is : " + num3);
document.write("<br> The remainder is : " + num3 % 3);

 // 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.
var costOfMovie = 600;
document.write("<h2> Question no.4 </h2>");
document.write("Total cost to buy 5 tickets to a movie is " + costOfMovie * 5 + "PKR")

// 5. Write a script to display multiplication table of any
// number in your browser.
document.write(" <h2> Question no.5 </h2>");
for(var i = 1; i <= 10; i++){
    document.write("4 x " + i + " = " + (i * 4) + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”
var celcius, fahrenheit, toCelcius, toFahrenheit;
celcius = 25;
fahrenheit = 70;
toFahrenheit = (celcius * (9/5)) + 32;
toCelcius = (fahrenheit - 32) * (5/9);
document.write("<h2> Question no.6 </h2>");
document.write(celcius + "<sup>o</sup>C is " + toFahrenheit +"<sup>o</sup>F <br> ");
document.write(fahrenheit + "<sup>o</sup>F is " + toCelcius +"<sup>o</sup>C");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var price1 = 650;
var price2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shipChrg = 100;
var totalCost = (price1 * quantity1) + (price2 * quantity2) + shipChrg

document.write("<h2> Question no.7 </h2>");
document.write("<h1> Shopping Cart </h1>");
document.write("<br> Price of item 1 is " + price1);
document.write("<br> Quantity of item 1 is " + quantity1);
document.write("<br> Price of item 2 is " + price2);
document.write("<br> Quantity of item 2 is " + quantity2);
document.write("<br> Shipping Charges are " + shipChrg);
document.write("<br><br> Total cost of your order is " + totalCost);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
var totalMarks = 1100; 
var obtainedMarks = 974;
var percentage = (obtainedMarks/totalMarks) * 100;

document.write("<h2> Question no.8 </h2>");
document.write(" Total Marks : " + totalMarks);
document.write("<br> Obtained Marks : " + obtainedMarks);
document.write("<br> Percentage : " + percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
USDollar = 104.80;
saudiRiyal = 28;
totalInPkr = (10 * USDollar) + (25 * saudiRiyal);
document.write("<h2> Question no.9 </h2>");
document.write("<h1> Currency in PKR </h1>");
document.write("Total Currency in PKR: " + totalInPkr);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var num4 = 12;
var result = (((num4 + 5) * 10) / 2);
document.write("<h2> Question no.10 </h2>");
document.write("The final result after all these calculation is : " + result);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
var currentYear = 2022;
var birthYear = 2001;
document.write("<h2> Question no.11 </h2>");
document.write("<h1> Age Calculator </h1>");
document.write("Current Year : " + currentYear + " <br> Birth Year : " + birthYear + "<br> Your age is : " + (currentYear - birthYear));

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius = 20;
const pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("<h2> Question no.12 </h2>");
document.write("<h1> The Geometrizer </h1>");
document.write("Radius of a circle is : " + radius + "cm <br>");
document.write("Circumference of this circle is : " + circumference + "cm <br>");
document.write("Area of this circle is : " + area + "cm<sup>2</sup> ");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”
var favSnack = "Lays";
var currentAge = 21;
var maxAge = 45;
var estimatedAmountPerMonth = 10;
var iWillEat = (maxAge - currentAge) * 12 * estimatedAmountPerMonth;
document.write("<h2> Question no.13 </h2>");
document.write("<h1> The Lifetime Supply Calculator </h1>");
document.write("My favourite snack : " + favSnack + "<br> My current Age : " + currentAge + "<br> My estimated maximum age : " + maxAge + "<br> Amount of snacks per month : "+ estimatedAmountPerMonth + "<br> I will need "+ iWillEat + " to last me until the ripe old age of "+ maxAge);
