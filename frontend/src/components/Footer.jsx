import React from 'react';

function Footer() {
    return (
        <footer className="bg-[#e8f5f2] py-6 mt-8 text-center text-gray-700">
            <div className="container mx-auto">
                <p className="text-sm">
                    © {new Date().getFullYear()} Aijus Application Development Services. All Rights Reserved.
                </p>
                <p className="text-xs mt-2">
                    Crafted with elegance and quality for a delightful shopping experience.
                </p>
            </div>
        </footer>
    );
}

export default Footer;

