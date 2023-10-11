const Order = require('../../models/order.js');

module.exports = {
    async create(request) {
        const order = new Order(request);
        await order.save()
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            })
    }
}