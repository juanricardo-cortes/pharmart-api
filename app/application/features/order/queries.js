const readOrderRepository = require('../../../repositories/ordersrepository/order.read.js');
const readOrderTrackerRepository = require('../../../repositories/ordertrackersrepository/ordertracker.read.js')

module.exports = {
    async get(req, res) {
        var orders = await readOrderRepository.get();

        res.status(200).send(orders);
    },
    async getById(req, res) {
        var order = await readOrderRepository.getById(req.body.id);

        res.status(200).send(order);
    },
    async trackOrder(req, res) {
        var orderTracker = await readOrderTrackerRepository.getById(req.body.id);

        res.status(200).send(orderTracker);
    },
    async getTracks(req, res) {
        var tracks = await readOrderTrackerRepository.get();

        res.status(200).send(tracks);
    }
}