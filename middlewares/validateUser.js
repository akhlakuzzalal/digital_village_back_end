const jwt = require('jsonwebtoken');

const validateUser = (req, res, next) => {
  console.log(req.headers);
  const { authorization } = req.headers;
  console.log(authorization);
  if (!authorization?.startsWith('Bearer ')) return res.sendStatus(401);
  try {
    const token = authorization.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.sendStatus(403); // invalid token
      }
      const {
        UserInfo: { name, dateOfBirth, roles },
      } = decoded;
      req.name = name;
      req.dateOfBirth = dateOfBirth;
      req.roles = roles;
      next();
    });
  } catch (error) {
    next(error);
  }
};

module.exports = validateUser;
