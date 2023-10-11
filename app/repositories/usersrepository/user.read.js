const User = require('../../models/user.js');

module.exports = {
    async get() {
        return await User.find();
    },
    async getById(id) {
        return await User.findById(id);
    },
    async getByUsernamePassword(username, password) {
        return await User.findOne({
            username: username,
            password: password
        });
    }
}