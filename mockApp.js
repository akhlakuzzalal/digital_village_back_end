const express = require('express');
const notificationRoutes = require('./test/Notification/NotificationRoutes');

const mockApp = express();

mockApp.use(express.json());

mockApp.use('/notification', notificationRoutes);

module.exports = mockApp;
