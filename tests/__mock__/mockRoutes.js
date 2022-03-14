const express = require('express');
const { getAllUser } = require('./mockController');
const router = express.Router();

router.post('/all', getAllUser);

module.exports = router;
