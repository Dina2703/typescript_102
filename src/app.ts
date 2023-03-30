const anchor = document.querySelector("a");
// console.log(anchor?.href);

//when select by tag name, typescript can figure out a type of an element. The non-null assertion operator (! mark at the end) tells the TypeScript compiler that a value typed as optional cannot be null or undefined
// const form = document.querySelector("form")!;

//when select by class name, you should tell what type of an element it's gonna be by adding 'as elementName'
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

//.valueAsNumber to convert a string type into number
