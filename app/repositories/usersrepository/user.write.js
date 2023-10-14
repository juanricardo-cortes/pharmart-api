const User = require('../../models/user.js');

module.exports = {
    async create(request) {
        const user = new User(request);
        try {
            const newUser = await user.save();
            return newUser;
        } catch (err) {
            return null;
        }
    }
}