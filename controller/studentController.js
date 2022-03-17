const Video = require('../schemas/VideoSchema');
const Blog = require('../schemas/BlogSchema');
const Roles = require('../config/roles');
const { filterBlogAndVideo } = require('../utilities/Filter');

const getallVideos = async (req, res, next) => {
  let { page, size, roles, search } = req.query;
  if (roles) {
    roles = JSON.parse(roles);
  }

  try {
    let count;
    const isAdmin = roles && roles.length > 0 && roles.includes(Roles.Admin);

    if (isAdmin) {
      if (search && page && size) {
        const allVideos = await Video.find();
        const allFilteredVideos = filterBlogAndVideo(allVideos, search);
        count = allFilteredVideos.length; // count will be only filtered videos from all videos

        const sendVideos = parseInt(page)
          ? parseInt(page) < parseInt(size)
            ? allFilteredVideos.slice(parseInt(page) * 10)
            : allFilteredVideos.slice(parseInt(page) * 10, parseInt(size))
          : allFilteredVideos.slice(parseInt(page), parseInt(size));

        return res.json({
          count,
          videos: sendVideos,
        });
      } else {
        count = await Video.count({}); // count will be all videos
      }
    } else {
      if (search && page && size) {
        const allVerifiedVideos = await Video.find({ isVerified: true });
        const allVerifiedFilteredVideos = filterBlogAndVideo(
          allVerifiedVideos,
          search
        );
        count = allVerifiedFilteredVideos.length; // count will be all filtered videos from filtered videos
        const sendVideos = parseInt(page)
          ? parseInt(page) < parseInt(size)
            ? allVerifiedFilteredVideos.slice(parseInt(page) * 10)
            : allVerifiedFilteredVideos.slice(
                parseInt(page) * 10,
                parseInt(size)
              )
          : allVerifiedFilteredVideos.slice(parseInt(page), parseInt(size));

        return res.json({
          count,
          videos: sendVideos,
        });
      } else {
        count = await Video.count({ isVerified: true }); // count will be all verified videos
      }
    }

    let videos;

    if (isAdmin) {
      if (page && size) {
        videos = await Video.find() // admin can access all videos
          .skip(parseInt(page) * parseInt(size))
          .limit(parseInt(size));
      } else {
        videos = await Video.find(); // send all if pagination query is not avialble
      }
    } else {
      if (page && size) {
        videos = await Video.find({ isVerified: true })
          .skip(parseInt(page) * parseInt(size))
          .limit(parseInt(size)); // a normal user can only see videos that are verified
      } else {
        videos = await Video.find({ isVerified: true }); // send all if pagination query is not avialble
      }
    }

    res.json({
      count,
      videos,
    });
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

const getAllFavouriteVideos = async (req, res, next) => {
  try {
    res.json({ message: 'get all favourite videos' });
  } catch (error) {
    next(error);
  }
};

const getallBlogs = async (req, res, next) => {
  let { page, size, roles, search } = req.query;
  if (roles) {
    roles = JSON.parse(roles);
  }

  try {
    let count;
    const isAdmin = roles && roles.length > 0 && roles.includes(Roles.Admin);

    if (isAdmin) {
      if (search && page && size) {
        const allBlogs = await Blog.find();
        const allFilteredBlogs = filterBlogAndVideo(allBlogs, search);
        count = allFilteredBlogs.length; // count will be only filtered blogs from all blogs
        const sendBlogs = parseInt(page)
          ? parseInt(page) < parseInt(size)
            ? allFilteredBlogs.slice(parseInt(page) * 10)
            : allFilteredBlogs.slice(parseInt(page) * 10, parseInt(size))
          : allFilteredBlogs.slice(parseInt(page), parseInt(size));

        return res.json({
          count,
          blogs: sendBlogs,
        });
      } else {
        count = await Blog.count({}); // count will be all blogs
      }
    } else {
      if (search && page && size) {
        const allVerifiedBlogs = await Blog.find({ isVerified: true });
        const allVerifiedFilteredBlogs = filterBlogAndVideo(
          allVerifiedBlogs,
          search
        );
        count = allVerifiedFilteredBlogs.length; // count will be all filtered blogs from filtered blogs
        const sendBlogs = parseInt(page)
          ? parseInt(page) < parseInt(size)
            ? allVerifiedFilteredBlogs.slice(parseInt(page) * 10)
            : allVerifiedFilteredBlogs.slice(
                parseInt(page) * 10,
                parseInt(size)
              )
          : allVerifiedFilteredBlogs.slice(parseInt(page), parseInt(size));

        return res.json({
          count,
          blogs: sendBlogs,
        });
      } else {
        count = await Blog.count({ isVerified: true }); // count will be all verified blogs
      }
    }

    let blogs;

    if (isAdmin) {
      if (page && size) {
        blogs = await Blog.find() // admin can access all blogs
          .skip(parseInt(page) * parseInt(size))
          .limit(parseInt(size));
      } else {
        blogs = await Blog.find(); // send all if pagination query is not avialble
      }
    } else {
      if (page && size) {
        blogs = await Blog.find({ isVerified: true })
          .skip(parseInt(page) * parseInt(size))
          .limit(parseInt(size)); // a normal user can only see blogs that are verified
      } else {
        blogs = await Blog.find({ isVerified: true }); // send all if pagination query is not avialble
      }
    }

    res.json({
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

const makeBlogFavourite = async (req, res, next) => {
  try {
    res.json({ message: 'make a blog favourite' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getallVideos,
  getallBlogs,
  makeBlogFavourite,
  makeVideoFavourite,
  getAllFavouriteBlogs,
  getAllFavouriteVideos,
  getallVideos,
};
