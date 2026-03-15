//? (=) The Simple Assignment Operator assigns a simple value to a variable.
//? (+=) The Addition Assignment Operator adds a value to a variable.
//? (-=) The Subtraction Assignment Operator subtracts a value from a variable.
//? (*=) The Multiplication Assignment Operator multiplies a variable.
//? (**=) The Exponentiation Assignment Operator raises a variable to the power of the operand.
//? (/=) The Division Assignment Operator divides a variable.
//? (%=) The Remainder Assignment Operator assigns a remainder to a variable.

let x = 10;
x += 7;
console.log(x);
x -= 2;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);
x %= 7;
console.log(x);

//! String assignments

let text = "Hellow world!";
text += " Having a very nice day upto this time!";
console.log(text);

//! Logical Operators
//? (&&=) Logical and operators if the first value is true then the second value is assigned
//? The &&= operator is an ES2020 feature.

let numOne = 10;
let numTwo = (numOne &&= 30);
console.log(numTwo);

//? (||=) Logical Or operator if the first value is false therefore the second value is assigned
//? The ||= operator is an ES2020 feature.

let flag = false;
let numberThree = (flag ||= 47);
console.log(flag);

//? (??=) The Nullish coalescing assignment operator
//? if the first value is null or  undefined then the second value is used

let numFour;
numFour ??= 12;
console.log(numFour);
let numFive = null;
numFive ??= 17;
console.log(numFive);

//! (...) Spread Operator is used to split the iterable into individuals elements
