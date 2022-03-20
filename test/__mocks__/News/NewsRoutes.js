const express = require('express');
const {
  getAllNews,
  handleAddNews,
  handleDeleteNews,
  getSingleNews,
  handleEditNews,
} = require('./NewsController');
const router = express.Router();

router.get('/allNews', getAllNews);
router.get('/getSingleNews', getSingleNews);
router.post('/addNews', handleAddNews);
router.delete('/deleteNews/:id', handleDeleteNews);
router.put('/editNews', handleEditNews);

module.exports = router;
