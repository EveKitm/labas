// import vardas from "./script.js";
// import { lastname, age, occupation } from "./namedExport.js";

// console.log(vardas);
// console.log(lastname, age, occupation);

function hello(firstname) {
  console.log("Labas, " + firstname);
}

hello("Jonai");
hello("Petrai");
hello("Ona");

const greeting = () => {
  console.log("Labas");
};
greeting();

const pasisveikinimas = prompt("Pasisveikink ir įvesk vardą");
console.log(pasisveikinimas);

alert("Sveikas sugrįžęs, ", pasisveikinimas);
