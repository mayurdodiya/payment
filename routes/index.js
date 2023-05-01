var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OY', h1title:'H1_title', ptitle:'p_title'});
});

module.exports = router;
