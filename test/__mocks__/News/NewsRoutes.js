const express = require('express');
const {
  getAllNews,
  handleAddNews,
  handleDeleteNews,
  getSingleNews,
  handleEditNews,
} = require('../controller/NewsController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/allNews', getAllNews);
router.get('/getSingleNews', getSingleNews);
router.post('/addNews', upload.single('file'), handleAddNews);
router.delete('/deleteNews/:id', handleDeleteNews);
router.put('/editNews', upload.single('file'),handleEditNews);

module.exports = router;
