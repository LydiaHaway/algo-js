const readlineSync = require("readline-sync");

let array = [1, 2, 3, 4, 5];
let sum = 0;
for (let number of array) {
  sum += number;
}
average = sum / array.length;

console.log(average);

let arraySecond = [100, 101, 102];
let sumSecond = 0;
for (let number of arraySecond) {
  sumSecond += number;
}
averageSecond = sumSecond / arraySecond.length;

console.log(averageSecond);
