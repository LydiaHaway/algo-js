const readlineSync = require("readline-sync");

class Animal {
  sayHello() {
    return `${this.constructor.greeting}! I'm ${this.name}!`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(this.name);
  }
}

class Cat extends Animal {}
