const readlineSync = require("readline-sync");

/**
 *
 * @param {*} left
 * @param {*} right
 * @param {*} current
 * @returns
 */

function elevator(left, right, current) {
  let dist1 = Math.abs(current - left); // abs to keep number positive
  let dist2 = Math.abs(current - right);

  if (dist1 >= dist2) {
    return "right";
  }

  if (dist1 < dist2) {
    return "left";
  }
}

console.log(elevator(0, 1, 0)); // left
console.log(elevator(0, 1, 1)); // right
console.log(elevator(0, 1, 2)); // right
console.log(elevator(0, 0, 0)); // right
console.log(elevator(0, 2, 1)); // right
