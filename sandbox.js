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
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
// age = 30;
// isLoggedIn = true;
// arrays
// let ninjas: string[];
// ninjas = [10, 5, 9]; that's not gonna work
// ninjas = ["mario", "lugi"];
//or somethimes is it best practice to initialize an array variable with an empty array value, so we can do .push() method on it.
// let names: string[] = [];
// names.push("Sam");
// console.log(names);
// union types - means the value could be mixed types.
// let mixed: (string | number)[] = [];
// mixed.push("hello");
// mixed.push(10);
// console.log(mixed);
// let uid: string | number;
// uid = 123;
// uid = "123";
// // objects
// let ninjaOne: object;
// ninjaOne = { name: "yoshi", age: 30 };
//the best practice is to say explicity what properties this object must have and types of them.
// let ninjaTwo: {
//   name: string;
//   age: number;
//   beltColour: string;
// };
// ------------#6 Dynamic (Any)Types---------------
var age = 25;
age = true;
// or we can use it for an array of mixed type
var mixed = [];
mixed.push(10);
mixed.push("Hi");
mixed.push(true);
console.log(mixed);
