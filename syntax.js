//declaring variables
let x = 8;
let y = 9; //! (=) signed is used for assigning variable

//? we can decler variable in three ways var, const, let -> this keyword is used to create actions to be performed and it is case sensative
//! var is used in the begging time and nowadays it is not used
//! const and let used in nowdays where when the value is fixed we use const and if it changes frequently we will use let
//! means we will use both the let and const variable

const sum = x + y;
console.log("The summiation of two variable is : ", sum);

//? Js syntax defines two types of values
//! Variables - we used variable values
//! Literals - we use fixed values, the most important syntax rules for literals (fixed values are) - Numbers are written with or without decimals
const a = 10;
const b = 12.5;
console.log("The summiation of two varibale is  : ", a + b);

//! String are text that are written with single or the double quotes
const name = "Md. Sakib Hossen";
const lName = "That is the Concern";
//? in js browser environment there is a built in property window.name that is why we are seeing name as deprecreted we must avoide such situation. EsLint is thinking that we are overriding that property
console.log(name);
console.log(lName);

//? identifiers are name that is given to a variable
//! Must start with a letter, _, or $
//! Can contain digits after the first character
//! Cannot be a reserved keyword (let, const, if, etc.)
//! Are case-sensitive
//! hyphens are not allowed in js , hyphens are reserved for the arithematic substraction

//? A computer program is a list of "instructions" to be "executed" by a computer.These programming instructions are called statements.
//? For best readability, programmers often like to avoid code lines longer than 80 characters.
//? JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.

const c = 5;
const exp = (c + 6) * 10;
console.log(exp);
const catNaming = "Md. Sakib" + " " + "Hossen";
console.log(catNaming);
