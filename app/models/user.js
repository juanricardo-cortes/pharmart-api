const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    role: Number
});

module.exports = mongoose.model('User', UserSchema);