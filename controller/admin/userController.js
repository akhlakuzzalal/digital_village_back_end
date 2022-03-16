const User = require('../../schemas/UsersSchema/UserSchema');

const getAllUsers = async (req, res, next) => {
  try {
    const allusers = await User.find();
    res.json(allusers);
  } catch (error) {
    next(error);
  }
};

const updateRoles = () => {
  try {
  } catch (error) {
    next(error);
  }
};

// Update User

const handleUpdateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    Object.assign(user, req.body);
    user.save();
    res.send(user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateRoles,
  getAllUsers,
  handleUpdateUser,
};
