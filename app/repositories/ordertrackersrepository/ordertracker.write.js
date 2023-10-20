const OrderTracker = require('../../models/ordertracker.js');

module.exports = {
    async create(request) {
        const order = request;
        await order.save()
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            })
    }
}