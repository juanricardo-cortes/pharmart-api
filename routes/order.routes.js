const express = require('express');
const router = express.Router();
const commands = require('../app/application/features/order/commands');

router.post('/orders', (req, res) => {
    commands.checkout(req, res);
});

module.exports = router;