const express = require('express');
const notificationRoutes = require('./test/__mocks__/Notification/NotificationRoutes');

const mockApp = express();

mockApp.use(express.json());

mockApp.use('/notification', notificationRoutes);

module.exports = mockApp;
