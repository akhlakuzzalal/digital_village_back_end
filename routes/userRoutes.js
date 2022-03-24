const express = require('express');
const {
  getAllUsers,
  getASingleUser,
  updateUserWithoutProfileImg,
  updateUser,
  changeRole,
} = require('../controller/userController');
const upload = require('../middlewares/upload');
const validateUser = require('../middlewares/validateUser');

const router = express.Router();

router.get('/all', getAllUsers);
router.get('/singleUserInfo', getASingleUser);
router.put('/update', upload.single('file'), updateUser);
router.put('/updateWithoutProfileImg', updateUserWithoutProfileImg);
router.put('/changeRole', changeRole);

module.exports = router;
