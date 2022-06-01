const readlineSync = require("readline-sync");

function Random(array) {
  return array.sort(() => Math.random() - 0.5);
}

function askTvSerie() {
  let name = readlineSync.question("what's your favorite Tv Show?");
  let time = readlineSync.question("What was the year of its production?");
  let cast = [];

  do {
    let castAsk = readlineSync.question("Who was in the main cast");
    cast.push(castAsk);
    askAgain = readlineSync.question("Wanna add another actors?");
  } while (askAgain === "yes");

  let castList = cast.toString();

  let castRandom = Random(cast);

  let castRandomList = castRandom.toString();

  const tvSerie = {
    "TV Show": name,
    "Years of production": time,
    "Cast member": castList,
    "Random cast member": castRandomList,
  };

  return tvSerie;
}

let tvShow = askTvSerie();

console.log(tvShow);
