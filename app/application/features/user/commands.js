const writeUserRepository = require('../../../repositories/usersrepository/user.write.js');

module.exports = {
    async create(req, res) {
        if(!req.body) {
            return res.status(400).send()
        }

        var isSaved = await writeUserRepository.create(req.body);

        if(isSaved == false) {
            return res.status(409).send();
        }

        return res.status(201).send();
    }
}