const jwt = require('jsonwebtoken');

const validateUser = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { userId, name, dateOfBirth } = decoded;
    req.name = name;
    req.userId = userId;
    req.dateOfBirth = dateOfBirth;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateUser;
