const mongoose = require('mongoose');

const hashtagSchema = mongoose.Schema({
    hashtagName: String,
    compteur: String
});

const Hashtag = mongoose.model('hashtags', hashtagSchema);

module.exports = Hashtag;