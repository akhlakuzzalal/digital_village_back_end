const {
    handleLogin,
    handleRegister,
    useRefreshToken,
    handleLogout,
  } = require('../../../controller/authController');
  const { getAllUsers } = require('../../../controller/userController');
  
  router.post('/register', handleRegister);
  router.post('/login', handleLogin);
  router.get('/logout', handleLogout);
  router.get('/refresh', useRefreshToken);
  router.get('/allUsers', validateUser, getAllUsers);
  module.exports = router;