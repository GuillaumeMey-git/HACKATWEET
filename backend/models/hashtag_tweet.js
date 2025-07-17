const mongoose = require('mongoose');

const hashtag_tweetSchema = mongoose.Schema({
    tweet : {type: mongoose.Schema.Types.ObjectId, ref: 'tweets'},
    hashtag : {type: mongoose.Schema.Types.ObjectId, ref: 'hashtags'},
});

const Hashtag_tweet = mongoose.model('hashtag_tweets', hashtag_tweetSchema);

module.exports = Hashtag_tweet;