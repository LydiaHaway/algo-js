const readlineSync = require("readline-sync");

let info = ["Zelena", "The Wicked Witch", "Emma Swan", "Once Upon a Time"];
let [enemyName, enemyTitle, protagnostName, title] = info;

console.log(
  enemyName +
    " " +
    enemyTitle +
    " is an enemy to " +
    protagnostName +
    " in " +
    title
);
