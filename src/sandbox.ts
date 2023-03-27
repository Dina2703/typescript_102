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

// let age: any = 25;
// age = true;

// or we can use it for an array of mixed type
// let mixed: any[] = [];
// mixed.push(10);
// mixed.push("Hi");
// mixed.push(true);
// console.log(mixed);

// ------------#7 Better Workflow & tsconfig---------------
// console.log("test");

// ------------#8 Function Basics---------------
// let greet: Function;

// greet = () => {
//   console.log("hello, World");
// };
//for 'c' the  default value is 10, if we don't pass any other value.
// const add = (a: number, b: number, c: number | string = 10) => {
//   console.log(a + b + c);
//   console.log(c);
// };

// add(2, 4);
// add(2, 4, 33);

//example with a function that returns a value
// const minus = (a: number, b: number): number => {
//   return a + b;
// };

// let result = minus(10, 7);
// console.log(typeof result);

//void when a function returns nothing

// ------------#9 Type Aliases---------------
// type StringOrNum = string | number;
// type objWithName = { name: string; uid: StringOrNum };

// const logDetails = {uid: StringOrNum, item: string} => {
//   console.log(`${item} has a uid of ${uid}`);
// }

// const greet = (user: objWithName) => {
//   console.log(`${user.name} says hello`);

// }

// ------------#9 Function Signatures---------------
// let greet: Function;

//example 1
let greet: (a: string, b: string) => void; //signature for a function that takes in 2 argument, both string, and returns nothing.

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

//example 2
let calc: (a: number, b: number, action: string) => number; //function signature that takes in 3 arguments and returns a number

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

//example 3
let logDetails: (obj: { name: string; age: number }) => void; //function signature that takes in an object with name and age properties, and returns nothing.

// logDetails = (ninja: { name: string; age: number }) => {
//   console.log(`$(ninja.name) is ${ninja.age} years old`);
// };

//version with type alias

type person = { name: string; age: number };
logDetails = (ninja: person) => {
  console.log(`$(ninja.name) is ${ninja.age} years old`);
};
