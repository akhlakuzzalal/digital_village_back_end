const express = require('express');
const router = express.Router();
const { login } = require('../controller/authController');

router.get('/login', login);

module.exports = router;
