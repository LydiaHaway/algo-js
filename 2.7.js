const readlineSync = require("readline-sync");

let n = readlineSync.question("Can you give us a number ? ");

let val = [];
let sum = 0;
let i = 0;

for (i = 0; i < n; i++) {
  let askAgain = readlineSync.question("Can you give us a new number ? ");
  val.push(askAgain);
}

let sumVal = val.map(Number);

for (i = 0; i < sumVal.length; i++) {
  sum += sumVal[i];
}

console.log("the sum is " + sum);
