//? The for statement creates a loop with 3 optional expressions
//? for (exp 1; exp 2; exp 3) {  code block to be executed }
//? exp 1 is executed (one time) before the execution of the code block.
//? exp 2 defines the condition for executing the code block.
//? exp 3 is executed (every time) after the code block has been executed.

for (let i = 0; i <= 5; i++) {
  console.log("The Number is  : ", i);
}

//! Collecting the car names from a car array
const cars = ["BMW", "Volvo", "Saab", "Ford"];
console.log(cars);
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
