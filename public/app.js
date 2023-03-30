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
// -----------CLASSES--------------
class Invoice {
    //show  that the object gonna get in 3 parameters, and they gonna be assigned as values for the object props(that we define earlier)
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //create a method ob an object
    format() {
        return `${this.client} owes  $${this.amount} for ${this.details}`;
    }
}
//create an object based on class Invoice
const invOne = new Invoice("Jhon", "mopping", 1000);
const invTwo = new Invoice("Anna", "vacuuming", 2000);
console.log(invOne.format());
console.log(invOne);
//create an array to store ONLY objects that were created using Invoice class.
let invoices = [];
invoices.push(invOne, invTwo);
console.log(invoices);
