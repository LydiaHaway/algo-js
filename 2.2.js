const readlineSync = require("readline-sync");

let minAge = readlineSync.question("Could you give us the min age?");
let maxAge = readlineSync.question("Could you give us the max age?");
let currentAge = readlineSync.question("Could your current age?");

if (currentAge >= minAge && currentAge <= maxAge) {
  console.log(currentAge);
} else if (minAge > maxAge) {
  console.log("There is an error for the min age and max age");
}
