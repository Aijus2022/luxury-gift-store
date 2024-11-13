// src/pages/ProductCard.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../products.json';
import { useCart } from '../CartContext';

function ProductCard() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        // Find the product based on the ID in the URL
        const selectedProduct = products.find((item) => item._id === parseInt(id));
        setProduct(selectedProduct);
    }, [id]);

    const handleAddToCart = () => {
        addToCart(product); // Add the product to the cart
        navigate('/cart'); // Redirect to the Cart page
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div className="product-card max-w-lg mx-auto p-8">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4" />
            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-800 font-semibold mb-4">£{product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;

