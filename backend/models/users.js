const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    token: String,
    logo: string,
});

const User = mongoose.model('users', userSchema);

module.exports = User;