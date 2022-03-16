const express = require('express');
const notificationRoutes = require('./test/Notification/__mocks__/NotificationRoutes');

const app = express();

app.use(express.json());

app.use('/notification', notificationRoutes);

module.exports = app;
