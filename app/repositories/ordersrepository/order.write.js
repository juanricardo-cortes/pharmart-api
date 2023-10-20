const Order = require('../../models/order.js');

module.exports = {
    async create(request) {

        const order = new Order(request);
        try {
            const newOrder = await order.save();
            return newOrder;
        } catch (err) {
            return null;
        }
    }
}