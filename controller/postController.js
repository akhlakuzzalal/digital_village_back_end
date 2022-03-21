const Post = require('../schemas/PostSchema');
const User = require('../schemas/UserSchema');
const fileSizeFormatter = require('../utilities/fileSizeFormatter');

// add Post
const addPost = async (req, res, next) => {
  const postData = req.body;
  try {
    const responce = await Post.insertMany(postData);
    res.json(responce);
  } catch (err) {
    next(err);
  }
};

// add post with image
const addPostwithImage = async (req, res, next) => {
  // set Up file
  const file = {
    name: req.file.originalname,
    path: req.file.path,
    type: req.file.mimetype,
    size: fileSizeFormatter(req.file.size, 2), // 0.00
  };
  // post data
  const postData = {
    ...JSON.parse(req.body.post),
    photo: file,
  };
  // addPost
  try {
    const responce = await Post.insertMany(postData);
    res.json(responce);
  } catch (err) {
    next(err);
  }
};

// get All Post
const getPost = async (req, res, next) => {
  try {
    const responce = await Post.find({});
    res.json(responce);
  } catch (err) {
    next(err);
  }
};

// update post
const updatePost = async (req, res, next) => {
  try {
    const { id, email } = req.query;
    const data = req.body;
    const post = await Post.find({ _id: id });
    if (post[0]?.userEmail === email) {
      const responce = await Post.findByIdAndUpdate({ _id: id }, data);
      res.json({ update: true });
    } else res.json('user not match with this post');
  } catch (err) {
    next(err);
  }
};

// delete a Post
const deletePost = async (req, res, next) => {
  const { id, email } = req.query;
  const post = await Post.find({ _id: id });
  if (post[0]?.userEmail === email) {
    try {
      const responce = await Post.deleteOne({ _id: id });
      res.json(responce);
    } catch (err) {
      next(err);
    }
  }
};

// get POst by user
const getPostByUser = async (req, res, next) => {
  const { email } = req.query;
  try {
    const responce = await Post.find({ userEmail: email });
    res.json(responce);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addPost,
  addPostwithImage,
  getPost,
  updatePost,
  deletePost,
  getPostByUser,
};
