// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar bg-white shadow-md p-4 flex justify-center space-x-6">
            <NavLink
                exact
                to="/"
                className="text-gray-700 hover:text-teal-600 transition-all duration-300"
                activeClassName="active-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/products"
                className="text-gray-700 hover:text-teal-600 transition-all duration-300"
                activeClassName="active-link"
            >
                Products
            </NavLink>
            <NavLink
                to="/cart"
                className="text-gray-700 hover:text-teal-600 transition-all duration-300"
                activeClassName="active-link"
            >
                Cart
            </NavLink>
            <NavLink
                to="/checkout"
                className="text-gray-700 hover:text-teal-600 transition-all duration-300"
                activeClassName="active-link"
            >
                Checkout
            </NavLink>
        </nav>
    );
}

export default Navbar;


