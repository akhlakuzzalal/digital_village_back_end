const DonationCause = require('../schemas/DonationCauseSchema');
const fileSizeFormatter = require('../utilities/fileSizeFormatter');
const User = require('../schemas/UserSchema');

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
    const response = await DonationCause.create(newDonationCause);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

// Get All Cuases
const getAllCuases = async (req, res, next) => {
  try {
    const allCuases = await DonationCause.find({});
    res.json(allCuases);
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
            isPaid: d.isPaid,
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
        donars: [
          ...cause?.donars,
          { donarId, amount: Number(amount), isPaid: false },
        ],
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

const updateDonarPaymentStatus = async (req, res, next) => {
  const { donarId, causeId, isPaid } = req.body;
  try {
    const cause = await DonationCause.findOne({ _id: causeId });
    let updateFields = {}; // field inside this object will be udpated

    // check if the donar is available or not
    const isDonarAvailAble =
      cause?.donars && cause?.donars.find((d) => d.donarId === donarId);

    if (isDonarAvailAble) {
      // update the payment status of donars
      const mapDonars = cause.donars.map((d) => {
        if (d.donarId === donarId) {
          return {
            _id: d._id,
            donarId: d.donarId,
            amount: d.amount,
            isPaid,
          }; //increase the previous given amount of donars
        } else {
          return d;
        }
      });

      updateFields = {
        donars: mapDonars,
      };
    } else {
      return res.json({
        message: "user donesn't exist",
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
      allDonars = allCauses
        .map((cause) => {
          if (cause?.donars && cause?.donars.length >= 1) {
            const causeInfo = {
              _id: cause?._id,
              title: cause?.title,
              image: cause?.image,
              description: cause?.description,
              category: cause?.category,
              goal: cause?.goal,
              raised: cause?.raised,
              date: cause?.date,
            };
            return { causeInfo, donarInfo: cause?.donars };
          } else {
            return false;
          }
        })
        .flat()
        .filter((allInfo) => allInfo)
        .map((info) => {
          // get all the donarInfo from the user collection
          const donarInfo = info.donarInfo.map((d) => {
            const donar = allUsers.find(
              (user) => user._id.toString() === d.donarId
            );
            const infoOfDonarWithAll = {
              donar,
              _id: d.donarId,
              amount: d.amount,
              isPaid: d.isPaid,
            };
            return infoOfDonarWithAll;
          });

          const AllInfoOfDonar = {
            causeInfo: info.causeInfo,
            donarInfo,
          };
          return AllInfoOfDonar;
        });
    }
    res.json(allDonars);
  } catch (error) {
    next(error);
  }
};

const getSpecificUserDonationInfo = async (req, res, next) => {
  try {
    const { uId } = req.query;
    const allCauses = await DonationCause.find();
    const allCausesWithMyDonation = allCauses.map((cause) => {
      let UserDonations = cause.donars.filter((d) => d.donarId === uId);

      return {
        _id: cause?._id,
        title: cause?.title,
        image: cause?.image,
        description: cause?.description,
        category: cause?.category,
        goal: cause?.goal,
        raised: cause?.raised,
        date: cause?.date,
        donars: UserDonations,
      };
    });

    res.json(allCausesWithMyDonation);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleAddDonateCuase,
  getAllCuases,
  deleteCuase,
  updateACause,
  takeDonations,
  getAllDonarInfo,
  updateDonarPaymentStatus,
  getSpecificUserDonationInfo,
};
