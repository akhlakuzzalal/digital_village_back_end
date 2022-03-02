const express = require('express');
const router = express.Router();

const {
  handleAddEvent,
  getAllEvent,
  getArchivedEvents,
  getUpcomingEvents,
  handleDeleteEvents,
  handleParticipants,
} = require('../controller/eventController.js');

router.post('/addEvent', handleAddEvent);
router.get('/allEvent', getAllEvent);
router.get('/archivedEvents', getArchivedEvents);
router.get('/upcomingEvents', getUpcomingEvents);
router.delete('/deleteEvent', handleDeleteEvents);
router.put('/participant', handleParticipants);

module.exports = router;
