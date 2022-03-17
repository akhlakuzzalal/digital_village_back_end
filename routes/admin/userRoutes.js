const express = require('express');
const {
  getAllUsers,
  getASingleUser,
  updateUserWithoutProfileImg,
  updateUser,
} = require('../../controller/userController');
const upload = require('../../middlewares/upload');
const validateUser = require('../../middlewares/validateUser');

const router = express.Router();

router.get('/all', getAllUsers);
router.get('/singleUserInfo', getASingleUser);
router.put('/update', upload.single('file'), updateUser);
router.put('/updateWithoutProfileImg', updateUserWithoutProfileImg);

module.exports = router;
