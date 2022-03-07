const express = require('express');
const { getAllDevelopment, handleAddNewDevelopment, handleDeleteDevelopment } = require('../controller/DevelopmentController');
const upload = require('../middlewares/upload');

const router = express.Router();

router.get('/allDevelopment', getAllDevelopment);
router.post('/addDevelopment',upload.single('file'), handleAddNewDevelopment);
router.delete('/deleteDevelopment/:id',handleDeleteDevelopment);

module.exports = router;
