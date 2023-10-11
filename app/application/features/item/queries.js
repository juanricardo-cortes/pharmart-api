const readItemRepository = require('../../../repositories/itemsrepository/item.read.js');

module.exports = {
    async get(req, res) {
        var items = await readItemRepository.get();

        if (items.length == 0) {
            return res.status(500).send();
        }
        
        res.status(200).send(items);
    },
    async getById(req, res) {
        var user = await readItemRepository.getById(req.params.id);

        res.status(200).send(user);
    }
}