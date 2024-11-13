import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your Stripe public key

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            console.error(error);
        } else {
            console.log('Payment Method:', paymentMethod);
            alert('Payment Successful');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8">
            <label className="block mb-2">Name</label>
            <input type="text" required className="border p-2 mb-4 w-full" />

            <label className="block mb-2">Email</label>
            <input type="email" required className="border p-2 mb-4 w-full" />

            <label className="block mb-2">Address</label>
            <input type="text" required className="border p-2 mb-4 w-full" />

            <label className="block mb-2">Telephone</label>
            <input type="tel" required className="border p-2 mb-4 w-full" />

            <label className="block mb-2">Payment Details</label>
            <CardElement className="border p-2 mb-4 w-full" />

            <button type="submit" disabled={!stripe} className="bg-blue-500 text-white px-4 py-2 mt-4 block text-center rounded">
                Pay Now
            </button>
        </form>
    );
}

function Checkout() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}

export default Checkout;
