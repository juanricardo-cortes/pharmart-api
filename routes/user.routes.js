const express = require('express');
const router = express.Router();
const commands = require('../app/application/features/user/commands.js');
const queries = require('../app/application/features/user/queries.js');

router.post('/users', (req, res) => {
    commands.create(req, res);
});

router.get('/users', (req, res) => {
    queries.get(req, res);
});

router.get('/user', (req, res) => {
    queries.getByUsernamePassword(req, res);
});

module.exports = router;
