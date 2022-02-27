const User = require('../schemas/UsersSchema/User');
const hashPassword = require('../utilities/hashPassword');
const jwt = require('jsonwebtoken');

// HANDLE THE REGISTER OF USER
const handleRegister = async (req, res, next) => {
  // secure the user password
  const hashedPassword = hashPassword(req.body.password);

  const roles = { User: 1000 };

  // GIVE THE USE A REFRESH TOKEN
  const refreshToken = jwt.sign(
    {
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      roles,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: '30d',
    }
  );

  const newUser = {
    ...req.body,
    roles,
    password: hashedPassword,
    refreshToken,
  };

  try {
    await User.insertMany(newUser);

    // GIVE THE USER AN ACCESS TOKEN
    const accessToken = jwt.sign(
      {
        UserInfo: {
          name: req.body.name,
          dateOfBirth: req.body.dateOfBirth,
          roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '30m',
      }
    );

    res.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'None',
      // secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({
      accessToken,
      roles,
      message: `${newUser.name}, You have signed up successfully`,
    });
  } catch (error) {
    next(error);
  }
};

// HANDLE THE LOGIN OF USER
const handleLogin = async (req, res, next) => {
  try {
    const user = await User.find({ email: req.body.email });

    if (user && user.length > 0) {
      const isValidPassword =
        hashPassword(req.body.password) === user[0].password;

      if (isValidPassword) {
        const roles = Object.values(user[0].roles).filter(Boolean);

        // GIVE THE USE AN ACCESS TOKEN
        const accessToken = jwt.sign(
          {
            UserInfo: {
              name: user[0].name,
              dateOfBirth: user[0].dateOfBirth,
              roles,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: '30m',
          }
        );

        // GIVE THE USE A REFRESH TOKEN
        const refreshToken = jwt.sign(
          {
            name: user[0].name,
            dateOfBirth: user[0].dateOfBirth,
            roles,
          },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: '30d',
          }
        );

        await User.updateOne({ ...user, refreshToken }); // logged in user will get refresh token

        res.cookie('jwt', refreshToken, {
          httpOnly: true,
          sameSite: 'None',
          // secure: true,
          maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({
          accessToken,
          roles,
          message: `Successfully logged in`,
        });
      } else {
        res.sendStatus(401).json({
          error: 'Authentication failed!',
        });
      }
    } else {
      res.status(401).json({
        error: 'Authentication failed!',
      });
    }
  } catch (error) {
    console.log('error here');
    next(error);
  }
};

const handleLogout = async (req, res, next) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(204).json({ message: 'logout failed' });
  const refreshToken = cookies.jwt;
  try {
    const user = await User.find({ refreshToken });

    if (!user[0].name) {
      res.clearCookie('jwt', {
        httpOnly: true,
        sameSite: 'None',
        // secure: true,
      });
      return res.status(403).json({
        message: 'logout failed',
      });
    }

    // DELETE THE PREVIOUS REFRESH TOKEN OF USER
    await User.findOneAndUpdate({ refreshToken }, { refreshToken: '' });

    res.clearCookie('jwt', {
      httpOnly: true,
      // secure: true,
    });

    res.status(204).json({
      message: 'Successfully logged out',
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allusers = await User.find();
    res.json(allusers);
  } catch (error) {
    next(error);
  }
};

// USE THE REFRESH TOKEN TO GENERATE A NEW ACCESS TOKEN
const useRefreshToken = async (req, res, next) => {
  const cookies = req.cookies;
  console.log(cookies);
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  console.log(refreshToken);

  try {
    const user = await User.find({ refreshToken });

    // verify jwt
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err || user[0].name !== decoded.name) return res.sendStatus(403);
        const roles = Object.values(user[0].roles);

        const accessToken = jwt.sign(
          {
            UserInfo: {
              userId: user[0]._id,
              roles,
              name: user[0].name,
              dateOfBirth: user[0].dateOfBirth,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '30m' }
        );

        // SEND THE COOKIE
        res.cookie('jwt', refreshToken, {
          httpOnly: true,
          sameSite: 'None',
          // secure: true, // hide when testing
          maxAge: 24 * 60 * 60 * 1000,
        });

        res.json({ accessToken });
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleLogin,
  handleRegister,
  handleLogout,
  getAllUsers,
  useRefreshToken,
};