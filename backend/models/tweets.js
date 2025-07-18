const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  like: Number,
  message: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  likesCount: { type: Number, default: 0 },
});

const Tweet = mongoose.model("tweets", tweetSchema);

module.exports = Tweet;
