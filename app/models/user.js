const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: { 
        type: String, 
        unique: true,
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('User', UserSchema);