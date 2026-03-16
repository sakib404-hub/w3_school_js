//? The continue statement skips the current iteration in a loop
//? The remaining code in the iteration is skipped and processing moves to the next iteration
//? break and continue are the only JavaScript statements that can "jump out of" a code block.

for (let i = 1; i < 10; i++) {
  if (i === 5) {
    console.log("It will be skipped!");
    continue;
  }
  console.log("Running in the for loop : ", i);
}

loop1: for (let i = 0; i < 5; i++) {
  loop2: for (let k = 0; k < 5; k++) {
    if (k == 3) {
      console.log("Skipping here!");
      continue loop1;
    }
    console.log("Hellow");
  }
}

//? break - exits a loop or switch
//? continue - skips the current loop iteration
//? return - exits from a function
//? throw - jumps to error handling
