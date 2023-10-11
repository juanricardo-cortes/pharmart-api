const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    itemId: String,
    quantity: String
});

module.exports = mongoose.model('Order', OrderSchema);