"use strict";
const anchor = document.querySelector("a");
// console.log(anchor?.href);
//when select by tag name, typescript can figure out a type of an element. The non-null assertion operator (! mark at the end) tells the TypeScript compiler that a value typed as optional cannot be null or undefined
// const form = document.querySelector("form")!;
//when select by class name, you should tell what type of an element it's gonna be by adding 'as elementName'
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//.valueAsNumber to convert a string type into number
