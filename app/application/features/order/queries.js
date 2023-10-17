const readOrderRepository = require('../../../repositories/ordersrepository/order.read.js');

module.exports = {
    async get(req, res) {
        var orders = await readOrderRepository.get();

        res.status(200).send(orders);
    }
}