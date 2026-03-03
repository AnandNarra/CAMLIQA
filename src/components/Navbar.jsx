import React, { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show navbar after 80% of the first viewport (Hero section) is scrolled
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 transform ${isVisible
                ? 'translate-y-0 opacity-100 bg-white/90 backdrop-blur-md shadow-sm py-4'
                : '-translate-y-full opacity-0 pointer-events-none py-6'
                } px-6 md:px-12 flex flex-col md:flex-row items-center justify-between`}
        >
            <div
                className="flex items-center space-x-4 mb-2 md:mb-0 cursor-pointer"
                onClick={() => scrollToSection('home')}
            >
                <h1 className="text-2xl font-bold tracking-tight text-soft-teal">CAMLIQA</h1>
                <div className="h-6 w-[1px] bg-gray-300 hidden md:block"></div>
                <p className="text-xs md:text-sm text-gray-500 font-medium italic">
                    "Natural products for your natural beauty"
                </p>
            </div>

            <div className="flex items-center space-x-8">
                <div className="hidden md:flex items-center space-x-6 text-sm font-bold text-gray-700 uppercase tracking-widest">
                    <button onClick={() => scrollToSection('home')} className="hover:text-soft-teal transition-colors">Home</button>
                    <button onClick={() => scrollToSection('products')} className="hover:text-soft-teal transition-colors">Products</button>
                    <button onClick={() => scrollToSection('inquiry')} className="hover:text-soft-teal transition-colors">Inquiry</button>
                    <button onClick={() => scrollToSection('location')} className="hover:text-soft-teal transition-colors">Location</button>
                </div>

                <div className="relative group cursor-pointer flex items-center space-x-1 text-gray-700 font-semibold text-sm">
                    <span>EN</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
