const User = require('../../models/user.js');

module.exports = {
    async create(request) {
        const user = new User(request);
        await user.save()
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            });
    }
}