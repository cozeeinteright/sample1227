let lesson  = { student: {name: "Sinomura" , age: 20 }} ;
let obj2 = { student: 30                       } ;

let student = ["Shinomura",20];

console.log( lesson.student.name );
console.log( "In case of array ",student[0] );


let map = new Map();

map.set('1', 'string1');
map.set(1, 'number1');
map.set(true, 'boolean1');
map.set(false, 'bool2');

console.log( map.get(1) );
console.log( map.get('1'));
console.log( map.get(true));

console.log( map.size );
