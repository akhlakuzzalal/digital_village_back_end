const express = require('express');
const { getUserAnalytics } = require('../controller/AnalyticsController');

const router = express.Router();

router.post('/userInfo', getUserAnalytics);

module.exports = router;
