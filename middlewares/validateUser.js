const jwt = require('jsonwebtoken');

const validateUser = (req, res, next) => {
  const authorization = req.headers['authorization'];

  if (!authorization?.startsWith('Bearer ')) return res.sendStatus(401);
  try {
    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.sendStatus(403); // invalid token
      }
      const {
        UserInfo: { name, dateOfBirth, roles, uId },
      } = decoded;
      req.name = name;
      req.dateOfBirth = dateOfBirth;
      req.uId = uId;
      req.roles = roles;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = validateUser;
