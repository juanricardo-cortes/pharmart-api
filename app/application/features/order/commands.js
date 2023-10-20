const writeItemRepository = require('../../../repositories/itemsrepository/item.write.js');
const readItemRepository = require('../../../repositories/itemsrepository/item.read.js');
const writeOrderRepository = require('../../../repositories/ordersrepository/order.write.js');
const writeOrderTrackerRepository = require('../../../repositories/ordertrackersrepository/ordertracker.write.js');
const OrderTracker = require('../../../models/ordertracker.js');

module.exports = {
    async checkout(req, res) {
        if (!req.body) {
            return res.status(400).send();
        }

        var newOrderTracker = new OrderTracker({
            orders: [],
            total: 0
        });
        const createdAt = new Date();

        for (const order of req.body) {
            order.createdAt = createdAt;
            const newOrder = await writeOrderRepository.create(order);

            const itemDb = await readItemRepository.getById(order.itemId);

            itemDb.stock -= order.quantity;
            await writeItemRepository.update(itemDb);
            newOrderTracker.total += order.quantity * itemDb.price;
            newOrderTracker.orders.push(newOrder._id);
        }

        await writeOrderTrackerRepository.create(newOrderTracker);
        
        return res.status(200).send();
    }
}