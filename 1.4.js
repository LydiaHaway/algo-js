const readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name?");
let firstName = readlineSync.question("What's your first name?");
let city = readlineSync.question("Where do you live?");

const greeting =
  "Your name is " + firstName + " " + name + " and you live in " + city;

console.log(greeting);
