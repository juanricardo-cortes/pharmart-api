const writeUserRepository = require('../../../repositories/usersrepository/user.write.js');

module.exports = {
    async create(req, res) {
        if(!req.body) {
            return res.status(400).send()
        }

        var user = await writeUserRepository.create(req.body);

        return res.status(201).json(user);
    }
}