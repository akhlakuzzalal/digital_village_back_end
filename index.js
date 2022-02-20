const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const errorController = require('./controller/errorController');

// midlewire
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser()); // for cookies
app.use(express.static(path.join(__dirname, '/build'))); // Serve the static files from the React app

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
  } catch (error) {
    console.log(error.message);
  }
}

run().catch(console.dir);

// use error handaler
app.use(errorController);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT;

// app listner
app.listen(port, () => {
  console.log('server is running in localhost:', port);
});
