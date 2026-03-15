//? The const keyword was introduced in ES6 (2015)
//? Variables defined with const cannot be Redeclared
//? Variables defined with const cannot be Reassigned
//? Variables defined with const have Block Scope

//? JavaScript const variables must be assigned a value when they are declared:
const pi = 3.14159265359;

//! pi = pi + 10 - this is incorrect
//! pi = 2.14; - value can not be reassigned

const cars = ["Saab", "Volvo", "Bmw"];
cars.push("Marcedez Benz");
console.log(cars[0]);
console.log(cars);

//? we can change the properties of a const object or array

const car2 = { type: "Fiat v8", model: "500", color: "white" };
car2.color = "red"; // changing a value of the given property
car2.owner = "Md Sakib Hossen"; //adding value
console.log(car2);
