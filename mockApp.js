const express = require('express');
const { getAllUser } = require('./tests/__mock__/mockController');

const app = express();

app.use('/user', getAllUser);

module.exports = app;
