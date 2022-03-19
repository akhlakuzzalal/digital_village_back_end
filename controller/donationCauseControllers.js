const DonationCause = require('../schemas/DonationCauseSchema');
const fileSizeFormatter = require('../utilities/fileSizeFormatter');
const User = require('../schemas/UserSchema');
// const ObjectId = require('mongodb').ObjectId;

// add a new donation cuase administrator Post == ok
const handleAddDonateCuase = async (req, res, next) => {
  const file = {
    name: req.file.originalname,
    path: req.file.path,
    type: req.file.mimetype,
    size: fileSizeFormatter(req.file.size, 2), // 0.00
  };

  const newDonationCause = {
    ...JSON.parse(req.body.cause),
    image: file,
  };

  try {
    const response = await DonationCause.insertMany(newDonationCause);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

// add a new donation cuase payment a donar Post == not try
const AddDonarPayment = async (req, res, next) => {
  try {
    const newDonarPayment = req.body;
    const result = await DonationCause.insertMany(newDonarPayment);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// Get All Cuases ==ok
const getAllCuases = async (req, res, next) => {
  try {
    const allCuases = await DonationCause.find({});
    res.json(allCuases);
  } catch (error) {
    next(error);
  }
};

// Get All Payments == not try
const getAllPayments = async (req, res, next) => {
  try {
    const allPayments = await DonationCause.find({});
    res.json(allPayments);
  } catch (error) {
    next(error);
  }
};

// Delete sigle Cuase
const deleteCuase = async (req, res, next) => {
  try {
    const id = req.query.id;
    const query = { _id: id };
    const sigleCuasedelete = await DonationCause.findOneAndDelete(query);
    res.json(sigleCuasedelete);
  } catch (error) {
    next(error);
  }
};

//Update sigle Cause
const updateACause = async (req, res, next) => {
  const { id } = req.query;
  let editedDonationCause = {};
  if (req.file) {
    const file = {
      name: req.file.originalname,
      path: req.file.path,
      type: req.file.mimetype,
      size: fileSizeFormatter(req.file.size, 2), // 0.00
    };
    editedDonationCause = {
      ...JSON.parse(req.body.cause),
      image: file,
    };
  } else {
    editedDonationCause = {
      ...JSON.parse(req.body.cause),
    };
  }

  try {
    const response = await DonationCause.findOneAndUpdate(
      { _id: id },
      editedDonationCause,
      { new: true }
    );
    res.json(response);
  } catch (error) {
    next(error);
  }
};

// take donations
const takeDonations = async (req, res, next) => {
  const { amount, donarId, causeId } = req.body;
  try {
    const cause = await DonationCause.findOne({ _id: causeId });
    let updateFields = {}; // field inside this object will be udpated

    // check if the donar previously donated or not
    const isDonarAvailAble =
      cause?.donars && cause?.donars.find((d) => d.donarId === donarId);

    if (isDonarAvailAble) {
      // update the previous donation amount of donars and increase the raised amount
      const mapDonars = cause.donars.map((d) => {
        if (d.donarId === donarId) {
          return {
            _id: d._id,
            donarId: d.donarId,
            amount: d.amount + Number(amount),
          }; //increase the previous given amount of donars
        } else {
          // return {donarId: d.donarId, amount: d.amount, _id: d._id};
          return d;
        }
      });

      updateFields = {
        donars: mapDonars,
        raised: cause?.raised + Number(amount),
      };
    } else {
      // add the new donar in donars array and increase the raised amount
      updateFields = {
        donars: [...cause?.donars, { donarId, amount: Number(amount) }],
        raised: cause?.raised + Number(amount),
      };
    }

    // check if the goal achieved or not
    if (updateFields?.raised >= 50000) {
      return res.json({
        message: 'goal allready achieved',
      });
    }

    const updatedCause = await DonationCause.findOneAndUpdate(
      { _id: causeId },
      updateFields,
      { new: true }
    );
    res.json(updatedCause);
  } catch (error) {
    next(error);
  }
};

const getAllDonarInfo = async (req, res, next) => {
  try {
    const allCauses = await DonationCause.find();
    const allUsers = await User.find();
    allDonars = [];
    if (allCauses && allCauses.length >= 1) {
      console.log('entered');
      allDonars = allCauses.map((cause) => {
        console.log(cause.donarId); // problem here cause.donarId is not defined

        if (cause?.donars && cause?.donars.length >= 1) {
          donar = allUsers.filter((user) => {
            console.log(user._id, cause.donarId); // user._id is objectId
            return user._id === cause.donarId;
          });
        }
        return { donar, amount: cause.amount };
      });
    }
    res.json(allDonars);
  } catch (error) {
    next(error);
  }
};

// exports all module

module.exports = {
  handleAddDonateCuase,
  getAllCuases,
  AddDonarPayment,
  deleteCuase,
  updateACause,
  getAllPayments,
  takeDonations,
  getAllDonarInfo,
};
