const readUserRepository = require('../../../repositories/usersrepository/user.read.js');

module.exports = {
    async get(req, res) {
        var users = await readUserRepository.get();

        if (users.length == 0) {
            return res.status(500).send()
        }
        
        res.status(200).send(users);
    },
    async getById(req, res) {
        var user = await readUserRepository.getById(req.params.id);

        res.status(200).send(user);
    },
    async getByUsernamePassword(req, res) {
        var user = await readUserRepository.getByUsernamePassword(req.query.username, req.query.password);

        res.status(200).send(user);
    }

}