// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
document.write("<h2> Question no.1 </h2>");
var userInputChar = prompt("Please, Enter a character e.g 3, d or C.", "10");
asci = userInputChar.codePointAt();
if( (asci >= 65) && (asci <= 90) ){
    document.write(userInputChar + " is an Upper case Letter.");
    alert(userInputChar + " is an Upper case Letter.");
}
else if( (asci >= 97) && (asci <= 122) ){
    document.write(userInputChar + " is a Lower case Letter.");
    alert(userInputChar + " is a Lower case Letter.");
}
else{
    document.write(userInputChar + " is a number.");
    alert(userInputChar + " is a number.");
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
document.write("<h2> Question no.2 </h2>");
var num1, num2;
num1 = prompt("Please, Enter the first number whose equality you want to check", "83");
num1 = +num1;
num2 = prompt("Please, Enter the second number whose equality you want to check", "35");
num2 = +num2;
if(num1 > num2){
    document.write(num1 + " is greater than " + num2);
    alert(num1 + " is greater than " + num2);
}
else if(num1 < num2){
    document.write(num1 + " is smaller than " + num2);
    alert(num1 + " is smaller than " + num2);
}
else{
    document.write(num1 + " is equal to " + num2);
    alert(num1 + " is equal to " + num2);
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
document.write("<h2> Question no.3 </h2>");
var num3;
num3 = prompt("Please, Enter one number.", "-3");
num3 = +num3;
if(num3 > 0){
    document.write(num3 + " is a Positive Number.");
    alert(num3 + " is Positive Number.");
}
else if(num3 < 0){
    document.write(num3 + " is a Negative Number. ");
    alert(num3 + " is a Negative Number. ");
}
else{
    document.write(num3 + " is Zero.");
    alert(num3 + " is Zero.");
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise    
document.write("<h2> Question no.4 </h2>");
var inputChar = prompt("Please, Enter a single character");
var inputChar1 = inputChar;
var inputAsci = inputChar.codePointAt();
inputChar = inputChar.toLowerCase();
if((inputChar == "a") || (inputChar == "e") || (inputChar == "i") || (inputChar == "o") || (inputChar == "u")){
    document.write("True, " + inputChar +  " is a Vowel.");
    alert("True, " + inputChar1 +  " is a Vowel.");
}
else if(inputAsci >= 97 && inputAsci <= 122){
    document.write("False, this is a Consonent.");
    alert("False, this is a Consonent.");
}
else{
    document.write("Please, Enter the correct Input");
    alert("Please, Enter the correct Input");
}
 
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise
document.write("<h2> Question no.5 </h2>")
var password = "Pakistan123";
var inputPassword = prompt("Please, Enter your Password");
if(inputPassword == ""){
    alert("Please, Enter your Password");
    document.write("Please, Enter your Password");
}
else if(inputPassword == password){
    alert("Correct! The password you entered matches the original password.");
    document.write("Correct! The password you entered matches the original password.");
}
else{
    alert("Incorrect Password");
    document.write("Incorrect Password");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
document.write("<h2> Question no.6 </h2>")
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";}
else{
    greeting = "Good evening";
}
document.write(greeting);

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
document.write("<h2> Question.7 </h2>");
var inputTime = prompt("Please input current time e.g 1900", "1900");
if((inputTime >= 0000) && (inputTime < 1200) ){
    alert("Good Morning!");
    document.write("Good Morning!");
}
else if((inputTime >= 1200) && (inputTime < 1700) ){
    alert("Good Afternoon!");
    document.write("Good Afternoon!");
}
else if((inputTime >= 1700) && (inputTime < 2100) ){
    alert("Good Evening!");
    document.write("Good Evening!");
}
else if((inputTime >= 2100) && (inputTime < 2359) ){
    alert("Good Night");
    document.write("Good Night");
}
else{
    alert("Please, Enter correct time.");
    document.write("Please, Enter correct time.");
}

