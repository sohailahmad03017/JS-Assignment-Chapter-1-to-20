// 1. Declare an empty array using JS literal notation to store
// student names in future.
// document.write("<h2> Question no.1 </h2>");
var empArr = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
// document.write("<h2> Question no.2 </h2>");
var empArrObj = {};

// 3. Declare and initialize a strings array.
// document.write("<h2> Question no.3 </h2>");
var strArr = ["Sohail", "Ahmad", "Mehar"];

// 4. Declare and initialize a numbers array.
// document.write("<h2> Question no.4 </h2>");
var numArr = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
// document.write("<h2> Question no.5 </h2>");
var booArr = [true, false];

// 6. Declare and initialize a mixed array.
// document.write("<h2> Question no.6 </h2>");
var mixArr = ["Sohail", 3, true, undefined];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
document.write("<h2> Question no.7 </h2>");
var qualArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("<h1> Qualification </h1>");
document.write("<ol>");
for(i = 0; i < qualArr.length ; i++){
    document.write("<li>" + qualArr[i] + "</li>");
}
document.write("</ol>");

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
document.write("<h2> Question no.8 </h2>");
var stdNames = ["Ahmad", "Ali", "Zeeshan"];
var stdScores = [404, 377, 432];
for(i = 0; i < stdNames.length ; i++){
    document.write("Socres of <b>" + stdNames[i] + "</b> is " + stdScores[i] + ". Percentage : " + (stdScores[i] * 100 / 500) + "% <br>");
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
document.write("<h2> Question no.9 </h2>")

document.write("<h4> Original Array </h4>");
var colors = [" Purple", " Cyan", " Skyblue", " Tea Pink"];
document.write(colors + "<br><br>");

document.write("<h4> Adding one color at the start of the array </h4>");
colors.unshift(prompt("Please, Enter the color that's you want to add at the start of the array.", " Red"));
document.write(colors + "<br><br>");

document.write("<h4> Adding one color at the end of the array </h4>");
colors.push(prompt("Please, Enter the color that's you want to add at the end of the array.", " Blue"));
document.write(colors + "<br><br>");

document.write("<h4> Adding two colors at the start of the array </h4>");
var color1 = prompt("If you want to add more than one colors that's you want to add at the start of the array. \n First enter the first number.", " Pink");
var color2 = prompt("Now, Enter the second number.", " Orange");
colors.unshift(color1, color2);
document.write(colors + "<br><br>");

document.write("<h4> Deleting one color from the start of the array </h4>");
colors.shift();
document.write(colors + "<br><br>"); 

document.write("<h4> Deleting one color from the end of the array </h4>");
colors.pop();
document.write(colors + "<br><br>"); 

document.write("<h4> Adding one color at the user's choiced index of the array </h4>");
var colorIndex = prompt("Please, Enter the index at which you want to add color.", "5");
var colorIndex = +colorIndex;
var coloratIndex = prompt("Please, Enter the color name that you want to add at index " + colorIndex, " Brown")
colors.splice(colorIndex, 0, coloratIndex);
document.write(colors + "<br><br>");

document.write("<h4> Deleting colors at the user's choiced index of the array </h4>");
var colorIndexDel = prompt("Please, Enter the index at which you want to delete color.", "2");
var colorIndexDel = +colorIndexDel;
var elementsToDel = prompt("Please, Enter the number of colors that you want to delete from the index" + colorIndexDel, "3")
elementsToDel = +elementsToDel;
colors.splice(colorIndexDel, elementsToDel);
document.write(colors + "<br><br>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var scoresOfStds = [432, 404, 464, 462, 377, 366];
document.write("<h2> Question no.10 </h2>");
document.write("Unordered Scores of Students : " + scoresOfStds);
scoresOfStds.sort();
document.write("<br><br> Ordered Scores of Students : " + scoresOfStds);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
document.write("<h2> Question no.11 </h2>");
var cityNames = ["Karachi", "Hyderabad", "Lahore", "Akhtar Abad", "Pattoki", "Khudiyan"];
document.write(" <b> Cities List : </b> <br>" + cityNames)
var selectedCities = cityNames.slice(2, 5);
document.write("<br><br> <b> Selected Cities List : </b> <br>" + selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
document.write("<h2> Question no.12 </h2>");
var arr = ['This ', 'is ', 'my ', ' cat.']
document.write("<h4> Array : </h4>");
document.write(arr);
var concatString = arr[0] + arr[1] + arr[2] + arr[3];
document.write("<h4> String : </h4>");
document.write(concatString);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
document.write("<h2> Question no.13 </h2>");
var devices = [];
devices.push('keyboard');
devices.push('mouse');
devices.push('printer');
devices.push('monitor');
document.write("<h3> Devices </h3>");
document.write(devices + "<br>");
for(var i = 0; i < devices.length; i++){
    document.write("<br> <b> Out: </b> <br>");
    document.write(devices[i]);
}

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
document.write("<h2> Question no.14 </h2>");
var devices = [];
devices.unshift('keyboard');
devices.unshift('mouse');
devices.unshift('printer');
devices.unshift('monitor');
document.write("<h3> Devices </h3>");
document.write(devices + "<br>");
for(var i = 0; i < devices.length; i++){
    document.write("<br> <b> Out: </b> <br>");
    document.write(devices[i]);
}

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
document.write("<h2> Question no.15 </h2>");
document.write("Sir ny kha ha k ye nhi krna");











