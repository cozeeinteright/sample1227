let express = require('express');

let router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login');
})

module.exports = router;