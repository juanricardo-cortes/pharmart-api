const Item = require('../../models/item.js');

module.exports = {
    async get() {
        return await Item.find();
    },
    async getById(id) {
        return await Item.findById(id);
    }
}