var express = require('express');
var router = express.Router();
const Tweet = require('../models/tweets');

/* GET users listing. */
router.get('/', function(req, res) {
    Tweet.find().then(data=>res.send(data));
});

module.exports = router;
