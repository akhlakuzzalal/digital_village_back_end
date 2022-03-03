const express = require('express');
const { getAllNews, handleAddNews, handleDeleteNews } = require('../controller/NewsController');
const router = express.Router();

router.get('/allNews', getAllNews);
router.post('/addNews', handleAddNews);
router.delete('/deleteNews', handleDeleteNews);

module.exports = router;
