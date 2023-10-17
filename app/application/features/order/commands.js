const writeItemRepository = require('../../../repositories/itemsrepository/item.write.js');
const readItemRepository = require('../../../repositories/itemsrepository/item.read.js');
const writeOrderRepository = require('../../../repositories/ordersrepository/order.write.js');

const Item = require('../../../entities/item.js');

module.exports = {
    async checkout(req, res) {
        if (!req.body) {
            return res.status(400).send();
        }

        req.body.forEach(async order => {
            await writeOrderRepository.create(order);
            var itemDb = await readItemRepository.getById(order.itemId);
            itemDb.stock -= order.quantity;
            await writeItemRepository.update(itemDb);
        });

        return res.status(200).send();
    }
}