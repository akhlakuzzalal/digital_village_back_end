const express = require('express');
const { getAllDevelopment, handleAddNewDevelopment, handleDeleteDevelopment } = require('../controller/DevelopmentController');

const router = express.Router();

router.get('/allDevelopment', getAllDevelopment);
router.post('/addDevelopment', handleAddNewDevelopment);
router.delete('/deleteDeveleopment',handleDeleteDevelopment);

module.exports = router;
