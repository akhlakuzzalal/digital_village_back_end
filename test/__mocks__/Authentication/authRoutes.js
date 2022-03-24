const {
    handleLogin,
    handleRegister,
    useRefreshToken,
    handleLogout,
  } = require('./authController');

  
  router.post('/register', handleRegister);
  router.post('/login', handleLogin);
  router.get('/logout', handleLogout);
  router.get('/refresh', useRefreshToken);
  module.exports = router;