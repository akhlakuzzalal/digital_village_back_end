const express = require('express');
const router = express.Router();
const User = require('../schemas/UsersSchema/User');
const hashPassword = require('../utilities/hashPassword');
const jwt = require('jsonwebtoken');

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
  const hashedPassword = hashPassword(req.body.password);

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

// LOGIN A USER
router.post('/login', async (req, res, next) => {
  try {
    const user = await User.find({ email: req.body.email });
    if (user && user.length > 0) {
      const isValidPassword =
        hashPassword(req.body.password) === user[0].password;

      if (isValidPassword) {
        const token = jwt.sign(
          {
            userId: user[0]._id,
            name: user[0].name,
            dateOfBirth: user[0].dateOfBirth,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '2h',
          }
        );

        res.json({
          token,
          message: 'Successfully logged in',
        });
      } else {
        res.status(401).json({
          error: 'Authentication failed!',
        });
      }
    } else {
      res.status(401).json({
        error: 'Authentication failed!',
      });
    }
  } catch (error) {
    next(error);
  }
});

// update a users
router.put('/:id', async (req, res) => {});

module.exports = router;
