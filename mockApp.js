const express = require('express');
const notificationRoutes = require('./test/Notification/__mocks__/NotificationRoutes');

const mockApp = express();

mockApp.use(express.json());

mockApp.use('/notification', notificationRoutes);

module.exports = mockApp;
