const express = require('express');
const router = express.Router();
const roles = require('../config/roles');
const verifyRoles = require('../middlewares/verifyRoles');
const validateUser = require('../middlewares/validateUser');

const {
  handleLogin,
  handleRegister,
  getAllUsers,
  useRefreshToken,
  handleLogout,
} = require('../controller/authController');

router.post('/register', handleRegister);
router.post('/login', handleLogin);
router.get('/logout', handleLogout);
router.get('/refresh', useRefreshToken);
router.get('/allUsers', validateUser, getAllUsers);
module.exports = router;
