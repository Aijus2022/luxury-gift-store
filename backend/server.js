require('dotenv').config(); // Load environment variables from a .env file
const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Use your environment variable for the Stripe secret key

app.use(cors());
app.use(express.json());

/**
 * Endpoint to create a Stripe Payment Intent
 */
app.post('/api/create-payment-intent', async (req, res) => {
    const { amount } = req.body; // Amount in cents (e.g., £10.00 = 1000)

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'gbp',
        });

        res.send({
            clientSecret: paymentIntent.client_secret, // Send client secret to frontend
        });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).send({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
