const express = require('express');
const {
  getAllUsers,
  getASingleUser,
  updateUserWithoutProfileImg,
  updateUser,
} = require('./userController');

const router = express.Router();

router.get('/all', getAllUsers);
router.get('/singleUserInfo', getASingleUser);
router.put('/update', updateUser);
router.put('/updateWithoutProfileImg', updateUserWithoutProfileImg);

module.exports = router;
