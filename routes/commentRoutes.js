const express = require('express');
const router = express.Router();
const {
  handleAddComment,
  getAllComment,
} = require('../controller/commentController');

router.get('/all', getAllComment);
router.post('/add', handleAddComment);

module.exports = router;
