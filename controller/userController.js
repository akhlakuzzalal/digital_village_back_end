const User = require('../schemas/UserSchema');
const deleteFile = require('../utilities/deleteFile');

const getAllUsers = async (req, res, next) => {
  let { page, size } = req.query;

  try {
    let count = await User.count();
    let allUsers;
    if (page && size) {
      allUsers = await User.find()
        .skip(parseInt(page) * parseInt(size))
        .limit(parseInt(size)); // send users with pagination
    } else {
      allUsers = await User.find(); // send all user
    }

    res.json({
      count,
      allUsers,
    });
  } catch (error) {
    next(error);
  }
};

const getASingleUser = async (req, res, next) => {
  try {
    const { email } = req.query;
    const user = await User.find({ email });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { id, public_id } = req.query;

  deleteFile(public_id);

  const userInfo = req.body;

  try {
    const response = await User.findOneAndUpdate({ _id: id }, userInfo, {
      new: true,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const updateUserWithoutProfileImg = async (req, res, next) => {
  const { id } = req.query;

  try {
    const response = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const changeRole = async (req, res, next) => {
  try {
    const { id } = req.query;
    const roles = req.body;
    const response = await User.findOneAndUpdate(
      { _id: id },
      { roles },
      {
        new: true,
      }
    );
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  changeRole,
  getAllUsers,
  updateUser,
  getASingleUser,
  updateUserWithoutProfileImg,
};
