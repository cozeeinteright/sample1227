let style = {
  color: "red",
};

let body = {
  text: "Hello",
  style: style,
};

let documentElement = {
  body: body,
};

console.log(documentElement.body.text);
console.log(documentElement.body.style.color);
documentElement.body.style.color = "blue";
console.log(documentElement.body.style.color);



