const readlineSync = require("readline-sync");

function faveNumber() {
  let i = readlineSync.question("what's your favorite number?");

  if (i != 42) {
    let sure = readlineSync.question("are you sure?");
    return faveNumber();
  } else {
    console.log("correct");
  }
}

console.log(faveNumber());
