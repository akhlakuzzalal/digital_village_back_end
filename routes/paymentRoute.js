const express = require('express');
const { handlePaymentStripe } = require('../controller/paymentController');
require('dotenv').config();
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRETE);

router.post('/create-payment-intent', handlePaymentStripe);

module.exports = router;
