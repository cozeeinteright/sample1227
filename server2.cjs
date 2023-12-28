const express = require('express')
const app = express()

app.locals.user = [];

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('statics'))

app.get('/api/getMessage', (req, res) => {
  res.send('{"msg": "Hello"}');
})

app.post('/login', (req, res) => {
  if(!req.params.username) res.send()
  res.send(user);
})

app.listen(3000, () => console.log('Listening on port 3000...'))