const jwt = require('jsonwebtoken');
// require('dotenv').config();

const validateUser = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  try {
    const token = authorization.split(' ')[1];
    console.log('this is access token', process.env.ACCESS_TOKEN_SECRET);
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return res.sendStatus(403); // invalid token
        }
        const { userId, name, dateOfBirth } = decoded;
        req.name = name;
        req.userId = userId;
        req.dateOfBirth = dateOfBirth;
        next();
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = validateUser;
