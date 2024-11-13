// src/pages/Cart.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';

function Cart() {
    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();
    const [isProceeding, setIsProceeding] = useState(false);

    const handleProceedToCheckout = () => {
        setIsProceeding(true); // Start animation
        setTimeout(() => {
            navigate('/checkout'); // Navigate to Checkout after a short delay
        }, 1000); // Delay for animation (1 second)
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    if (cart.length === 0) {
        return <p className="text-center text-gray-700">Your cart is empty.</p>;
    }

    return (
        <div className="cart-page max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item._id} className="flex justify-between items-center mb-4 border-b pb-4">
                        <div>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-gray-700">£{item.price.toFixed(2)}</p>
                        </div>
                        <button
                            onClick={() => removeFromCart(item._id)}
                            className="text-red-500 hover:text-red-700 transition-all duration-200"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between border-t pt-4 mt-4">
                <span className="text-lg font-semibold">Total Price:</span>
                <span className="text-lg font-semibold">£{totalPrice}</span>
            </div>
            <button
                onClick={handleProceedToCheckout}
                className={`mt-8 flex items-center justify-center bg-mint-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-500 transition-all duration-300 ${
                    isProceeding ? 'cursor-wait' : ''
                }`}
                disabled={isProceeding}
            >
                {isProceeding ? (
                    <div className="flex items-center space-x-2">
                        <span className="loader mr-2 border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
                        <span>Processing...</span>
                    </div>
                ) : (
                    <span>Proceed to Checkout</span>
                )}
            </button>
        </div>
    );
}

export default Cart;

