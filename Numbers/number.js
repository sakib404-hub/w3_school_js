//? js has only one type of number.Numbers can be written with or without decimals
let number = 10;
console.log(`Number : `, number);
number = 10.5;
console.log("Number with fraction is : ", number);

//? we can also use exponential number with (e)
number = 123e4;
console.log(number);
number = 123e-4;
console.log(number);

//? js number is always 64bit floating point
//? unlike other programming language js do not contain different types of integer like short, long , floating point, decimal
//? JvaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
//? the maximum number of the decimal is 17
number = 999999999999999;
console.log("The fiften digit number is : ", number);
number = 9999999999999999;
console.log("Sixteen Digit number is : ", number);

number = 0.1 + 0.2;
console.log(number);
number = (0.2 * 10 + 0.1 * 10) / 10;
console.log(number);

//? Adding Number and String togather
//? Addition(+) operator is used for both addition or concatenation of string
console.log(10 + 20);
console.log("10" + "20");
//? Addition of number and a string will result in a string
console.log("Addition of a number and a string : ", 10 + "20");
console.log("The result is : " + 10 + 20); //! string  + number + number = the output will be string
console.log(10 + 20 + "30"); //! number  + number, then + string keep in mind that js works from left to right

//? other than addition(+) operator js will always try to convert strings to numbers in all numeric operation
let numberOne = "100";
let numberTwo = "10";
const division = numberOne / numberTwo;
console.log("The division of the two string is : ", division);
console.log("Multiplication of the two string is : ", numberOne * numberTwo);
console.log("Modulus of the two string is : ", numberTwo % numberOne);
console.log("Substraction of the two number is : ", numberOne - numberTwo);
console.log(100 / "Apple"); //? the string is non numeric . NaN is a reserved keyword in js indicating that a number is not a legal number
//? trying to do arithematic with a non-numeric string will result in a NaN
//? if we use NaN while doing mathematical operation the result will be also a NaN
isNaN(100 / "Apple");
isNaN(10);
console.log(typeof NaN);

//? Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
console.log(Infinity);
let num = 5;
while (num != Infinity) {
  num *= num;
  console.log("Hellow");
}
console.log("Division by zero will also return as : ", 9 / 0);
console.log(typeof Infinity);

//? Hexadecimal
const myNumber = 32;
console.log(myNumber.toString());
console.log(myNumber.toString(16));
console.log(myNumber.toString(8));
console.log(myNumber.toString(2));
