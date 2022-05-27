const readlineSync = require("readline-sync");

class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return ` Hello, ${this.firstName} ${this.lastName} !`;
  }
}

obj1 = new Human("Sherlock", "Holmes");
obj2 = new Human("Mycroft", "Holmes");

console.log(obj1.sayHello());
console.log(obj2.sayHello());
