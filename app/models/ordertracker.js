const mongoose = require('mongoose');
const Order = require('./order')

const OrderTrackerSchema = mongoose.Schema({
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    total: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('OrderTracker', OrderTrackerSchema);