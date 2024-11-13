// frontend/src/pages/Products.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {
    const [products4x4, setProducts4x4] = useState([]);
    const [products3x3, setProducts3x3] = useState([]);

    useEffect(() => {
        const bestsellers = [
            { _id: 1, title: 'Product 1', description: 'High-quality item', price: 50.00, image: '/images/chocolate.jpg' },
            { _id: 2, title: 'Product 2', description: 'Exclusive design', price: 75.00, image: '/images/gifts.jpg' },
            { _id: 3, title: 'Product 3', description: 'Popular choice', price: 30.00, image: '/images/vine.jpg' },
            { _id: 4, title: 'Product 4', description: 'Best value', price: 20.00, image: '/images/giftbox.jpg' },
        ];

        const newArrivals = [
            { _id: 5, title: 'Product 5', description: 'Advent calendar', price: 40.00, image: '/images/advent-calendar.gif' },
            { _id: 6, title: 'Product 6', description: 'Pretty giftbox', price: 100.00, image: '/images/giftbox.jpg' },
            { _id: 7, title: 'Product 7', description: 'Nice hamper', price: 25.00, image: '/images/nice-hamper.jpg' },
        ];

        setProducts4x4(bestsellers);
        setProducts3x3(newArrivals);
    }, []);

    return (
        <div className="products-page">
            <div className="bg-white text-center py-2 text-mint-green font-semibold">
                Enjoy FREE DELIVERY on all orders over £150.
            </div>

            <section className="relative w-full h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden">
                <div className="h-[60%] w-full relative">
                    <img 
                        src="../images/wine-and-spirits.jpg"
                        alt="Products Hero Background"
                        className="opacity-90 w-full h-full object-cover"
                    />
                </div>
                <div className="h-[40%] w-full bg-[#E8F5F2] flex items-center justify-center p-8 md:p-12">
                    <div className="text-center max-w-lg">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">Explore Our Exquisite Products</h1>
                        <p className="text-md md:text-lg text-gray-700">
                            Browse our wide range of carefully curated items, crafted to bring joy, beauty, and quality to every occasion.
                        </p>
                    </div>
                </div>
            </section>

            <nav className="py-4 px-4 md:px-8 text-gray-600 text-sm flex items-center space-x-2">
                <Link to="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:underline">Products</Link>
            </nav>

            {/* Section 1: 4x4 Product Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800">Our Bestselling Products</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Discover our collection of bestsellers, carefully selected to bring you the finest in quality and taste.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    {products4x4.map((product) => (
                        <div key={product._id} className="text-center">
                            <Link to={`/products/${product._id}`}>
                                <div className="w-full aspect-square overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.title}</h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                                <p className="text-gray-700 font-semibold">£{product.price.toFixed(2)}</p>
                                <button className="mt-2 text-mint-green hover:text-teal-500 font-semibold">See More</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2: 3x3 Product Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-800">New Arrivals & Exclusive Items</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Check out our latest arrivals and exclusive products, perfect for gifting or treating yourself.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                    {products3x3.map((product) => (
                        <div key={product._id} className="text-center">
                            <Link to={`/products/${product._id}`}>
                                <div className="w-full aspect-square overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.title}</h3>
                                <p className="text-sm text-gray-600">{product.description}</p>
                                <p className="text-gray-700 font-semibold">£{product.price.toFixed(2)}</p>
                                <button className="mt-2 text-mint-green hover:text-teal-500 font-semibold">See More</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Products;

