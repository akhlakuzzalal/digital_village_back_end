const DonationRequest = require('../schemas/DonationRequestSchema');

                    // Donation Request Apply
// add a new help Request Apply a user Post == not try
const helpRequestApply = async (req, res, next) => {
    console.log(req.body, 'hitte apply');
    try {
      const helpRequest = req.body;
      const result = await DonationRequest.insertMany(helpRequest);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
  // Get All apply == not try
  const getAllApply = async (req, res, next) => {
    console.log("get all");
    try {
      const allApply = await DonationRequest.find({});
      res.json(allApply);
    } catch (error) {
      next(error);
    }
  };
  // Get sigle apply == not try
  const getSigleApply = async (req, res, next) => {
    console.log("get single");
    try {
      const id = req.query.id;
      const query = { _id: id };
      const sigleApply = await DonationRequest.findOne(query);
      res.json(sigleApply);
    } catch (error) {
      next(error);
    }
  };
  //Update sigle apply request processing== not try
  const updeteRequest = async (req, res, next) => {
    // console.log('hitted', req.body);
  
    try {
      const id = req.query.id;
      const filter = { _id: id };
      const updateRequest = { $set: { isVerified: 'true', pay: true } }
  
      const response = await DonationRequest.findOneAndReplace(filter, updateRequest);
      res.json(response);
    } catch (error) {
      next(error);
    }
  };
  // Delete apply==not try 
  const deleteApply = async (req, res, next) => {
    console.log('hitted');
    try {
      const id = req.query.id;
      const query = { _id: id };
      const deleteRequest = await DonationRequest.findOneAndDelete(query);
      res.json(deleteRequest);
    } catch (error) {
      next(error);
    }
  };
  
  // exports all module
  module.exports = {
    helpRequestApply,
    getAllApply,
    getSigleApply,
    updeteRequest,
    deleteApply,
  };