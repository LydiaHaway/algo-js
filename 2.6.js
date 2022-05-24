const readlineSync = require("readline-sync");

let number = readlineSync.question("Could you give a number from 1 to 7?");

Monday: while (number == 1) {
  console.log("Monday");
  break;
}

Tuesday: while (number == 2) {
  console.log("Tuesday");
  break;
}

Wednesday: while (number == 3) {
  console.log("Wednesday");
  break;
}

Thursday: while (number == 4) {
  console.log("Thursday");
  break;
}

Friday: while (number == 5) {
  console.log("Friday");
  break;
}

Saturday: while (number == 6) {
  console.log("Saturday");
  break;
}

Sunday: while (number == 7) {
  console.log("Sunday");
  break;
}
