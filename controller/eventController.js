const { ObjectID } = require('bson');
const Event = require('../schemas/Event');

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
    const allEvents = await Event.find();

    res.json(allEvents);
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
const handleDeleteEvents = async (req, res, next) => {
  try {
    const { id } = req.query;
    const response = await Event.deleteOne({ _id: id });
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const handleParticipants = async (req, res, next) => {
  try {
    const { id, email } = req.query;
    const findParticipant = await Event.find({ _id: id });
    if (findParticipant && findParticipant[0]?.participants.includes(email))
      return res.json({ message: 'already exist' });
    const response = await Event.updateOne(
      { _id: id },
      { participants: [...findParticipant[0]?.participants, email] }
    );
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getEventWithEmail = async (req, res, next) => {
  try {
    const { email } = req.query;
    const allBookingEvents = await Event.find({});
    const myBookingEvents = allBookingEvents.filter((event) =>
      event.participants.includes(email)
    );
    res.json(myBookingEvents);
  } catch (error) {
    next(error);
  }
};

const handleDeleteMyBookingEvents = async (req, res, next) => {
  try {
    const { email, id } = req.query;
    const myBooking = await Event.find({ _id: id });
    const newParticipantArray = myBooking[0].participants.filter(
      (e) => e !== email
    );
    const response = await Event.findOneAndUpdate(
      { _id: id },
      { participants: newParticipantArray }
    );

    res.json(response);
  } catch (error) {
    next(error);
  }
};

// Update a Product
const updateEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updateEvent = req.body;
    const filter = { _id: id };

    const response = await Event.findOneAndUpdate(filter, updateEvent, {
      new: true,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleAddEvent,
  getAllEvent,
  getArchivedEvents,
  getUpcomingEvents,
  handleDeleteEvents,
  handleParticipants,
  getEventWithEmail,
  handleDeleteMyBookingEvents,
  updateEvent,
};
