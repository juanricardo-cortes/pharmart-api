const readUserRepository = require('../../repositories/usersrepository/user.read.js');

module.exports = {
    async get(req, res) {
        var user = await readUserRepository.getByUsernamePassword(req.body.username, req.body.password);

        return res.send(user);
    }
}