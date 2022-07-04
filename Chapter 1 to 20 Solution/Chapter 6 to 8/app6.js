// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10;
document.write("<h2> Question no.1 </h2>");
document.write("Result: <br> The value of a is : " + a + "<br> ............................................... <br>");
document.write("<br> The value of ++a is: "+ (++a) + "<br> Now the value of a is: " + a);
document.write("<br><br><br> The value of a++ is: "+ (a++) + "<br> Now the value of a is: " + a);
document.write("<br><br><br> The value of --a is: "+ (--a) + "<br> Now the value of a is: " + a);
document.write("<br><br><br> The value of a-- is: "+ (a--) + "<br> Now the value of a is: " + a);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2;
var b = 1;
var result1 = --a - --b + ++b + b--;
document.write("<h2> Question no.2 </h2> a is " + a + "<br> b is " +  b +"<br> result is " + result1);

document.write("<h3> Explanation of output at each stage </h3>");
document.write("<b> At --a </b> <br><br> first the value of a is decremented and then used in the expression, So 1 is placed at this point and the value of a is 1 and the value of b is 1 <br><br><br>");
document.write("<b> At --a - --b </b> <br><br> first the value of b is decremented and then used in the expression, So 1 - 0 is placed at this point and the value of a is 1 and the value of b is 0 <br><br><br>");
document.write("<b> At --a - --b + ++b </b> <br><br> first the value of b is incremented and then used in the expression, So 1 - 0 + 1 is placed at this point and the value of a is 1 and the value of b is 1 <br><br><br>");
document.write("<b> At --a - --b + ++b + b-- </b> <br><br> first the value of b is used in expression and then incremented, So 1 - 0 + 1 + 1 is placed at this point and the value of a is 1 and the value of b is 2 <br><br><br>");

// 3. Write a program that takes input a name from user &
// greet the user.
document.write("<h2> Question no.3 </h2>");
var name = prompt("Welcome to Our Website \n\n Please, Enter your name");
alert(name + " Welcome to our online Store.");
document.write(name + " Welcome to our Website.");

document.write("<h2> Question no.4 is missed from the assignment.</h2>"); 

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
var table = prompt("Please, Enter the number whose table do you want","5");table = +table;
alert("Table is written in the main content of webpage below the heading of Question no.5");
document.write("<h2> Question no.5 </h2> <br> <h3> Table of " + table + "</h3>");
for(var i = 1; i <= 10 ; i++){
    document.write(table + " x " + i + " = " + (i*table) + "<br>");
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
// result in browser like this.(Hint: user table)
var subj1, subj2, subj3;
subj1 = prompt("Please enter the name of first subject","English" );
subj2 = prompt("Please enter the name of second subject","Math" );
subj3 = prompt("Please enter the name of third subject","Urdu" );
var subTotMarks = 100;
var obtSub1, obtSub2, obtSub3;
obtSub1 = prompt("Please enter your obtained marks in " + subj1);
obtSub2 = prompt("Please enter your obtained marks in " + subj2);
obtSub3 = prompt("Please enter your obtained marks in " + subj3);
var totalMarks = 300; 
obtSub1 = +obtSub1;
obtSub2 = +obtSub2;
obtSub3 = +obtSub3;

var totObtMarks = obtSub1 + obtSub2 + obtSub3;

document.write("<h2> Question no.6 </h2>");
// table 
document.write("<table border='1px' cellspacing = '0px' cellpadding = '3px'>");
//first row
document.write("<tr> <b>" +
"<td> <b> Subject </b> </td> " +
"<td> <b>Total Marks</b> </td> " +
"<td> <b>Obtained Marks</b> </td> " +
"<td> <b>Percentage</b> </td> "
 + " </tr>");
//2nd row
 document.write("<tr>");
 document.write("<td>" + subj1 + "</td>");
 document.write("<td>" + subTotMarks + "</td>");
 document.write("<td>" + obtSub1 + "</td>");
 document.write("<td>" + (obtSub1*100/subTotMarks) + "% </td>");
 document.write("</tr>");
//3rd row
document.write("<tr>");
document.write("<td>" + subj2 + "</td>");
document.write("<td>" + subTotMarks + "</td>");
document.write("<td>" + obtSub2 + "</td>");
document.write("<td>" + (obtSub2*100/subTotMarks) + "% </td>");
document.write("</tr>");
//4th row
document.write("<tr>");
document.write("<td>" + subj3 + "</td>");
document.write("<td>" + subTotMarks + "</td>");
document.write("<td>" + obtSub3 + "</td>");
document.write("<td>" + (obtSub3*100/subTotMarks) + "% </td>");
document.write("</tr>");
//5th row
document.write("<tr>");
document.write("<td> </td>");
document.write("<td><b>" + totalMarks + "</b></td>");
document.write("<td><b>" + totObtMarks + "</b></td>");
document.write("<td><b>" + (totObtMarks*100/totalMarks) + "%  </b></td>");
document.write("</tr>");

document.write("</table>");


