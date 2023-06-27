class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

let user = new User("John");


let user2 = {
  name: "John",
  sayHi() {
    console.log(this.name);
  }
}

user.sayHi();
