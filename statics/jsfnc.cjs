const { argv } = require("node:process");

{
  let message = "Hello";
  console.log(message);
}


{
  let message = "Hello";
  console.log(message);
}

function sayHi(name, age) {
  return "Hi my name is " + name;
}


let myMessage;
myMessage = sayHi("John", 30);
console.log(myMessage);

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
})
