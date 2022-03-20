const express = require('express');
const {
  getAllDevelopment,
  handleDeleteDevelopment,
  handleUpvote,
  handleDownvote,
} = require('./DevelopmentController');

const router = express.Router();

router.get('/allDevelopment', getAllDevelopment);
router.delete('/deleteDevelopment/:id', handleDeleteDevelopment);
router.put('/upvote', handleUpvote);
router.put('/downvote', handleDownvote);

module.exports = router;
