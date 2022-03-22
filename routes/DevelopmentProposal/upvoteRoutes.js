const express = require('express');
const {
  getAllUpvotes,
  addUpvote,
  removeUpvote,
} = require('../../controller/DevelopmentProposal/upvoteController');
const router = express.Router();

router.post('/all', getAllUpvotes);
router.post('/add', addUpvote);
router.post('/remove', removeUpvote);

module.exports = router;
