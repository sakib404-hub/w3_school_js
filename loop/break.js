//?  The break statement jumps out of the loops and switches
//? The break statement terminates the execution of a loop or a switch statement
//? The break keyword is crucial for preventing a switch "fall-through."
//? Without break, the code will continue to execute the next case blocks (and the default block if present) even if their values do not match the expression.

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log("The number is ----> ", i);
}

let count = 1;
do {
  console.log("Counting");
  count++;
  if (count === 5) {
    break;
  }
} while (count < 10);

//! A label provides a name for a statement, or a block of statements, allowing statements to be referenced to, for program flow control, particularly in loops.
//? A label is an identifier followed by a colon (:).
//? labelname : statement;
//? labelname : { statements }
//? A code block is a block of code between { and } these curley braces

let text = "";
loop1: for (let i = 0; i < 5; i++) {
  loop2: for (let j = 0; j < 5; j++) {
    if (j === 3) {
      break loop1;
    }
    console.log("Hellow!");
  }
}
