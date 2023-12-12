const express = require('express')
const app = express()

app.use(express.json());
app.use(express.static('statics'))

app.get('/api/getMessage', (req, res) => {
  res.send('{"msg": "Hello"}');
})

app.post('/api/postMessage', (req, res) => {
  console.log("req body is", req.body);
  res.send('POST request to the homepage');
})

app.listen(3000, () => console.log('Listening on port 3000...'))