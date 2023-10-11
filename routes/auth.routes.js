const express = require('express');
const router = express.Router();
const queries = require('../app/application/auth/queries.js');

router.get('/auth', (req, res) => {
    queries.get(req, res);
});

module.exports = router;