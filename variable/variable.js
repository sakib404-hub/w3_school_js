//? variable = data container (js variables are data container for data);
//! in js variable are decleared using let, const, var, and automatically
let x = 5;
let y = 5;
console.log(x + y);

const a = 10;
const b = 13;
console.log(a + b);

//? we should always use const while declearing varibale that will not change in future
const carName = "Marcedez Benz ||";
console.log(carName);

//? we should always use let while declearing variable while the varible value changes time to time
const price1 = 100;
const price2 = 120;
let totalPrice = price1 + price2;
console.log(totalPrice);

//? var keyword was used before 2015 it is not recomended right now while developing a website we should use let or const while declearing varibale
//? js variable can hold 8 data types like number, float, string, arr, null.
//? Numbers are written without quotes and strings are written inside quotes
//? we can declear many variable in one statement separated by commas

const pi = 3.1415;
const string = "Are you well?";
console.log(pi, string);
if (pi === 3.1415) {
  console.log("The value is true");
} else {
  console.log("The value is not true");
}
