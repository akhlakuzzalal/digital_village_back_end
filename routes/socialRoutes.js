const express = require('express');
const {
  findAllUser,
  requestFriend,
  acceptFriend,
  cancleRequest,
} = require('../controller/socialController');
const router = express.Router();

router.get('/allUsers', findAllUser);
router.put('/request', requestFriend);
router.put('/accept', acceptFriend);
router.put('/cancel', cancleRequest);

module.exports = router;
