const express = require('express');

const router = express.Router();

const {
  handleInfo,
  handleFindInfo,
} = require('../controller/vaccineRegistrationController');

router.post('/addInfo', handleInfo);
router.get('/findInfo', handleFindInfo);

module.exports = router;
