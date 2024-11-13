// frontend/src/pages/Payment.jsx
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your actual Stripe publishable key

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handlePayment = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/api/create-payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: 1000 }) // Example amount in cents ($10.00)
            });

            const { clientSecret } = await response.json();

            const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: { card: elements.getElement(CardElement) },
            });

            if (error) {
                setError(`Payment failed: ${error.message}`);
            } else if (paymentIntent.status === 'succeeded') {
                setSuccess(true);
            }
        } catch (error) {
            setError(`Payment error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handlePayment} className="payment-form space-y-4">
            <div className="flex flex-col space-y-4">
                <label className="text-gray-700 font-semibold">Billing Address</label>
                <input type="text" placeholder="Full Name" className="border border-gray-300 p-2 rounded-md" required />
                <input type="text" placeholder="Address Line 1" className="border border-gray-300 p-2 rounded-md" required />
                <input type="text" placeholder="Address Line 2" className="border border-gray-300 p-2 rounded-md" />
                <input type="text" placeholder="City" className="border border-gray-300 p-2 rounded-md" required />
                <input type="text" placeholder="Postal Code" className="border border-gray-300 p-2 rounded-md" required />
            </div>

            <div className="mt-6">
                <label className="text-gray-700 font-semibold">Card Details</label>
                <CardElement className="card-element border border-gray-300 p-3 rounded-md" />
            </div>

            <button type="submit" disabled={!stripe || loading} className="w-full bg-mint-green text-white py-2 mt-4 rounded-lg font-semibold hover:bg-teal-500 transition-all duration-300">
                {loading ? 'Processing...' : 'Pay Now'}
            </button>

            {error && <p className="error-message text-red-500 mt-2">{error}</p>}
            {success && <p className="success-message text-green-600 mt-2">Payment successful!</p>}
        </form>
    );
}

function Payment() {
    return (
        <div className="payment-page max-w-lg mx-auto p-8 mt-12 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800">Payment</h1>
            <p className="text-gray-700 mb-6 text-center">Enter your payment details below to complete your purchase.</p>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
}

export default Payment;

