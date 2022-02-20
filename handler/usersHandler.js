const express = require('express');
const router = express.Router();
const User = require('../schemas/UsersSchema/User');
const hashPassword = require('../utilities/hashPassword');
const jwt = require('jsonwebtoken');
const validateUser = require('../middlewares/validateUser');

// get a single users
router.get('/:id', async (req, res, next) => {});

// REGISTER A USER AND SAVE HIS INFO
router.post('/register', async (req, res, next) => {
  // secure the user password
  const hashedPassword = hashPassword(req.body.password);

  const user = { ...req.body, password: hashedPassword };

  try {
    await User.insertMany(user);
    res.json({
      message: 'User have signed up successfully',
    });
  } catch (error) {
    next(error);
  }
});

// LOGIN A USER
router.post('/login', async (req, res, next) => {
  try {
    const user = await User.find({ email: req.body.email });

    if (user && user.length > 0) {
      const isValidPassword =
        hashPassword(req.body.password) === user[0].password;

      if (isValidPassword) {
        const accessToken = jwt.sign(
          {
            userId: user[0]._id,
            name: user[0].name,
            dateOfBirth: user[0].dateOfBirth,
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: '30s',
          }
        );

        const refreshToken = jwt.sign(
          {
            userId: user[0]._id,
            name: user[0].name,
            dateOfBirth: user[0].dateOfBirth,
          },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: '1d',
          }
        );

        await User.updateOne({ ...user, refreshToken });

        res.cookie('jwt', refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({
          accessToken,
          message: `Successfully logged in`,
        });
      } else {
        res.status(401).json({
          error: 'Authentication failed!',
        });
      }
    } else {
      res.status(401).json({
        error: 'Authentication failed!',
      });
    }
  } catch (error) {
    next(error);
  }
});

// USE THE REFRESH TOKEN
router.get('/refresh', async (req, res, next) => {
  console.log('enter');
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  try {
    const user = User.find({ refreshToken });

    // verify jwt
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err || user.name !== decoded.name) return res.sendStatus(403);
        const accessToken = jwt.sign(
          {
            name: decoded.name,
            userId: decoded._id,
            dateOfBirth: decoded.dateOfBirth,
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '30s' }
        );
        res.json({ accessToken });
      }
    );
  } catch (error) {
    next(error);
  }
});

router.get('/get', (req, res) => {
  console.log('route hitted');
  res.json({ message: 'hello' });
});

// get all users who are applied for village member
router.get('/allusers', validateUser, async (req, res, next) => {
  try {
    const allusers = await User.find();
    res.json(allusers);
  } catch (error) {
    next(error);
  }
});

// update a users
router.put('/:id', async (req, res) => {});

module.exports = router;
