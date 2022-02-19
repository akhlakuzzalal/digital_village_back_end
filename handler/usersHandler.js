const express = require('express');
const router = express.Router();
const User = require('../schemas/UsersSchema/User');
const crypto = require('crypto');

// get all users who are applied for village member
router.get('/allusers', async (req, res, next) => {
  try {
    const allusers = await User.find();
    res.json(allusers);
  } catch (error) {
    next(error);
  }
});

// get a single users
router.get('/:id', async (req, res, next) => {});

// REGISTER A USER AND SAVE HIS INFO
router.post('/register', async (req, res, next) => {
  // secure the user password
  const hashedPassword = crypto
    .createHash('sha256')
    .update(req.body.password)
    .digest('hex');

  const user = { ...req.body, password: hashedPassword };

  try {
    await User.insertMany(user);
    res.json({
      message: 'User have signed up successfully',
    });
  } catch (error) {
    next(error);
  }
});

// update a users
router.put('/:id', async (req, res) => {});

module.exports = router;
