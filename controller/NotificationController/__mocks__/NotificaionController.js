const getAllNotification = (req, res) => {
  const notifications = [
    {
      _id: '1',
      title: 'notificaton 1',
      email: 'user1@gmail.com',
      description: 'hello world',
    },
  ];
  res.sendStatus(200);
  return notifications;
};

// const handleAddNotification = async (req, res, next) => {
//   try {
//     const newNotification = req.body;
//     const response = await Notification.insertMany(newNotification);
//     res.json(response);
//   } catch (error) {
//     next(error);
//   }
// };

// const getSpecificUserNotification = async (req, res, next) => {
//   try {
//     const { email } = req.query;
//     const response = await Notification.find({ email });
//     res.json(response);
//   } catch (error) {
//     next(error);
//   }
// };

// const handleDeleteNotification = async (req, res, next) => {
//   try {
//     const { id } = req.query;
//     const response = await Notification.deleteOne({ id });
//     res.json(response);
//   } catch (error) {
//     next(error);
//   }
// };

// const testNotification = async (req, res, next) => {
//   try {
//     await res.send('hello world');
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  getAllNotification,
  // handleAddNotification,
  // getSpecificUserNotification,
  // handleDeleteNotification,
};
