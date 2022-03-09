const express = require('express');
const router = express.Router();
const { handleAddComment } = require('../controller/commentController');

router.post('/add', handleAddComment);

module.exports = router;
