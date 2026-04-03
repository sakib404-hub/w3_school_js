//? there are three types of method for converting a variable to number precision
//? Number() - Returns a number converted from its argument.this is also used for converting a date to a number
//? ParseFloat() -- arses its argument and returns a floating point number
//? parseInt() -- Parses its argument and returns a whole number
let number = true;
console.log(Number(number));
number = "10";
console.log(Number(number));
number = 10.33;
console.log(Number(number));
number = "John";
console.log(Number(number)); //? trying to convert a string to a number which is not legit
let date = new Date();
console.log(date);
console.log(Number(date));

//? parseInt(), parseFloat() -- parses a string and returns a whole number. Spaces are allowed but only the first number is returned.
number = "-10";
console.log(parseInt(number));
number = "  102";
console.log(parseInt(number));
number = "  105 78 37";
console.log(parseInt(number));
number = "10 years";
console.log(parseInt(number));
number = "years 10";
console.log(parseInt(number));
console.log("============================================================");

//? parseFloat() -- parses a string and returns a whole number. Spaces are allowed but only the first number is returned.
number = "-10";
console.log(parseFloat(number));
number = "  102";
console.log(parseFloat(number));
number = "  105 78 37";
console.log(parseFloat(number));
number = "10 years";
console.log(parseFloat(number));
number = "years 10";
console.log(parseFloat(number));
number = 10 / "Sakib";

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.4));
console.log(Number.isNaN(number));
number = -Infinity;
console.log(Number.isFinite(number));
console.log(Number.parseFloat("10.55"));
console.log(Number.parseInt("19"));
number = 10;
console.log(Number.isFinite(number));
console.log(Number.isNaN(123));

//? We can create BigInt in two ways using suffix(n) and BigInt();
//? Numbers are only accurates upto 5 digits
//? BigInt is the second Numeric data type after the  Integer
number = 999999999999999n;
console.log(number);
number = BigInt(999999999999999);
console.log(number);
console.log(typeof number);

//? DATA TYPES
//? Number
//? String
//? BigInt
//? Boolean
//? Undefined
//? Null
//? Symbol
//? Objects
