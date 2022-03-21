const express = require('express');
const {
  addPost,
  getPost,
  updatePost,
  deletePost,
  getPostByUser,
  addPostwithImage,
} = require('./../Post/postController');
const {
  findAllUser,
  requestFriend,
  acceptFriend,
  cancleRequest,
  usersofMedia,
} = require('./socialController');
const { socketController } = require('./../SocketIO/SocketIOController');
const router = express.Router();
// account related
router.get('/allUsers', findAllUser);
router.get('/usersofMedia', usersofMedia);
router.put('/request', requestFriend);
router.put('/accept', acceptFriend);
router.put('/cancel', cancleRequest);
router.get('/message', socketController);

// post Crud
router.get('/allPost', getPost);
router.post('/addPost', addPost);
router.post('/addPostwithImage', addPostwithImage);
router.put('/updatePost', updatePost);
router.delete('/deletePost', deletePost);
router.get('/postsByUser', getPostByUser);

module.exports = router;
