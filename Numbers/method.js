//? toString() --- this method returns a number as a string.all the number method can be used with any type of number.
//? toString(2) --- method can also take another argument to convert the number into the number of differnt base
let number = 1234;
console.log(number);
console.log(number.toString());
console.log(number.toString(2));

//? toExponential() -- this method returns a string, with a number rounded and written using exponential notation;
number = 9.656;
console.log(number.toExponential(2));
console.log(number.toExponential(4));
// console.log(number.toExponential(4));
console.log(number.toExponential(1));

//? toFixed(), toPrecision() -- this method returns a string , with the number written with a specified number of decimal
//? it is perfect for working with the money
number = 9.65752;
console.log(number.toFixed(1));
console.log(number.toFixed(2));
console.log(number.toFixed(4));
console.log(number.toFixed(5));

//? valueOf() -- returns a number as a number
number = 123;
console.log(number.valueOf());

//? in js a number can be primitive value(typeof = number) or an object (typeof = object)
//? The valueOf() method is used internally in JavaScript to convert Number objects to primitive values
