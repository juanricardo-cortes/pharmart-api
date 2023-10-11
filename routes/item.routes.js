const express = require('express');
const router = express.Router();
const queries = require('../app/application/features/item/queries.js');
const commands = require('../app/application/features/item/commands.js');

router.post('/items', (req, res) => {
    commands.create(req, res);
});

router.get('/items', (req, res) => {
    queries.get(req, res);
});

router.get('/items/:id', (req, res) => {
    queries.getById(req, res);
});

router.put('/items/:id', (req, res) => {
    commands.update(req, res);
});

router.delete('/items/:id', (req, res) => {
    commands.delete(req, res);
});

module.exports = router;