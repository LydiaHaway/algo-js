const readlineSync = require("readline-sync");

let info = ["Regina Mills", "Evil Queen", "Emma Swan", "Once Upon a Time"];
info = ["Cora Mills", "Queen of Hearts", "Emma Swan", "Once Upon a Time"];
info = [
  "Peter Pan",
  "The boy who wouldn't grow up",
  "Emma Swan",
  "Once Upon a Time",
];
info = ["Zelena", "The Wicked Witch", "Emma Swan", "Once Upon a Time"];

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
