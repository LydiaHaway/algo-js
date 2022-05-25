const readlineSync = require("readline-sync");

let a = [1, 1];
let b = [2, 2];

/**
 *
 * @param {*} a
 * @returns
 */

function mult(a) {
  return a * a;
}

function calcDistance(x1, y1, x2, y2) {
  return Math.sqrt(mult(y2 - y1) + mult(x2 - x1));
}

console.log(calcDistance(a[0], a[1], b[0], b[1]));
