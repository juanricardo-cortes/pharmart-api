const WebSocket = require('ws'); 

module.exports = function (wss, DataModel) {
    const dataChangeStream = DataModel.watch();
  
    dataChangeStream.on('change', (change) => {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            const message = { model: DataModel.modelName, change: change };
            client.send(JSON.stringify(message));
        }
      });
    });
  };