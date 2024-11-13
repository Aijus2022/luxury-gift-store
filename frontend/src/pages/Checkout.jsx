// frontend/src/pages/Checkout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';

function Checkout() {
    const navigate = useNavigate();
    const { cart } = useCart();

    // Calculate the total price of items in the cart
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    const handleProceedToPayment = () => {
        navigate('/payment');
    };

    return (
        <div className="checkout-page max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            {cart.length === 0 ? (
                <p className="text-gray-700">Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item._id} className="flex justify-between mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-700">£{item.price.toFixed(2)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between border-t pt-4 mt-4">
                        <span className="text-lg font-semibold">Total Price:</span>
                        <span className="text-lg font-semibold">£{totalPrice}</span>
                    </div>
                </div>
            )}

            <button
                onClick={handleProceedToPayment}
                className="mt-8 proceed-to-payment bg-mint-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-500 transition-all duration-300"
                disabled={cart.length === 0} // Disable button if cart is empty
            >
                Proceed to Payment
            </button>
        </div>
    );
}

export default Checkout;

