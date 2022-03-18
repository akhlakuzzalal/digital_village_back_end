const express = require('express');
const {
  findAllUser,
  requestFriend,
  acceptFriend,
  cancleRequest,
} = require('../controller/socialController');
const { socketController } = require('../controller/SocketIOController');
const router = express.Router();

router.get('/allUsers', findAllUser);
router.put('/request', requestFriend);
router.put('/accept', acceptFriend);
router.put('/cancel', cancleRequest);
router.get('/message', socketController);

module.exports = router;
