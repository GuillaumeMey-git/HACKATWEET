var express = require("express");
var router = express.Router();
const Tweet = require("../models/tweets");

//Creer un nouveau tweet
router.post("/new", (req, res) => {
  const messageContent = req.body.message;
  const newTweet = new Tweet({
    message: messageContent,
  });
  newTweet.save().then((savedTweet) => {
    res.json({ result: true, tweetData: savedTweet });
  });
});

// Recup tout les tweets
router.get("/", (req, res) => {
  Tweet.find({}).then((tweets) => {
    res.json({ result: true, tweets: tweets });
  });
});

module.exports = router;
