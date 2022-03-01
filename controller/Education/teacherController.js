const Video = require('../../schemas/VideosSchema/Video');
const User = require('../../schemas/UsersSchema/User');
const Teacher = require('../../schemas/Education/TeacherSchema/Teacher');
const fileSizeFormatter = require('../../utilities/fileSizeFormatter');

const handleUploadVideo = async (req, res, next) => {
  try {
    const file = {
      videoName: req.file.originalname,
      videoPath: req.file.path,
      videoType: req.file.mimetype,
      videoSize: fileSizeFormatter(req.file.size, 2), // 0.00
    };
    await Video.insertMany(file);
    res.json({
      message: 'file uploaded successfully',
    });
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

module.exports = {
  handleUploadVideo,
  getallVideo,
  addTeacher,
};
