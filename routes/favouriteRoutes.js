const express = require('express');
const router = express.Router();
const {
  getFavourites,
  addToFavourite,
  removeFromFavourite,
} = require('../controller/favouriteController');

router.get('/all', getFavourites);
router.post('/add', addToFavourite);
router.post('/remove', removeFromFavourite);

module.exports = router;
