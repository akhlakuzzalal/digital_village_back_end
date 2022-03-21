const express = require('express');
const { getAllUserReview, handleAddUserReview, handleDeleteUserReview, getSpecificUserReview, handleReviewUpdate } = require('./UserReviewController');
const router = express.Router();

router.get('/allReview',  getAllUserReview);
router.get('/singleReview/:email',  getSpecificUserReview);
router.put('/updateReview',handleReviewUpdate);
router.post('/addReview', handleAddUserReview);
router.delete('/deleteReview/:id', handleDeleteUserReview);


module.exports = router;
