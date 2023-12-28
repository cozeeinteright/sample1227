const express = require('express');
const app = express();
const port = 3000;

app.param(['id', 'page'], function(req, res, next, value) {
  console.log('once', value)
})

app.get('/', (req, res) => {
  res.send("hello , world")
});

app.get('/:id/:page', function(req, res) {
  res.send("Hello, User");
})


app.listen(port, () => {
  console.log(`Example server port is ${port}`);
})