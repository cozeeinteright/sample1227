"use strict"

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ")
  }
};

user.fullName = "Alice Cooper";

console.log(user.name);
console.log(user.surname);

console.log(user.fullName);

user.name = "Pete";

console.log(user.name)



