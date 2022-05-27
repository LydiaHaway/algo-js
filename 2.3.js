const readlineSync = require("readline-sync");

let i = 1;

while (i <= 100) {
  console.log(i);
  i++;
}

for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}
