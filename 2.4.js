const readlineSync = require("readline-sync");

let number = readlineSync.question("Could you give us a number from 1 to 100?");

if (number % 2 == 0) {
  console.log(number / 2);
} else {
  console.log(number * 3);
}
