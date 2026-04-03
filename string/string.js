//? String are variable for storing text
//? strings are written with quotes - A js string is 0 or more characters written in quotes

let text = "Shakib Hossen";
console.log(text);

//? Strings created with single or double quotes work the same.there is no difference between the two
//? we can use quotes inside a string, as long as they don't match the quotes surrounding the string

let answer = "it's alright!";
let answer2 = 'How are you doing "John"?';
console.log(answer);
console.log(answer2);

//! Template literal = `` these were introduced in ES6(2016).These are betterly known as the backticks. Backtics allows both the single and the double string
let answer3 = `'Johny jhony' yes papa`;
console.log(answer3);

let length = answer3.length;
console.log(length);

//sometimes we could use the backslash for unsing quotes inside the quotes
let text2 = 'We are the so-called \"Vikings\" from the north.';
console.log(text2);
console.log(text2.length);

let text3 = "it's Alright";
console.log(text3);

//? there are six other escape character also backspace(\b), form feed(\f), newline(\n), carriage return(/r), tab(/t),  vertical tabulator(/v)
//? template string allows strings in multiple line
