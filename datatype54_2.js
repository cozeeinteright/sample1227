let fruits = ["Apple", "Orange", "Plum"];

console.log('fruits[0] is', fruits[0] );

fruits[2] = 'Pear';

fruits[3] = 'Lemon';

console.log( 'fruits[2] is',fruits[2] );

console.log( 'fruits[3] is',fruits[3] );

console.log( 'length is', fruits.length );

console.log( 'fruits array is', fruits );

let mixArr = ['Apple', { name: 'John'}, true, function() { console.log("Hello");}];

console.log( mixArr[1].name);
console.log( mixArr[3]());

let fruitsObject  = {
  "0": "Apple",
  "1": "Orange",
  "2": "Plum",
};

console.log('fruitsObject["0"]  is ',fruitsObject["0"]);

for (let i = 0; i < fruits.length; i++) {
  console.log( fruits[i]);
}

for (let fruit of fruits) {
  console.log( fruit);
}