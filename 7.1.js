const readlineSync = require("readline-sync");

let i = Math.floor(Math.random() * 10) + 1;
let number = i;

function GuessTheRIghtNumber() {
  let guess = readlineSync.question(
    "Could you guess the right number from 1 to 100?"
  );

  if (guess < number) {
    console.log("Too low!");
    return GuessTheRIghtNumber();
  }

  if (guess > number) {
    console.log("Too high!");
    return GuessTheRIghtNumber();
  }

  if (guess === number) {
    console.log("Well guessed!");
  }
}

console.log(GuessTheRIghtNumber());
