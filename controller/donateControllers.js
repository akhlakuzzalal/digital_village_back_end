const Donate = require('../schemas/DonateSchema');
// const ObjectId = require('mongodb').ObjectId;

                    // Causes all apply
// add a new donation cuase administrator Post == ok
const handleAddDonateCuase = async (req, res, next) => {
  console.log('hitted');
  try {
    const newCuase = req.body;
    const result = await Donate.insertMany(newCuase);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Get All Cuases ==ok
const getAllCuases = async (req, res, next) => {
  try {
    const allCuases = await Donate.find({});
    res.json(allCuases);
  } catch (error) {
    next(error);
  }
};

// Get sigle Cuase == ok
const getSigleCuase = async (req, res, next) => {
  try {
    const id = req.query.id;
    const query = { _id: id };
    const sigleCuase = await Donate.findOne(query);
    res.json(sigleCuase);
  } catch (error) {
    next(error);
  }
};

// Delete sigle Cuase==ok
const deleteCuase = async (req, res, next) => {
  console.log('hitted');
  try {
    const id = req.query.id;
    const query = { _id: id };
    const sigleCuasedelete = await Donate.findOneAndDelete(query);
    res.json(sigleCuasedelete);
  } catch (error) {
    next(error);
  }
};

//Update sigle Cuase==ok
const updeteCuase = async (req, res, next) => {
  console.log('hitted', req.body);

  try {
    const id = req.query.id;
    const updateCuase = req.body;
    const filter = { _id: id };

    const response = await Donate.findOneAndReplace(filter, updateCuase);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
                    // Donar payments Apply
// add a new donation cuase payment a donar Post == not try
const AddDonarPayment = async (req, res, next) => {
  console.log('hitted');
  try {
    const newDonarPayment = req.body;
    const result = await Donate.insertMany(newDonarPayment);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Get All Payments == not try
const getAllPayments = async (req, res, next) => {
  try {
    const allPayments = await Donate.find({});
    res.json(allPayments);
  } catch (error) {
    next(error);
  }
};

// Get sigle Payment == not try
const getSiglePayment = async (req, res, next) => {
  try {
    const id = req.query.id;
    const query = { _id: id };
    const siglePay = await Donate.findOne(query);
    res.json(siglePay);
  } catch (error) {
    next(error);
  }
};
//Update sigle payment== not try
const updetePayment = async (req, res, next) => {
  console.log('hitted', req.body);

  try {
    const id = req.query.id;
    const updatePay = req.body;
    const filter = { _id: id };

    const response = await Donate.findOneAndReplace(filter, updatePay);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
// Delete sigle payment==not try 
const deletePayment = async (req, res, next) => {
  console.log('hitted');
  try {
    const id = req.query.id;
    const query = { _id: id };
    const siglePaydelete = await Donate.findOneAndDelete(query);
    res.json(siglePaydelete);
  } catch (error) {
    next(error);
  }
};

                    // Donation Request Apply
// add a new donation help Request Apply a user Post == not try
const helpRequestApply = async (req, res, next) => {
  console.log('hitted');
  try {
    const helpRequest = req.body;
    const result = await Donate.insertMany(helpRequest);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
// Get All apply == not try
const getAllApply = async (req, res, next) => {
  try {
    const allApply = await Donate.find({});
    res.json(allApply);
  } catch (error) {
    next(error);
  }
};
// Get sigle apply == not try
const getSigleApply = async (req, res, next) => {
  try {
    const id = req.query.id;
    const query = { _id: id };
    const sigleApply = await Donate.findOne(query);
    res.json(sigleApply);
  } catch (error) {
    next(error);
  }
};
//Update sigle apply request processing== not try
const updeteRequest = async (req, res, next) => {
  console.log('hitted', req.body);

  try {
    const id = req.query.id;
    const updateRequest= req.body;
    const filter = { _id: id };

    const response = await Donate.findOneAndReplace(filter, updateRequest);
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
    const deleteRequest = await Donate.findOneAndDelete(query);
    res.json(deleteRequest);
  } catch (error) {
    next(error);
  }
};

// exports all module

module.exports = {
  handleAddDonateCuase,
  helpRequestApply,
  getAllCuases,
  getSigleCuase,
  AddDonarPayment,
  deleteCuase,
  updeteCuase,
  getAllPayments,
  getSiglePayment,
  updetePayment,
  deletePayment,
  getAllApply,
  getSigleApply,
  updeteRequest,
  deleteApply,
};
