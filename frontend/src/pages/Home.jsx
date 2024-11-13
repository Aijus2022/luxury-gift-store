import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const productData4x4 = [
    { id: '1', image: '/images/tea.jpg', title: 'Winter Warmers', description: 'Seasonal teas, coffee, and hot chocolate.', link: '/products' },
    { id: '2', image: '/images/giftbox.jpg', title: 'Festive Hampers', description: 'Filled with holiday delights.', link: '/products' },
    { id: '3', image: '/images/crackers.jpg', title: 'Festive Crackers', description: 'Luxurious crackers for the Christmas table.', link: '/products' },
    { id: '4', image: '/images/giftbox.jpg', title: 'New for 2024!', description: 'Exquisite Christmas collection for 2024.', link: '/products' },
];

const productData3x3 = [
    { id: '5', image: '/images/nice-hamper.jpg', title: 'Luxury Hampers', description: 'The perfect gift for any occasion.', link: '/products' },
    { id: '6', image: '/images/wine-and-spirits.jpg', title: 'Wine & Spirits', description: 'Exclusive wines for the season.', link: '/products' },
    { id: '7', image: '/images/advent-calendar.gif', title: 'Christmas Decorations', description: 'Beautiful decorations for a festive home.', link: '/products' },
];

const productData2x2 = [
    { id: '9', image: '/images/foodhall.jpg', title: 'Christmas Food', description: 'Seasonal treats and delicacies.', link: '/products' },
    { id: '10', image: '/images/crackers.jpg', title: 'Christmas Crackers', description: 'Fun and festive crackers.', link: '/products' },
];

export default function Home() {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        alert(`${product.title} has been added to the cart!`);
    };

    return (
        <div>
            <div className="bg-white text-center py-2 text-mint-green font-semibold">
                For a limited time only, enjoy FREE DELIVERY on all orders over £150.
            </div>

            <section className="flex flex-col md:flex-row w-full h-[500px] md:h-[600px] lg:h-[700px] relative overflow-hidden">
                <div className="w-full md:w-3/5 relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
                    <img 
                        src="/images/home.jpg" 
                        alt="Hero Background" 
                        className="object-cover object-center w-full h-full" 
                    />
                </div>
                <div className="w-full md:w-2/5 bg-[#E8F5F2] flex items-center justify-center p-8 md:p-12">
                    <div className="text-center md:text-left max-w-md z-20">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            A Christmas Extraordinary
                        </h1>
                        <p className="text-md md:text-lg text-gray-800 mb-4">
                            Wicker-bound parcels of Christmas joy. Exceptional food and drink for your feasting table. Glorious gifts, keepsake decorations, and crackers so lovely they're almost too beautiful to pull.
                        </p>
                        <Link to="/products" className="inline-block mt-4 text-mint-green bg-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-500 transition-all duration-300">
                            Shop the Collection
                        </Link>
                    </div>
                </div>
            </section>

            <nav className="py-4 px-4 md:px-8 text-gray-700 text-sm flex items-center space-x-2">
                <Link to="/" className="hover:underline">Home</Link>
                <span>/</span>
                <Link to="/products" className="hover:underline">Products</Link>
            </nav>

            {/* Section 1: 4x4 Product Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-900">Browse Our Exclusive Christmas Collection</h2>
                <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                    Discover a selection of carefully curated items for the holiday season, perfect for gifting and celebrating.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                    {productData4x4.map((product) => (
                        <div key={product.id} className="text-center">
                            <div className="w-full aspect-square overflow-hidden rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.title}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <Link to="/products" className="text-teal-600 font-semibold hover:underline mt-2 block">
                                Shop Now
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2: 3x3 Product Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-900">Gifts & Hampers for Every Celebration</h2>
                <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                    Celebrate with our luxurious collection of hampers, gifts, and festive decor that make every moment unforgettable.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
                    {productData3x3.map((product) => (
                        <div key={product.id} className="text-center">
                            <div className="w-full aspect-square overflow-hidden rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.title}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <Link to="/products" className="text-teal-600 font-semibold hover:underline mt-2 block">
                                Shop Now
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 3: 2x2 Product Grid */}
            <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-gray-900">Delicious Treats for the Holiday</h2>
                <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
                    Indulge in our finest selection of seasonal foods and treats to make this holiday season memorable.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
                    {productData2x2.map((product) => (
                        <div key={product.id} className="text-center">
                            <div className="w-full aspect-square overflow-hidden rounded-lg">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mt-4">{product.title}</h3>
                            <p className="text-sm text-gray-600">{product.description}</p>
                            <Link to="/products" className="text-teal-600 font-semibold hover:underline mt-2 block">
                                Shop Now
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
