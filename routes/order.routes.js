const express = require('express');
const router = express.Router();
const commands = require('../app/application/features/order/commands');
const queries = require('../app/application/features/order/queries.js');

router.post('/orders', (req, res) => {
    commands.checkout(req, res);
});


router.get('/orders', (req, res) => {
    queries.get(req, res);
});

router.get('/track', (req, res) => {
    queries.getTracks(req, res);
})

module.exports = router;