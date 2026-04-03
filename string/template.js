const text1 = `Hellow how are doing there?`;
console.log(text1, text1.length);

//? template literal is mostly used becaue it is useful in many cases we can also use the single or the double quotes inside the template string
//? using template literal we can use string in multiple line
//? template string allow interpolation of expression in strings

const name1 = "Shakib Hossen";
const text2 = `Hellow! My name is ${name1}`;
console.log(text2);

const price = 1000;
const vat = 0.25;
const total = `Total price you need to pay ${price + price * vat}`;
console.log(total);
