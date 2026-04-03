//? trim() -- this method is used to remove white space from a string
//? trim() - method is only used to remove white space from both sides!
let str = "                Hellow world this is vikings!             ";
console.log(str.trim());

//? trimStart() - used to remove white space from the begining only not from the both sides!
//? trimEnd() - used to remove white space from the eneding only not from the both sides!
//===========================================================================================

//?  padStart() - method pads a string from the begining
//? it pads a given string with another stringt or character untill it reaches a given length
//? for padding with a number we need to convert the number into string first

let number = 6;
let string2 = number.toString();
console.log(typeof string2);
str = "5";
console.log(str.padStart(5, "9"));

//? padEnd() - similarly we have another method that is padEnd use to pad string with another string from the ending!
console.log(str.padEnd(5, "7"));

//? repeat() - methods returns a string with a number of copies of a string, returns a new string and does not change the orginal string
str = "Hellow World!";
let result = str.repeat(10);
console.log(result);

//? replace() - this method is used to replace a specified value with another value in a string
//? it does not change the string that it is called on , returns a new string, replace only the first match and also it is case sensative
//! for replacing the case sensetivity we need to use a regular expression with /i(incentive) flag
//! for replacing all the matches we will be needing to use regular expression with /g(global) flag
str = "Please Visit Microsoft";
result = str.replace("Microsoft", "Apple");
console.log(str);
console.log(result);

//? replaceAll() - similar to the replace but it will replace all the matches availabe in the string not the first match only
str = "Hey Doggy dog doggy dog doggy dog";
result = str.replaceAll("dog", "kutta");
console.log(result);

//? split() - A string can be converted to an array with the split method
//? text.split(',') - spliting on the basis of comma
//? text.split(" ") - spliting on the basis of white space and others also there
str = "Hellow how,are you today?";
const result5 = str.split(",");
console.log(result5);
str =
  "I am doing fine nowdays but i need to wake up very early in the morning!";
const result3 = str.split(" ");
console.log(result3);
