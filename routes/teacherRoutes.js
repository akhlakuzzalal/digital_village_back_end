const express = require('express');
const router = express.Router();

const { handleUploadVideo } = require('../controller/teacherController');

router.post('/uploadVideo', handleUploadVideo);

module.exports = router;
