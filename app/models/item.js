const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    quantity: Number
});

module.exports = mongoose.model('Item', ItemSchema);