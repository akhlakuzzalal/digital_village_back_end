const getUserAnalytics = async (req, res, next) => {
  try {
    console.log('this is teacher analytics');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserAnalytics,
};
