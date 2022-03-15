const express = require('express');
const {
  findAllUser,
  requestFriend,
  acceptFriend,
} = require('../controller/socialController');
const router = express.Router();

router.get('/allUsers', findAllUser);
router.put('/request', requestFriend);
router.put('/accept', acceptFriend);

module.exports = router;
