const readlineSync = require("readline-sync");

const info = ["Zelena", "The Wicked Witch", "Emma Swan", "Once Upon a Time"];
const [enemyName, enemyTitle, protagnostName, title] = info;

console.log(
  enemyName +
    " " +
    enemyTitle +
    " is an enemy to " +
    protagnostName +
    " " +
    title
);
