const VaccineRegistration = require('../schemas/VaccineRegistrationSchema');

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
const handleAllFindInfo = async (req, res, next) => {
  try {
    const response = await VaccineRegistration.find({});
    res.json(response);
  } catch (error) {
    next(error);
  }
};
const handleUpdateInfo = async (req, res, next) => {
  console.log('hitted', req.body);

  try {
    // const email = req.query.email;
    const info = req.body;
    console.log(info);
    const filter = { email: info.email };

    const updateDoc = { $set: { status: 'approved' } };
    const response = await VaccineRegistration.updateOne(filter, updateDoc);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleInfo,
  handleFindInfo,
  handleAllFindInfo,
  handleUpdateInfo,
};
