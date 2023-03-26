//run command: tsc sandbox.ts -w
// const character = "mario";
// console.log(character);
// const inputs = document.querySelectorAll("input");
// console.log(inputs);
// inputs.forEach((input) => {
//   console.log(input);
// });
// ------------#3 Type Basics---------------
// let age = 30;
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };
// console.log(circ(10));
// ------------#3 Array and Objects---------------
// let names = ["Anna", "Helen"];
// let mixed = ["Paris", 10, "Sam", true];
// console.log(names);
// mixed.push(12);
// console.log(mixed);
//objects
// let ninja = {
//   name: "mario",
//   isBlackBelt: true,
//   age: 30,
// };
// ------------#3 Explicit and Union Types---------------
// explicit types.initialize a variable and define its value type.
var character;
var age;
var isLoggedIn;
age = 30;
isLoggedIn = true;
// arrays
var ninjas;
// ninjas = [10, 5, 9]; that's not gonna work
ninjas = ["mario", "lugi"];
//or somethimes is it best practice to initialize an array variable with an empty array value, so we can do .push() method on it.
var names = [];
names.push("Sam");
console.log(names);
// union types - means the value could be mixed types.
var mixed = [];
mixed.push("hello");
mixed.push(10);
console.log(mixed);
var uid;
uid = 123;
uid = "123";
// objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
//the best practice is to say explicity what properties this object must have and types of them.
var ninjaTwo;
