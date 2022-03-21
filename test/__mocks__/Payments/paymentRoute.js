const express = require('express');
const { handlePaymentStripe } = require('./paymentController');
const router = express.Router();

router.post('/create-payment-intent', handlePaymentStripe);

module.exports = router;
