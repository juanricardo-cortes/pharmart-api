const Item = require('../../models/item.js');

module.exports = {
    async create(request) {
        const item = new Item(request);
        try {
            const newItem = await item.save();
            return newItem;
        } catch (err) {
            return null;
        }
    },
    async update(request) {
        const item = new Item(request);
        await Item.updateOne({_id: request._id}, item)
        .then((result) => {
            if(result.nModified === 1) {
                return true;
            }
            return false;
        })
        .catch(() => {
            return false;
        });
    },
    async delete(id) { 
        Item.deleteOne({_id: id})
        .then((result) => {
            if(result.deletedCount === 1) {
                return true;
            }
            return false;
        })
        .catch(() => {
            return false;
        });
    }
}