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