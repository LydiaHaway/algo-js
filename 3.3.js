const readlineSync = require("readline-sync");

let first = [5, 15, 20, 25];

let second = [];

second.push(...first);

console.log(second);

let third = [25, 50, 75, 100];
let fourth = third.slice();

console.log(fourth);
