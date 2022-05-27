const readlineSync = require("readline-sync");

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let obj1 = new Cat("skitty", "9 years");
let obj2 = new Cat("Pixel", "6 years");

console.log(obj1);
console.log(obj2);
