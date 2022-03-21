const AvailableAppointment = require('../schemas/AvailableAppointment');

const handleSaveAppointment = async (req, res, next) => {
  try {
    const newAppointment = req.body;
    const response = await AvailableAppointment.insertMany(newAppointment);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleGetAppointment = async (req, res, next) => {
  try {
    const response = await AvailableAppointment.find({});
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleSaveAppointment,
  handleGetAppointment,
};
