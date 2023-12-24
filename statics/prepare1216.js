let user = {
  name: "John",
  age: 20,
};

document.title = "new";

function update(online) {
  document.getElementById('status').textContent =
    online ? 'Online' : 'Offline'
}

let admin = {
 name: "koji",
}