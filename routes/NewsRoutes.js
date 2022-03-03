const express = require('express');
const { getAllNews, handleAddNews } = require('../controller/NewsController');
const router = express.Router();

router.get('/allNews', getAllNews);
router.post('/addNews', handleAddNews);

module.exports = router;
