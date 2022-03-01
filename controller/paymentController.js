const handlePaymentStripe = async (req, res) => {
  const items = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: items.price * 100,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({ clientSecret: paymentIntent.client_secret });
};

module.exports = { handlePaymentStripe };
