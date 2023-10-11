class Item {
    constructor(item) {
        this._id = item._id;
        this.name = item.name;
        this.description = item.description;
        this.price = item.price;
        this.image = item.image;
        this.quantity = item.quantity;
    }
}

module.exports = Item;