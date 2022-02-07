const express = require('express');
const router = express.Router();
const User = require('../schemas/UsersSchema/User');

// get all users
router.get('/allusers', async (req, res) => {});

// get a single users
router.get('/:id', async (req, res) => {});

// post a users
router.post('/:id', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save((err) => {
    if (err) {
      res.status(500).json({
        error: 'There was a error',
      });
    } else {
      res.status(200).json({
        message: 'user added to db successfully',
      });
    }
  });
});

// update a users
router.put('/:id', async (req, res) => {});

// delete a users
router.delete('/:id', async (req, res) => {});

module.exports = router;
