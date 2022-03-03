const express = require('express');
const { handlePaymentStripe } = require('../controller/paymentController');
require('dotenv').config();
const router = express.Router();

router.post('/create-payment-intent', handlePaymentStripe);

module.exports = router;
