const Event = require('../schemas/EventSchema/Event');

const handleAddEvent = async (req, res, next) => {
  try {
    const newEvent = req.body;
    const result = await Event.insertMany(newEvent);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getAllEvent = async (req, res, next) => {
  try {
    const allEvent = await Event.find({});
    res.json(allEvent);
  } catch (error) {
    next(error);
  }
};
const getArchivedEvents = async (req, res, next) => {
  try {
    const archivedEvents = await Event.find({ eventType: 'archived' });
    res.json(archivedEvents);
  } catch (error) {
    next(error);
  }
};
const getUpcomingEvents = async (req, res, next) => {
  try {
    const upcomingEvents = await Event.find({ eventType: 'upcoming' });
    res.json(upcomingEvents);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleAddEvent,
  getAllEvent,
  getArchivedEvents,
  getUpcomingEvents,
};
