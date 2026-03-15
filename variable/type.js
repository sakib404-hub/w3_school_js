//? String - A text of characters enclosed in quotes
//? Number - A number representing mathematical value
//? Bigint - A number representing big large integer
//? Boolean - Representing true or false
//? Object - A collection of key-value pairs of data
//? Undefined - A primitive variable with no assigned value
//? Null - A primitive value representing object absence
//? Symbol - A unique and primitive identifier

let color = "Yellow";
console.log(typeof color);

//number
let weight = 69.5;
console.log(typeof weight);

//bigint
let bigInt = 12345676678656532;
let x = BigInt(12255262145421542212121);
console.log(typeof x);

//boolean
let flag = true;
console.log(typeof flag);

//array object
const cars = ["Saab", "Volvo", "Marcedez Benz"];
console.log(typeof cars);

//object
const person = { firstName: "Sakib's", lastName: "Hossen" };
console.log(typeof person);

//date object
const date = new Date();
console.log(typeof date);

//undefined
let unde;
console.log(typeof unde);

//null
let givenNull = null;
console.log(typeof givenNull);

//symbol
const sym = Symbol();
console.log(typeof sym);

// exponential number
const number = 2e5;
const number2 = 123e-5;
console.log(number);
console.log(number2);
