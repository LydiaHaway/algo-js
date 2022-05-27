const readlineSync = require("readline-sync");

function askTvSerie() {
  let name = readlineSync.question("what's your favorite Tv Show?");
  let time = readlineSync.question("What was the year of its production?");
  let cast = readlineSync.question("who was in the main cast?");

  const result = {
    "TV Show": name,
    "Years of production": time,
    "cast members": cast,
  };

  return result;
}

console.log(askTvSerie());
