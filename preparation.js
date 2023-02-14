let arr1 = new Array();
let arr2 = [];

let fruits = ["Apple","Orange","Plum"];

console.log( fruits[0]);

console.log( "fruits[3] is ",fruits[3]);

fruits[3] = "Lemon";

console.log( "fruits[3] is ",fruits[3]);

console.log( "length is",fruits.length);

let arr4 = [ 'Apple', { name: 'John'}, true, function() {console.log("Hello");}];

console.log('arr4[1].name is',arr4[1].name);
console.log(arr4[3]());

console.log(fruits.pop());

console.log( fruits );

for (let fruit of fruits){
  console.log( fruit);
}

let fruits2 = {
  "0": 'Apple',
  "1": 'Orange',
  "2": 'Plum',
};

for(let key in fruits2) {
  console.log(key,"is",fruits2[key]);
}


