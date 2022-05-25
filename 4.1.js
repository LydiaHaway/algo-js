const readlineSync = require("readline-sync");

let width = readlineSync.question(
  "Can you give us the width of the rectangle ? "
);
let height = readlineSync.question(
  "Can you give us the width of the rectangle ? "
);
/**
 *
 * @param {*} width
 * @param {*} height
 * @returns
 */
function calcSurface(width, height) {
  return width * height;
}

console.log("the surface of the rectangle is " + calcSurface(width, height));
