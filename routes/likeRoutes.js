const express = require('express');
const {
  getLikes,
  addLike,
  removeLike,
} = require('../controller/likeController');
const router = express.Router();

router.post('/all', getLikes);
router.post('/add', addLike);
router.post('/remove', removeLike);

module.exports = router;
