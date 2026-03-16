//? while loops executes a block of code as long as a specified condition is true
//? the while loop and the do while loop

//! while (condition) { code block to be executed }
//? if the conditional variable is not increased or decreased therefore the loop will never end

let i = 1;
while (i <= 10) {
  console.log("Hellow world-->", i);
  i++;
}

//! do { code block to be executed } while (condition);
//? The do while runs at least once, even if the condition is false from the start.
//? This is because the code block is executed before the condition is tested:

let y = 1;
do {
  console.log("This is a do while loop ----> ", y);
  y++;
} while (y <= 10);

//? collecting names of cars w3 school
const cars2 = ["BMW", "Volvo", "Saab", "Ford"];
let z = 0;
let text = "";
while (cars2[z]) {
  text += cars2[z] + " ";
  z++;
}
console.log(text);
