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
const paymentRoute = require('./routes/paymentRoute');
const eMarketRoutes = require('./routes/eMarketRoutes');
const notificationRoutes = require('./routes/NotificationRoutes');
const userRoutes = require('./routes/admin/userRoutes');
const studentRoutes = require('./routes/Education/studentRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const newsRoutes = require('./routes/NewsRoutes');
const developmentRoutes = require('./routes/DevelopmentRoutes');
const donateRoutes = require('./routes/donateRoutes');
const errorhandler = require('./middlewares/errorhandler');
const vaccineRegistrationRoutes = require('./routes/vaccineRegistrationRoutes');
const availableAppointmentRoutes = require('./routes/availableAppointmentRoutes');
const sslCommerzRoutes = require("./routes/sslCommerzRoutes/sslCommerzRoutes");
// midlewares
const app = express();
app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser()); // for cookies
app.use(express.static(path.join(__dirname, '/build'))); // Serve the static files from the React app
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve the static files from the React app

// connection with mongoDB Atlas
// const uri = "mongodb+srv://digital-village:HVcG8fCzyilDkSrH@cluster0.l2jwh.mongodb.net/digital-village?retryWrites=true&w=majority";
const uri = process.env.MONGODB_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connection successfull'))
  .catch((err) => console.log(err));

// All API
async function run() {
  try {
    app.use('/auth', authRoutes);
    app.use('/teacher', teacherRoutes);
    app.use('/student', studentRoutes);
    app.use('/user', userRoutes);
    app.use('/notification', notificationRoutes);
    app.use('/event', eventRoutes);
    app.use('/review', reviewRoutes);
    app.use('/payment', paymentRoute);
    app.use('/emartket', eMarketRoutes);
    app.use('/appointment', appointmentRoutes);
    app.use('/news', newsRoutes);
    app.use('/development', developmentRoutes);
    app.use('/vaccine', vaccineRegistrationRoutes);
    app.use('/availableAppointment', availableAppointmentRoutes);
    app.use('/donation', donateRoutes);
    app.use("/sslpayment", sslCommerzRoutes);
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
