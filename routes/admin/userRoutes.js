const express = require('express');
const {
  updateRoles,
  getAllUsers,
  handleUpdateUser,
} = require('../../controller/admin/userController');
const validateUser = require('../../middlewares/validateUser');

const router = express.Router();

router.put('/update/:email', handleUpdateUser);
router.put('/updateRoles', updateRoles);
router.get('/all', validateUser, getAllUsers);

module.exports = router;
