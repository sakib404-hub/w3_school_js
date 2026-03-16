const hour = 16;
if (hour < 18) {
  console.log("Good Day");
} else {
  console.log("Good Evening!");
}

const country = "Bangladesh";
const age = 19;

if (age >= 18) {
  console.log("You can drive!");
} else {
  console.log("You can not drive!");
}

const adult = age >= 18 ? true : false;
adult ? console.log("Adult") : console.log("Minor");

if (country === "Bangladesh") {
  if (age >= 16) {
    console.log("You are young enough to buy cigarates!");
  }
}

if (country === "Bangladesh" && age >= 16) {
  console.log("Hellow Beautiful");
}

const time = 17;

if (time < 10) {
  console.log("Good Morning");
} else if (time < 18) {
  console.log("Having a good day!");
} else {
  console.log("Good Evening!");
}

const randomNumber = Math.random() * 100;
console.log(randomNumber);

const isMember = false;
const discount = isMember ? 0.2 : 0;
console.log(discount);
