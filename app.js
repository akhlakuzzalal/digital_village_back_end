const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const appConfig = require('./config/appConfig');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const credentials = require('./middlewares/credentials');
const corsOptions = require('./config/corsOptions');
const authRoutes = require('./routes/authRoutes');
const teacherRoutes = require('./routes/Education/teacherRoutes');
const paymentRoute = require('./routes/paymentRoute');
const eMarketRoutes = require('./routes/eMarketRoutes');
const notificationRoutes = require('./routes/NotificationRoutes');
const userRoutes = require('./routes/admin/userRoutes');
const studentRoutes = require('./routes/Education/studentRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const dislikeRoutes = require('./routes/dislikeRoutes');
const newsRoutes = require('./routes/NewsRoutes');
const developmentRoutes = require('./routes/DevelopmentRoutes');
const donateRoutes = require('./routes/donateRoutes');
const favouriteRoutes = require('./routes/favouriteRoutes');
const errorhandler = require('./middlewares/errorhandler');
const vaccineRegistrationRoutes = require('./routes/vaccineRegistrationRoutes');
const availableAppointmentRoutes = require('./routes/availableAppointmentRoutes');
const UserReviewRoutes = require('./routes/UserReviewRoutes');
const socialRoutes = require('./routes/socialRoutes');
const sslCommerzRoutes = require("./routes/sslCommerzRoutes/sslCommerzRoutes");

const app = express();

process.env.NODE_ENV !== 'test'
  ? mongoose
      .connect(appConfig.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('connection successfull'))
      .catch((err) => console.log(err))
  : console.log('In testing mode');

// midlewares
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser()); // for cookies
app.use(express.static(path.join(__dirname, '/build'))); // Serve the static files from the React app
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve the static files from the React app

// API
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/teacher', teacherRoutes);
app.use('/student', studentRoutes);
app.use('/notification', notificationRoutes);
app.use('/event', eventRoutes);
app.use('/review', reviewRoutes);
app.use('/payment', paymentRoute);
app.use('/emarket', eMarketRoutes);
app.use('/appointment', appointmentRoutes);
app.use('/news', newsRoutes);
app.use('/development', developmentRoutes);
app.use('/vaccine', vaccineRegistrationRoutes);
app.use('/availableAppointment', availableAppointmentRoutes);
app.use('/donation', donateRoutes);
app.use('/comment', commentRoutes);
app.use('/like', likeRoutes);
app.use('/disLike', dislikeRoutes);
app.use('/favourites', favouriteRoutes);
app.use('/userReview', UserReviewRoutes);
app.use('/social', socialRoutes);
app.use("/sslpayment", sslCommerzRoutes);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

// use error handaler
app.use(errorhandler);

module.exports = app;