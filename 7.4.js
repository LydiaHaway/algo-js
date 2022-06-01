const readlineSync = require("readline-sync");

let listPizzaFlavors = [];

function program() {
  console.log("Hello! Welcome to the Pizza Flavors Manager.");
  console.log("Please choose your actions:");
  console.log("1 - List all the pizza flavors");
  console.log("2 - Add a new pizza flavor");
  console.log("3 - Remove a pizza flavor");
  console.log("4 - Exit this program");

  let quest = readlineSync.question("Enter your action's number:");

  if (quest == 1) {
    console.log(listPizzaFlavors);
    return program();
  }

  if (quest == 2) {
    let add = readlineSync.question("What flavors do you want to add?");
    listPizzaFlavors.push(add);
    return program();
  }

  if (quest == 3) {
    let remove = readlineSync.question(
      "What's the index of the flavor you want to remove?"
    );
    listPizzaFlavors.splice(remove, 1);
    return program();
  }

  if (quest == 4) {
    return console.log("thank you!");
  }
}

let final = program();

console.log(final);
