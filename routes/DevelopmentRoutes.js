const express = require('express');
const {
  getAllDevelopment,
  handleAddNewDevelopment,
  handleDeleteDevelopment,
  handleUpvote,
  handleDownvote,
} = require('../controller/DevelopmentController');
const upload = require('../middlewares/upload');

const router = express.Router();

router.get('/allDevelopment', getAllDevelopment);
router.post('/addDevelopment', upload.single('file'), handleAddNewDevelopment);
router.delete('/deleteDevelopment/:id', handleDeleteDevelopment);
router.put('/upvote', handleUpvote);
router.put('/downvote', handleDownvote);

module.exports = router;
