const writeItemRepository = require('../../../repositories/itemsrepository/item.write.js');
const readItemRepository = require('../../../repositories/itemsrepository/item.read.js');
const writeOrderRepository = require('../../../repositories/ordersrepository/order.write.js');

const Item = require('../../../entities/item.js');

module.exports = {
    async checkout(req, res) {
        if (!req.body.orders) {
            return res.status(400).send();
        }

        req.body.orders.forEach(async order => {
            var isOrderSaved = await writeOrderRepository.create(order);
            if(isOrderSaved === false) {
                return response.status(409).send();
            }

            var itemDb = readItemRepository.getById(order.itemId);
            var item = new Item(itemDb);

            item.quantity -= order.quantity;
            var isItemUpdated = await writeItemRepository.update(item);
            if(isItemUpdated === false) {
                return response.status(409).send();
            }
        });

        return response.status(200).send();
    }
}