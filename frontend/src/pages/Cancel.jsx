import React from 'react';
import { Link } from 'react-router-dom';

function Cancel() {
    return (
        <div className="max-w-xl mx-auto p-8 mt-12 text-center bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-semibold text-red-500 mb-4">Order Canceled</h2>
            <p className="text-gray-700">
                Your order was canceled. If you have any questions, please contact our support.
            </p>
            <Link to="/products" className="inline-block mt-6 bg-mint-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-500">
                Continue Shopping
            </Link>
        </div>
    );
}

export default Cancel;
