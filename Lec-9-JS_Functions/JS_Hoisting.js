/**
 * Hoisiting is moving of the varibables to the top and getting memory allocated but value is not assigned
 * let const and var get hoisited but only variables with var are accessible hence printing undefiend
 * variables created using let and const are hoisted but are behind tdz (Temporal dead zone)
 * TDZ is where variables are not accessible till they reach declaration, Hence throwing refernce error
 * functions created using function keyword are hoisted and are accessible as they get the defination with allocation
 * arrow functions behave like let, const and var depending how they are declared
 */

console.log(c); //Prints undefined as c is a var and outside tdz

// console.log(d); // Reference Error inside tdz
// console.log(a); // Reference Error inside tdz
var c = 20;
let a;
const d = 30;

const add = sum(); //works sum is a function with function keyword and outside tdz
console.log(add);
// multiply(); // Reference Error inside tdz

console.log("this is a", a); // Will print and work value is undefined
a = 10;

function sum() {
  return 10 + 10;
}

const multiply = () => {
  return 10 + 10;
};
