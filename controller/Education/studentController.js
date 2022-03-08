const Video = require('../../schemas/Education/VideoSchema/Video');
const Blog = require('../../schemas/Education/BlogSchema/Blog');
const Roles = require('../../config/roles');
const getallVideo = async (req, res, next) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    next(error);
  }
};

const getallBlogs = async (req, res, next) => {
  let { page, size, roles } = req.query;
  console.log(page, size, roles);
  roles = JSON.parse(roles);
  console.log(roles);
  try {
    let count;
    const isAdmin = roles && roles.length > 0 && roles.includes(Roles.Admin);
    if (!(page && size)) {
      if (isAdmin) {
        count = await Blog.count({});
      } else {
        count = await Blog.count({ isVerified: true });
      }
    } else {
      if (isAdmin) {
        count = await Blog.count({});
      } else {
        count = await Blog.count({ isVerified: true });
      }
    }

    let blogs;
    if (roles && roles.length > 0 && roles.includes(Roles.Admin)) {
      blogs = await Blog.find() // admin can access all blogs
        .skip(parseInt(page) * parseInt(size))
        .limit(parseInt(size));
    } else {
      blogs = await Blog.find({ isVerified: true }) // a normal user can only see blogs that are verified
        .skip(parseInt(page) * parseInt(size))
        .limit(parseInt(size));
    }

    res.send({
      count,
      blogs,
    });
  } catch (error) {
    next(error);
  }
};

const getAllFavouriteBlogs = async (req, res, next) => {
  try {
    res.json({ message: 'get all favourite blogs' });
  } catch (error) {
    next(error);
  }
};

const getAllFavouriteVideos = async (req, res, next) => {
  try {
    res.json({ message: 'get all favourite videos' });
  } catch (error) {
    next(error);
  }
};

const makeBlogFavourite = async (req, res, next) => {
  try {
    res.json({ message: 'make a blog favourite' });
  } catch (error) {
    next(error);
  }
};

const makeVideoFavourite = async (req, res, next) => {
  try {
    res.json({ message: 'make a video favourite' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getallVideo,
  getallBlogs,
  makeBlogFavourite,
  makeVideoFavourite,
  getAllFavouriteBlogs,
  getAllFavouriteVideos,
};
