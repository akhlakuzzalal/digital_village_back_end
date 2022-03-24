const express = require('express');
const {
  getAllDownvotes,
  addDownvote,
  removeDownvote,
} = require('../../controller/DevelopmentProposal/downvoteController');
const router = express.Router();

router.post('/all', getAllDownvotes);
router.post('/add', addDownvote);
router.post('/remove', removeDownvote);

module.exports = router;
