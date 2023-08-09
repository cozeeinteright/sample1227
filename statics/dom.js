let body = {
  text: "Welcome to my page",
};

let documentElement = {
  body: body,
};

let document = {
  documentElement: documentElement,
};

console.log(document.documentElement.body.text);