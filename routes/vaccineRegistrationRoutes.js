const express = require('express');

const router = express.Router();

const {
  handleInfo,
  handleFindInfo,
  handleUpdateInfo,
  handleAllFindInfo,
} = require('../controller/vaccineRegistrationController');

router.post('/addInfo', handleInfo);
router.get('/findInfo', handleFindInfo);
router.get('/findAllInfo', handleAllFindInfo);
router.get('/updateInfo', handleUpdateInfo);
module.exports = router;
