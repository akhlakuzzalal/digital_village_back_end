const express = require('express');
const router = express.Router();
const validateUser = require('../middlewares/validateUser');

const {
  handleLogin,
  handleRegister,
  getAllUsers,
} = require('../controller/authController');

router.get('/allUsers', validateUser, getAllUsers);
router.post('/register', handleRegister);
router.post('/login', handleLogin);
module.exports = router;
