const Video = require('../schemas/VideoSchema');
const Blog = require('../schemas/BlogSchema');
const User = require('../schemas/UserSchema');
const Teacher = require('../schemas/TeacherSchema');
const deleteFile = require('../utilities/deleteFile');

const publishVideo = async (req, res, next) => {
  const newVideo = {
    ...req.body,
    isVerified: false,
  };

  try {
    const response = await Video.insertMany(newVideo);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getallVideo = async (req, res, next) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    next(error);
  }
};

const getSingleVideo = async (req, res, next) => {
  try {
    const { id } = req.query;
    const video = await Video.findOne({ _id: id });
    res.json(video);
  } catch (error) {
    next(error);
  }
};

const getMyVideos = async (req, res, next) => {
  try {
    const { email } = req.query;
    const response = await Video.find({ email });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const editAVideo = async (req, res, next) => {
  try {
    const { id } = req.query;
    const editedVideo = req.body;
    const response = await Video.findOneAndUpdate({ _id: id }, editedVideo, {
      new: true,
    });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const deleteAVideo = async (req, res, next) => {
  try {
    const { id, public_id } = req.query;

    console.log('this is video public_id', public_id);

    deleteFile(public_id);

    const response = await Video.findOneAndDelete({ _id: id });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const publishBlog = async (req, res, next) => {
  const newBlog = { ...req.body, isVerified: false };
  try {
    const response = await Blog.insertMany(newBlog);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getallBlogs = async (req, res, next) => {
  const { page, size } = req.query;

  try {
    let count;
    if (!(page && size)) {
      count = await Blog.count({});
    } else {
      count = await Blog.count({ isVerified: true });
    }

    const blogs = await Blog.find()
      .skip(parseInt(page) * parseInt(size))
      .limit(parseInt(size));

    res.send({
      count,
      blogs,
    });
  } catch (error) {
    next(error);
  }
};

const getMyBlogs = async (req, res, next) => {
  try {
    const { email } = req.query;
    const response = await Blog.find({ email });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getSingleBlog = async (req, res, next) => {
  try {
    const { id } = req.query;
    const blog = await Blog.findOne({ _id: id });
    res.json(blog);
  } catch (error) {
    next(error);
  }
};

const editABlog = async (req, res, next) => {
  const { id, public_id } = req.query;

  const updatedBlog = req.body;

  deleteFile(public_id);

  try {
    const response = await Blog.findOneAndUpdate({ _id: id }, updatedBlog);
    res.json({
      success: true,
      response,
    });
  } catch (error) {
    next(error);
  }
};

const deleteABlog = async (req, res, next) => {
  try {
    const { id, public_id } = req.query;

    deleteFile(public_id);

    const response = await Blog.findOneAndDelete({ _id: id });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const addTeacher = async (req, res, next) => {
  try {
    const teacher = req.body;
    const findUser = await User.find({ email: teacher?.email });
    const user = findUser[0];
    const addNewRole = { ...user.roles, Teacher: 3000 };

    // add the new roles of user
    await User.updateOne({ email: teacher?.email }, { roles: addNewRole });
    const response = await Teacher.create(teacher);

    res.json(response);
  } catch (error) {
    next(error);
  }
};

// publish video

module.exports = {
  getallVideo,
  getallBlogs,
  addTeacher,
  publishBlog,
  publishVideo,
  getMyBlogs,
  getMyVideos,
  deleteABlog,
  deleteAVideo,
  getSingleVideo,
  editAVideo,
  getSingleBlog,
  editABlog,
};
