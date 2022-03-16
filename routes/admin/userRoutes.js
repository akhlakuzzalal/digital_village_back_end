const express = require('express');
const {
  updateRoles,
  getAllUsers,
  handleUpdateUser,
  getASingleUser,
} = require('../../controller/admin/userController');
const upload = require('../../middlewares/upload');
const validateUser = require('../../middlewares/validateUser');

const router = express.Router();

router.get('/all', validateUser, getAllUsers);
router.get('/singleUserInfo', getASingleUser);
router.put('/update', upload.single('file'), handleUpdateUser);
// router.put('/updateRoles', updateRoles);

module.exports = router;
