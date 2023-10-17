const WebSocket = require('ws');
const ItemModel = require('../models/item')
const OrderModel = require('../models/order')
const changeStreamModule = require('../websockets/changeStream');

module.exports = function (server) {
  const wss = new WebSocket.Server({ server });

  // Initialize the change stream module with the WebSocket server
  changeStreamModule(wss, ItemModel);
  changeStreamModule(wss, OrderModel);
};