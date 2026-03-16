//? Boolean is a primitive data types that can only have two values true or false
//? the boolean value of an expression is the basis for all js comparison and condition
//? true and false are boolean data types
const x = 5;
console.log(x === 8);
console.log(x !== 8);
console.log(x > 8);
console.log(x >= 8);
console.log(x < 8);
console.log(x <= 8);
//! above all are the boolean value either true or false
//! Booleans are extensively used in loops to determine conditions for looping.
//! Everything with a 'value' is true
//! Everything withour a value is false

//? 0 is false
//? "" empty string is false
//? undefined - variable decleared but no value assigned is false
//? null - null given by the developer is false
//? NaN - not a number is false is false
//? false - false is a false

for (i = 0; i < 5; i++) {
  console.log("Hellow World!");
}

let j = 1;
while (j < 6) {
  console.log("Hellow Shakib!");
  j++;
}

let y = 0;
console.log(Boolean(y));
y = 10;
console.log(Boolean(y));
y = "";
console.log(Boolean(y));
y = null;
console.log(Boolean(y));
y = false;
console.log(Boolean(y));
