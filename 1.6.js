const readlineSync = require("readline-sync");

let firstNumber = new Number(
  readlineSync.question("Can you give me an integer number?")
);

let secondNumber = new Number(
  readlineSync.question("Can you give me an integer number?")
);

const result = firstNumber % secondNumber;

console.log(result);
