const readlineSync = require("readline-sync");

let i = readlineSync.question("Can you give us a integer number?");

let n = i;

function FibonacciNumbers() {
  return n - 1 + (n - 2);
}

console.log("The first Fibonacci number is " + FibonacciNumbers());
