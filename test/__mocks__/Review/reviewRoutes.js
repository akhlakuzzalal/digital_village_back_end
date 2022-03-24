const express = require('express');
const router = express.Router();

const {
  handleAddReview,
  getAllReview,
  handleDeleteReview,
} = require('./reviewController');

router.post('/addReview', handleAddReview);
router.get('/allReview', getAllReview);
router.delete('/deleteReview', handleDeleteReview);

module.exports = router;
