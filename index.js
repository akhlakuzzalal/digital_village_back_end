require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const credentials = require('./middlewares/credentials');
const corsOptions = require('./config/corsOptions');
const authRoutes = require('./routes/authRoutes');
const teacherRoutes = require('./routes/Education/teacherRoutes');
const notificationRoutes = require('./routes/NotificationRoutes');
const userRoutes = require('./routes/admin/userRoutes');
const studentRoutes = require('./routes/Education/studentRoutes');
const errorhandler = require('./middlewares/errorhandler');
const { urlencoded } = require('express');

// midlewares
const app = express();
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser()); // for cookies
app.use(express.static(path.join(__dirname, '/build'))); // Serve the static files from the React app
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve the static files from the React app

// connection with mongoDB Atlas
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection successfull'))
  .catch((err) => console.log(err));

async function run() {
  try {
    app.use('/auth', authRoutes);
    app.use('/teacher', teacherRoutes);
    app.use('/student', studentRoutes);
    app.use('/user', userRoutes);
    app.use('/notification', notificationRoutes);
  } catch (error) {
    console.log(error.message);
  }
}

run().catch(console.dir);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

// use error handaler
app.use(errorhandler);

const port = process.env.PORT;

// app listner
app.listen(port, () => {
  console.log('server is running in localhost:', port);
});
