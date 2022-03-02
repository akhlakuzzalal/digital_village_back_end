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
  makeBlogFavourite,
  makeVideoFavourite,
  getAllFavouriteBlogs,
  getAllFavouriteVideos,
};
