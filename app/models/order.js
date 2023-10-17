const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    itemId: String,
    quantity: Number,
    sellerName: String
});

module.exports = mongoose.model('Order', OrderSchema);