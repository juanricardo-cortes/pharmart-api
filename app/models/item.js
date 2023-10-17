const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    stock: Number
});

module.exports = mongoose.model('Item', ItemSchema);