const readlineSync = require("readline-sync");

let htmlBadges = new Number(
  readlineSync.question("How many HTML badges do you have?")
);

let cssBadges = new Number(
  readlineSync.question("How many CSS badges do you have?")
);

let totalBadges = htmlBadges + cssBadges;

console.log("Woaw, you have " + totalBadges + "!");

console.log("It works !!!");

console.log("10" + "5"); // '105' => string type

console.log(10 + 5); // 15 => number type
