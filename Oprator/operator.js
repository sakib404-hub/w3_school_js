//? The Assignment Operator = assigns values
//? The Addition Operator + adds values
//? The Multiplication Operator * multiplies values
//? The Comparison Operator > compares values
//? Addition Assignment Operator (+=) adds a value to a variable.

//! The number in arithematic operator is known as operand and the operation to be performed is defined by the operator
//! Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

const x = 10; //assigning 10 to the variable x
const y = 16; //assigning 16 to the variable y
const add = x + y; //adding the two values x and y and assigning the value to the z
const mult = x * y;
const div = x / y;
const mod = x % y; //modulus or known as the reminder
const sub = y - x;
console.log(add);
console.log(mult);
console.log(div);
console.log(mod);
console.log(sub);

const exponential = 2 ** 3; // exponential operator (es2016)
const power = Math.pow(2, 3);
console.log(power);
console.log(exponential);
let number = 40;
console.log(++number); //pre increment
console.log(--number); //pre decrement

const firstName = "Md. Sakib";
const lastName = "Hossen";
const fullName = firstName + " " + lastName; // therefore we understand that + can also be used for concating two string
console.log(fullName);

let text1 = "What a very ";
text1 += "Nice and Beautiful day!!";
console.log(text1);
//? Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".means adding a number and a string will result in a string

//! Comparison operators are used to compare two values and this operator always return true or false
let numberThree = 6;
const result = numberThree > 7;
console.log(result);
