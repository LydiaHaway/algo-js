const readlineSync = require("readline-sync");

let min = 1;
let max = 10;

function rand10(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

n = readlineSync.question("Can you give us a random number from 1 to 10? ");

/**
 *
 * @returns
 */

function multiRand() {
  let array = [];
  for (let i = 1; i <= n; i++) {
    let i = rand10(min, max);
    array.push(i);
  }
  return array;
}

console.log(multiRand());
