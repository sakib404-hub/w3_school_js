//? The let keyword was introduced in ES6(2015)
//? variables decleared with let is block scoped, must be decleared before used, can not be redeclered
//? before es6, js do not have any block scoped
//! js only had global scope and function scope
//! ES6 introduced the two new JavaScript keywords: let and const.

function addition() {
  let x = 7;
  var fhu = 9;
  let y = 8;
  console.log(x + y);
}
addition();

//? x, y can not be used outside the function
//? fhu can be used outside the function
//? let and const does not bind to this.
//? let and const are not hoisted.

//! variables defined with var are hoisted to the top and can be initialized at any instance meaning we can use the variable before declearing it
