const Video = require('../schemas/VideoSchema');
const Blog = require('../schemas/BlogSchema');
const User = require('../schemas/UserSchema');
const Teacher = require('../schemas/TeacherSchema');
const fileSizeFormatter = require('../utilities/fileSizeFormatter');

const publishVideo = async (req, res, next) => {
  const file = {
    name: req.file.originalname,
    path: req.file.path,
    type: req.file.mimetype,
    size: fileSizeFormatter(req.file.size, 2), // 0.00
  };

  const newVideo = {
    ...JSON.parse(req.body.video),
    video: file,
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
    const { id } = req.query;
    const response = await Video.findOneAndDelete({ _id: id });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const publishBlog = async (req, res, next) => {
  const file = {
    name: req.file.originalname,
    path: req.file.path,
    type: req.file.mimetype,
    size: fileSizeFormatter(req.file.size, 2), // 0.00
  };

  const newBlog = {
    ...JSON.parse(req.body.blog),
    bannerImg: file,
    isVerified: false,
  };

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
  const { id } = req.query;
  let editedBlog = {};
  if (req.file) {
    const file = {
      name: req.file.originalname,
      path: req.file.path,
      type: req.file.mimetype,
      size: fileSizeFormatter(req.file.size, 2), // 0.00
    };

    editedBlog = {
      ...JSON.parse(req.body.blog),
      bannerImg: file,
    };
  } else {
    editedBlog = {
      ...JSON.parse(req.body.blog),
    };
  }

  try {
    const response = await Blog.findOneAndUpdate({ _id: id }, editedBlog);
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
    const { id } = req.query;
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
