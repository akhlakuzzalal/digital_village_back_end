const Donate = require('../schemas/donateSchema/DonateSchema');
// const ObjectId = require('mongodb').ObjectId;

// add a new donation cuase administrator Post == ok
const handleAddDonateCuase = async (req, res, next) => {
  try {
    const newCuase = req.body;
    const result = await Donate.insertMany(newCuase);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// add a new donation cuase payment a donar Post == not try
const AddDonarPayment = async (req, res, next) => {
  try {
    const newDonarPayment = req.body;
    const result = await Donate.insertMany(newDonarPayment);
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

// Get All Payments == not try
const getAllPayments = async (req, res, next) => {
  try {
    const allPayments = await Donate.find({});
    res.json(allPayments);
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

// Delete sigle Cuase
const deleteCuase = async (req, res, next) => {
  try {
    const id = req.query.id;
    const query = { _id: id };
    const sigleCuasedelete = await Donate.findOneAndDelete(query);
    res.json(sigleCuasedelete);
  } catch (error) {
    next(error);
  }
};

//Update sigle Cuase
const updeteCuase = async (req, res, next) => {
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

// exports all module

module.exports = {
  handleAddDonateCuase,
  getAllCuases,
  getSigleCuase,
  AddDonarPayment,
  deleteCuase,
  updeteCuase,
  getAllPayments,
};
