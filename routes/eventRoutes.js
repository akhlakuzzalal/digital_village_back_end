const express = require('express');
const router = express.Router();

const {
  handleAddEvent,
  getAllEvent,
  getArchivedEvents,
  getUpcomingEvents,
  handleDeleteEvents,
  handleParticipants,
  getEventWithEmail,
  handleDeleteMyBookingEvents,
  updateEvent,
} = require('../controller/eventController.js');

router.post('/addEvent', handleAddEvent);
router.get('/allEvent', getAllEvent);
router.get('/archivedEvents', getArchivedEvents);
router.get('/upcomingEvents', getUpcomingEvents);
router.delete('/deleteEvent', handleDeleteEvents);
router.put('/participant', handleParticipants);
router.get('/myBookingEvents', getEventWithEmail);
router.put('/deleteMyBooking', handleDeleteMyBookingEvents);
router.put('/updateEvent/:id', updateEvent);

module.exports = router;
