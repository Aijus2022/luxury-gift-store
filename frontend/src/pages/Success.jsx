import React from 'react';
import { Link } from 'react-router-dom';

function Success() {
    return (
        <div className="max-w-xl mx-auto p-8 mt-12 text-center bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-semibold text-mint-green mb-4">Thank You!</h2>
            <p className="text-gray-700">
                Your purchase was successful. We hope you enjoy your products!
            </p>
            <Link to="/" className="inline-block mt-6 bg-mint-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-500">
                Back to Home
            </Link>
        </div>
    );
}

export default Success;

