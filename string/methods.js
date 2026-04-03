const text1 = "Hellow world";
console.log(text1.length);

//? charAt, at - method returns the character at a specified index (position) in a string.The only difference is that at supports the negative indexing while the other does not
//? charCodeAt, codePointAt - finds the code of the character at a particular position

let char = text1.charAt(0);
char = text1.at(0);
char = text1.charCodeAt(0);
char = text1.codePointAt(0);
console.log(char);

//? concat() - joins two or more strings togather
let text2 = "Hellow";
let text3 = "World!";
let alter = text2 + " " + text3;
const text4 = text2.concat(" ", text3);
console.log(text4);
console.log(alter);

//? slice(starting index, ending index)

text2 = "Apple, Banana, Kiwi";
const part = text2.slice(7);
const part2 = text2.slice(14);
const part3 = text2.slice(-12, -6);
const part4 = text2.slice(-2); // if the position is given as the negative therefore the starting  index will be counting from the end
console.log(part);
console.log(part2);
console.log(part3);
console.log(part4);

//? substring() - it is similar in working mechanism with the slice
//? the difference is that start and end values less then 0 are treated as 0
let part5 = text2.substring(6, 19);
console.log(part5);

//? substr() - it is also similar to slice
//? the only difference is that the second perameter specifies the length of the extracted part it is now removed from the js library use slice or substring
part5 = text2.substr(7, 6);
console.log(part5);
part5 = text2.substr(7);
console.log(part5);
part5 = text2.substr(-3);
console.log(part5);

//? toUpperCase() - converting every character to the upper case
//? toLowerCase() - converting every character to the lower case
let str = "Hellow, How are doing this thurshday?";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//? isWellFormed() - method returns true is the string is well formed, otherwise it will return false
//? A string is not well formed if it contains lone surrogates
let text = "Hellow world";
console.log(text.isWellFormed());
text = "Hellow world \uD800";
console.log(text.isWellFormed());

//? toWellFormed() - this is used to remove the lone surrogates from the string and make it a well formed string
