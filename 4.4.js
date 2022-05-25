const readlineSync = require("readline-sync");

function average(arr) {
  let average = arr.reduce((a, b) => a + b, 0) / arr.length;
  return average;
}
function max(arr) {
  let max = Math.max(...arr);
  return max;
}

function min(arr) {
  let min = Math.min(...arr);
  return min;
}

n = readlineSync.question("Can you give us a random number? ");

function multiRand() {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let i = Math.floor(Math.random() * 100) + 1;
    arr.push(i);
  }
  return arr;
}
let array = multiRand();

console.log(array);

console.log(average(array));

console.log(min(array));

console.log(max(array));
