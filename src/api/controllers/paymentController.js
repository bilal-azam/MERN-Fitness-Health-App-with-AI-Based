const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createCheckoutSession = async (req, res) => {
  try {
      const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: req.body.items,
          mode: 'subscription',
          success_url: `undefined/success`,
          cancel_url: `undefined/cancel`,
      });
      res.json({ id: session.id });
  } catch (error) {
      res.status(500).send('Server error');
  }
};