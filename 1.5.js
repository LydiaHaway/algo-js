const readlineSync = require("readline-sync");

let firstNumber = new Number(
  readlineSync.question("Can you give me a decimal number?")
);

let secondNumber = new Number(
  readlineSync.question("Can you give me a decimal number?")
);

const result = Math.trunc(firstNumber) * secondNumber;

console.log(result);
