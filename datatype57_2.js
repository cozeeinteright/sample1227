let person = {
  name: "John",
  age: 30
};

let lessonList = new Map(Object.entries(person));

console.log( lessonList.get('age'));
