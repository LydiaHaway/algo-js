const readlineSync = require("readline-sync");

let quest = readlineSync.question("Can you give us a integer number?");

let n = quest;

function divisors() {
  let r = [];
  for (let i = 2; i < n; i++) {
    if (n % i == 0) r.push(i);
  }
  return r;
}

console.log(divisors());
