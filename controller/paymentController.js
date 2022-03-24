const stripe = require('stripe')(process.env.STRIPE_SECRETE);

const handlePaymentStripe = async (req, res) => {
  const items = req.body;
  console.log(items.price, 'from stripe');
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 10 * 100,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = { handlePaymentStripe };
