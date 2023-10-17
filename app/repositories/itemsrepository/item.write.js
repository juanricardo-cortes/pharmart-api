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
        try {
            const updatedItem = await Item.findOneAndUpdate(
              { _id: item._id }, 
              item,     
              { new: true }    
            );
        
            if (!updatedItem) {
              throw new Error('Item not found');
            }
        
            return updatedItem;
        } catch (error) {
            throw new Error('Failed to update item' + error);
        }
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