const app =
  process.env.NODE_ENV === 'test' ? require('./mockApp') : require('./app');
const http = require('http');
const appConfig = require('./config/appConfig');

const server = http.createServer(app);

// app listner
server.listen(appConfig.PORT, () => {
  console.log('server is running in localhost:', appConfig.PORT);
});

module.exports = {
  server,
};
