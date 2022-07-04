// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
document.write("<h2> Question no.1 </h2>");
var city = prompt("Enter your city name", "Karachi");
city = city.toLowerCase();
if(city == "karachi"){
    alert("Welcome to city of Lights");
    document.write("Welcome to city of Lights");

}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
document.write("<h2> Question no.2 </h2>");
var gender = prompt("Gender","male");
gender = gender.toLowerCase();
if(gender == "male"){
    alert("Good Morning Sir.");
    document.write("Good Morning Sir.");
}
else{
    alert("Good Morning Ma'am.");
    document.write("Good Morning Ma'am.");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
document.write("<h2> Question no.3 </h2>");
var signalClr = prompt("Enter any colour of traffic lights. (Red, Yellow or Green)", "red");
signalClr = signalClr.toLowerCase();
if(signalClr == "red"){
    alert("Must Stop!");
    document.write("Must Stop!");
}
else if(signalClr == "yellow"){
    alert("Ready to move");
    document.write("Ready to move");
}
else{
    alert("Move now");
    document.write("Move now");
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
document.write("<h2> Question no.4 </h2>");
var remFuel = prompt("Please, Enter the remaining fuel of your car (in litres)", "0.15");
if(remFuel < 0.25){
    alert("Please refill the fuel in your car");
    document.write("Please refill the fuel in your car");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}  //condition is true


//b 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} //condition is false


//c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
} // condition 2 and 4 is true.

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} // condition is true


//e
if (true){
    alert("True");
    }

if(false){
    alert("False");
}

//f
if("car" < "cat"){
    alert("car is smaller than cat");
} // condition is true because the car is smaller than cat
// reason: r of car is smaller than t of cat that's why
    
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
document.write("<h2> Question no.6 </h2>");
var subj1, subj2, subj3;
subj1 = prompt("Please enter the name of first subject","English" );
subj2 = prompt("Please enter the name of second subject","Math" );
subj3 = prompt("Please enter the name of third subject","Urdu" );
var subTotMarks = 100;
var obtSub1, obtSub2, obtSub3;
obtSub1 = prompt("Please enter your obtained marks in " + subj1, "94");
obtSub2 = prompt("Please enter your obtained marks in " + subj2, "97");
obtSub3 = prompt("Please enter your obtained marks in " + subj3, "84");
var totalMarks = 300; 
obtSub1 = +obtSub1;
obtSub2 = +obtSub2;
obtSub3 = +obtSub3;
var totObtMarks = obtSub1 + obtSub2 + obtSub3;
var percentage = (totObtMarks / totalMarks ) * 100;
document.write("<h1> Mark Sheet </h1>");
document.write("Total Marks : " + totalMarks + "<br> Marks Obtained : " + totObtMarks + "<br> Percentage : " + percentage + "% <br>");
if(percentage >= 80){
    document.write("Grade : A - one <br> Remarks: Excellent");
}
else if(percentage >= 70){
    document.write("Grade : A <br> Remarks: Good");
}
else if(percentage >= 60){
    document.write("Grade : B <br> Remarks: You need to improve");
}
else{
    document.write("Grade : Fail <br> Remarks: Sorry");
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
document.write("<h2> Question no.7 </h2>");
var secretNo = 7;
var userInputNo = prompt("Guess the secret number between 1 and 10");
userInputNo = +userInputNo;
if(userInputNo == secretNo){
    alert("Bingo! Correct answer");
    document.write("Bingo! Correct answer");
}
else if(userInputNo == (secretNo - 1)){
    alert("Close enough to the correct answer");
    document.write("Close enough to the correct answer");
}
else{
    alert("Sorry! You have entered the incorrect number. Try again.");
    document.write("Sorry! You have entered the incorrect number. Try again.");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
document.write("<h2> Question no.8 </h2>");
var num1 = prompt("Please enter the number whose divisibility by 3 you want to check");
num1 = +num1;
if((num1 % 3) == 0){
    alert("Given number is divisible by 3");
    document.write("Given number is divisible by 3");
}
else{
    alert("Given number is not divisible by 3");
    document.write("Given number is not divisible by 3");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.
document.write("<h2> Question no.9 </h2>");
var num2 = prompt("Please enter the number whose you want to check even or odd");
num2 = +num2;
if((num2 % 2) == 0){
    alert("Given number is an even number");
    document.write("Given number is an even number");
}
else{
    alert("Given number is an odd number");
    document.write("Given number is an odd number");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
document.write("<h2> Question no.10 </h2>");
var temperature = prompt("Please enter today's temperature.");
temperature = +temperature;
if(temperature > 40){
    alert("It is too hot outside.");
    document.write("It is too hot outside.");
}
else if(temperature > 30){
    alert("The weather today is Normal.");
    document.write("The weather today is Normal.");
}
else if(temperature > 20){
    alert("Today's weather is cool.");
    document.write("Today's weather is cool.");
}
else{
    alert("OMG! Today's weather is so Cool.");
    document.write("OMG! Today's weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
document.write("<h2> Question no.11 </h2>");
var num3 = prompt("Calculator \n Please, Enter the first number", "43");
num3 = +num3;
var num4 = prompt("Please, Enter the second number", "32");
num4 = +num4;
var operation = prompt("Please, Enter the operation. (Add, Subtract, Multiply, Divide or Modulus", "Multiply");
operation = operation.toLowerCase();
if(operation == "add"){
    document.write("The addition of " + num3 + " and " + num4 + " is " + (num3 + num4));
    alert("The addition of " + num3 + " and " + num4 + " is " + (num3 + num4));
}
else if(operation == "subtract"){
    document.write("The subtraction of " + num3 + " and " + num4 + " is " + (num3 - num4));
    alert("The subtraction of " + num3 + " and " + num4 + " is " + (num3 - num4));
}
else if(operation == "multiply"){
    document.write("The multiplication of " + num3 + " and " + num4 + " is " + (num3 * num4));
    alert("The multiplication of " + num3 + " and " + num4 + " is " + (num3 * num4));
}
else if(operation == "divide"){
    document.write("The division of " + num3 + " and " + num4 + " is " + (num3 / num4));
    alert("The division of " + num3 + " and " + num4 + " is " + (num3 / num4));
}
else if(operation == "modulus"){
    document.write("The modulus of " + num3 + " and " + num4 + " is " + (num3 % num4));
    alert("The modulus of " + num3 + " and " + num4 + " is " + (num3 % num4));
}
else {
    document.write("Pleae, Enter a valid operation.");
    alert("Pleae, Enter a valid operation.");
}