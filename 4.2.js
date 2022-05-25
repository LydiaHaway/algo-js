const readlineSync = require("readline-sync");

let min = 1;
let max = 10;
/**
 *
 * @param {*} min
 * @param {*} max
 * @returns
 */
function rand10(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand10(min, max));
