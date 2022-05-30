const readlineSync = require("readline-sync");

class Animal {
  sayHello() {
    return `${this.constructor.greeting}! I'm ${this.name}!`;
  }
}

class Dog extends Animal {
  constructor(greeting, name) {
    super();
    this.constructor.greeting = greeting;
    this.name = name;
  }
  sayHello() {
    return super.sayHello();
  }
}

class Cat extends Animal {
  constructor(greeting, name) {
    super();
    this.constructor.greeting = greeting;
    this.name = name;
  }
  sayHello() {
    return super.sayHello();
  }
}

let obj1 = new Cat("Meow", "Loki");

console.log(obj1.sayHello());

let obj2 = new Dog("Woof", "Mobius");

console.log(obj2.sayHello());
