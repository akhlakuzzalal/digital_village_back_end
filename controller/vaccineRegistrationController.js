const VaccineRegistration = require('../schemas/VaccineRegistrationSchema/VaccineRegistrationSchema');

const handleInfo = async (req, res, next) => {
  try {
    const newVaccine = req.body;
    const response = await VaccineRegistration.insertMany(newVaccine);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const handleFindInfo = async (req, res, next) => {
  try {
    const { email } = req.query;
    const response = await VaccineRegistration.find({ email });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleInfo,
  handleFindInfo,
};
