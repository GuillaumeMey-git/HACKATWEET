var express = require('express');
var router = express.Router();
const Hashtag = require('../models/hashtags');




// Recup tout les #
router.get("/", (req, res) => {
    Hashtag.find({}).then((data) => {
        res.json({ result: true, hashtag: data });
    });
});

module.exports = router;
