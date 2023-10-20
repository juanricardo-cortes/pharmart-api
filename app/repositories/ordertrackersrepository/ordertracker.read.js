const OrderTracker = require('../../models/ordertracker.js');

module.exports = {
    async get() {
        return await OrderTracker.find();
    },
    async getById(id) {
        return await Item.findById(id);
    }
}