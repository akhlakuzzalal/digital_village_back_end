const express = require('express');
const router = express.Router();

const {
  handleAddEvent,
  getAllEvent,
  getArchivedEvents,
  getUpcomingEvents,
} = require('../controller/eventController.js');

router.post('/addEvent', handleAddEvent);
router.get('/allEvent', getAllEvent);
router.get('/archivedEvents', getArchivedEvents);
router.get('/upcomingEvents', getUpcomingEvents);

module.exports = router;
