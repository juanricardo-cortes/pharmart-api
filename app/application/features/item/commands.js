const writeItemRepository = require('../../../repositories/itemsrepository/item.write.js');
const UpdateItemRequest = require('../../../entities/request/updateItemRequest.js');
const Item = require('../../../entities/item.js');

module.exports = {
    async create(req, res) {
        if (!req.body) {
            return res.status(400).send();
        }

        const newItem = await writeItemRepository.create(req.body);

        return res.status(200).json(newItem);
    },
    async update(req, res) {
        if (!req.body) {
            return res.status(400).send();
        }

        const requestItem = new UpdateItemRequest(req);

        var isUpdated = await writeItemRepository.update(requestItem);

        return this.generateResponse(isUpdated, res);
    },
    async delete(req, res) {
        var isDeleted = await writeItemRepository.delete(req.params.id);

        return this.generateResponse(isDeleted, res);
    },
    generateResponse(isSuccess, response) {
        if(isSuccess) {
            return response.status(409).send();
        }

        return response.status(201).send();
    }
}