const Video = require('../../schemas/Education/VideoSchema/Video');
const User = require('../../schemas/UsersSchema/User');
const Teacher = require('../../schemas/Education/TeacherSchema/Teacher');
const fileSizeFormatter = require('../../utilities/fileSizeFormatter');
const Blog = require('../../schemas/Education/BlogSchema/Blog');

const getallVideo = async (req, res, next) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    next(error);
  }
};

const getallBlogs = async (req, res, next) => {
  const { page, size } = req.query;
  console.log(page, size);

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

const addTeacher = async (req, res, next) => {
  try {
    const teacher = req.body;
    const findUser = await User.find({ email: teacher?.email });
    const user = findUser[0];
    const addNewRole = { ...user.roles, Teacher: 2000 };

    // add the new roles of user
    await User.updateOne({ email: teacher?.email }, { roles: addNewRole });
    const response = await Teacher.insertMany(teacher);

    res.json(response);
  } catch (error) {
    next(error);
  }
};

// publish blog
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

// publish video
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

module.exports = {
  getallVideo,
  getallBlogs,
  addTeacher,
  publishBlog,
  publishVideo,
};
