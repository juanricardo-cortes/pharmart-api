const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    itemId: String,
    quantity: Number,
    sellerName: String,
    createdAt: Date
});

module.exports = mongoose.model('Order', OrderSchema);