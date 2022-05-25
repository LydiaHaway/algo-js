const readlineSync = require("readline-sync");

let array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}

console.log("The sum of the array is " + sum);

let arraySecond = [1, 2, 3, 4, 5];
let sumSecond = 0;
for (let i = 0; i < arraySecond.length; i++) {
  sumSecond += arraySecond[i];
}

console.log("The sum of the second array is " + sumSecond);
