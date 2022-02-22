const jwt = require('jsonwebtoken');

const validateUser = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization?.startsWith('Bearer ')) return res.sendStatus(401);
  try {
    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.sendStatus(403); // invalid token
      }
      const {
        UserInfo: { userId, name, dateOfBirth, roles },
      } = decoded;
      req.name = name;
      req.userId = userId;
      req.roles = roles;
      req.dateOfBirth = dateOfBirth;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = validateUser;
