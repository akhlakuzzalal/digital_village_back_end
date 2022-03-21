const Notification = require('../schemas/NotificationsSchema');
const User = require('../schemas/UserSchema');

const getAllNotification = async (req, res, next) => {
  try {
    const response = await Notification.find();
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const handleAddNotification = async (req, res, next) => {
  try {
    const newNotification = { ...req.body, date: new Date().toDateString() };
    const user = await User.find({ email: req.body.email });
    const users = await User.find();
    console.log(user);
    if (user && user[0]?.email) {
      const response = await Notification.create(newNotification);
      res.json(response);
    } else {
      res.json({
        error: "user doesn't exist",
        users: users.slice(0, 10),
      });
    }
  } catch (error) {
    next(error);
  }
};

const getSpecificUserNotification = async (req, res, next) => {
  try {
    let { page, size, email } = req.query;

    const count = await Notification.count({ email });

    const notifications = await Notification.find({
      email,
    })
      .skip(parseInt(page) * parseInt(size))
      .limit(parseInt(size));

    res.json({
      count,
      notifications,
    });
  } catch (error) {
    next(error);
  }
};

const handleDeleteNotification = async (req, res, next) => {
  try {
    const { id } = req.query;
    const response = await Notification.deleteOne({ id });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllNotification,
  handleAddNotification,
  getSpecificUserNotification,
  handleDeleteNotification,
};
