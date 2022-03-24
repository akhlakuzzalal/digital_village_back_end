const express = require('express');
const {
  getDisLikes,
  addDisLike,
  removeDisLike,
} = require('../controller/dislikeController');
const router = express.Router();

router.post('/all', getDisLikes);
router.post('/add', addDisLike);
router.post('/remove', removeDisLike);

module.exports = router;
