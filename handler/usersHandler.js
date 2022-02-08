const express = require('express');
const router = express.Router();
const User = require('../schemas/UsersSchema/User');

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
router.get('/:id', async (req, res) => {});

// post a users
router.post('/adduser', async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await User.insertMany(newUser);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
});

// update a users
router.put('/:id', async (req, res) => {});

// delete a users
router.delete('/:id', async (req, res) => {});

module.exports = router;
