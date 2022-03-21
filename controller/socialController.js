const User = require('../schemas/UserSchema');

const findAllUser = async (req, res, next) => {
  const email = req.query.email;
  try {
    const user = await User.find({ email: email });
    const allUsersIncludingUser = await User.find({});
    const allUsers = allUsersIncludingUser?.filter(
      (user) => user.email !== email
    );
    const result = {
      user,
      allUsers,
    };
    res.json(result);
  } catch (err) {
    next(err);
  }
};

// find every user
const usersofMedia = async (req, res, next) => {
  try {
    const responce = await User.find({});
    res.json(responce);
  } catch (err) {
    next(err);
  }
};

const requestFriend = async (req, res, next) => {
  const { userID, requestedUserID } = req.body;
  console.log(req.body);
  const user = await User.find({ _id: userID });
  const requestedUser = await User.find({ _id: requestedUserID });
  if (
    !user[0]?.requesting.includes(requestedUserID) &&
    !user[0]?.requested.includes(requestedUserID) &&
    !user[0]?.connection.includes(requestedUserID)
  ) {
    try {
      const updateUser = await User.findByIdAndUpdate(
        { _id: userID },
        { requesting: [...user[0]?.requesting, requestedUserID] }
      );
      const updateReqUser = await User.findByIdAndUpdate(
        { _id: requestedUserID },
        { requested: [...requestedUser[0]?.requested, userID] }
      );
      res.json('Succesfully Requested');
    } catch (err) {
      next(err);
    }
  } else {
    res.json('Already Requested');
  }
};

const acceptFriend = async (req, res, next) => {
  const { userID, requestingUserID } = req.body;
  const user = await User.find({ _id: userID });
  const requestingUser = await User.find({ _id: requestingUserID });
  if (
    user[0]?.requested.includes(requestingUserID) &&
    requestingUser[0]?.requesting.includes(userID) &&
    !user[0]?.connection.includes(requestingUserID)
  ) {
    //   user pending request
    const userRequested = user[0]?.requested.filter(
      (id) => id !== requestingUserID
    );
    // sender request
    const reqUserRequesting = requestingUser[0]?.requesting.filter(
      (id) => id !== userID
    );
    // user connection
    const userconnections = [...user[0]?.connection, requestingUserID];
    // requesting user connection
    const reqUserCnnections = [...requestingUser[0]?.connection, userID];
    try {
      // set user
      await User.findByIdAndUpdate(
        { _id: userID },
        { connection: userconnections, requested: userRequested }
      );
      //   set req User
      await User.findByIdAndUpdate(
        { _id: requestingUserID },
        { connection: reqUserCnnections, requesting: reqUserRequesting }
      );
      res.json('accept');
    } catch (err) {
      next(err);
    }
  } else {
    res.json('you are already Connected');
  }
};

const cancleRequest = async (req, res, next) => {
  const { userID, requestingUserID } = req.body;
  const user = await User.find({ _id: userID });
  const requestingUser = await User.find({ _id: requestingUserID });
  try {
    if (
      user[0]?.requesting.includes(requestingUserID) &&
      requestingUser[0]?.requested.includes(userID)
    ) {
      const newRequeesting = user[0]?.requesting.filter(
        (id) => id !== requestingUserID
      );
      const newRequested = requestingUser[0]?.requested.filter(
        (id) => id !== userID
      );
      await User.findByIdAndUpdate(
        { _id: userID },
        { requesting: newRequeesting }
      );
      await User.findByIdAndUpdate(
        { _id: requestingUserID },
        { requested: newRequested }
      );
      res.json('Canceled Request');
    } else {
      res.json('Something Wrong');
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  findAllUser,
  requestFriend,
  acceptFriend,
  cancleRequest,
  usersofMedia,
};
