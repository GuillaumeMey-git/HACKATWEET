const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
    content: String,
    like: Number,
    user : {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;