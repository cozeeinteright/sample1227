const express = require('express');
const app = express();
const port = 3000;


app.locals.title = "World";
app.set('name','My name');
app.use(express.urlencoded( {extended: true}));
app.use(express.static('statics'));

app.get('/', (req, res) => {
  res.send(`Hello ${app.locals.title}`);
});

app.all('/secret', function(req, res, next) {
  console.log('Accsessing the secret section ...');
  next()
})

app.get('/secret', function(req, res) {
  console.log('This is Get');
  res.send(`This is ${app.get('name')}`);
})

app.param('id', function (req, res, next, id) {
  console.log('called only once');
  next();
})

app.get('/user/:id', function(req, res) {
  res.send('id is' + req.params.id)
} )


app.route('/about')
  .all(function(req, res, next) {
    console.log('This is all');
    next()
  })
  .get(function (req, res) {
    console.log('This is get')
    res.send("good bye");
  })

app.post('/postmessage', (req, res) => {
  console.log(req.body);
  if(req.body.custname){
    res.send("message is posted . your name is " + req.body.custname);
  } else {
    res.send("Enter name");
  }
})


app.listen(port, () => {
  console.log(`Exsample app listening on port ${port}`)
});
