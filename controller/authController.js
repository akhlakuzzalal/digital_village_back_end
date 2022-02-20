const login = (req, res, next) => {
  res.json({ message: 'welcome user loggedin' });
};

module.exports = {
  login,
};
