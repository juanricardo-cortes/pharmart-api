class UpdateItemRequest {
    constructor(request) {
        this._id = request.params.id;
        this.name = request.body.name;
        this.description = request.body.description;
        this.price = request.body.price;
        this.image = request.body.image;
        this.quantity = request.body.quantity;
    }
}

module.exports = UpdateItemRequest;