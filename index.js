require('dotenv').config();
require('./config/mongo');
const app = require('./app');

const port = process.env.PORT;

// app listner
app.listen(port, () => {
  console.log('server is running in localhost:', port);
});
