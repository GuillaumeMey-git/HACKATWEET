var express = require('express');
var router = express.Router();
const Hashtag = require('../models/hashtags');

/* GET users listing. */
router.get('/', function(req, res) {
    Hashtag.find().then(data=>res.send(data));
});

module.exports = router;
