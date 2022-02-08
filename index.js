const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const usersHandaler = require('./handler/usersHandler');
const errorHandaler = require('./handler/errorHandler');

// midlewire
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('build'));

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
    app.use('/user', usersHandaler);
  } catch (error) {}
}

run().catch(console.dir);

// use error handaler
app.use(errorHandaler);

const port = process.env.PORT;
// app listner
app.listen(port, () => {
  console.log('server is running in localhost:', port);
});
