const express = require('express');
const { getAllNews, handleAddNews, handleDeleteNews } = require('../controller/NewsController');
const upload = require('../middlewares/upload');
const router = express.Router();

router.get('/allNews', getAllNews);
router.post('/addNews', upload.single('file'), handleAddNews);
router.delete('/deleteNews/:id', handleDeleteNews);

module.exports = router;
