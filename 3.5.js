const readlineSync = require("readline-sync");

let array = [6, -10, 25, -30, 15];

function positive(array) {
  const posArray = array.filter((num) => num > -1);
  return posArray;
}

console.log(positive(array));

let sum = 0;
let newArray = positive(array);
for (let i = 0; i < newArray.length; i++) {
  sum += newArray[i];
}

console.log("The sum of the positive number is " + sum);
