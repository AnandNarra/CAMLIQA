import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 px-6 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="mb-6">
                    <h2 className="text-2xl font-black text-soft-teal tracking-tighter">CAMLIQA</h2>
                </div>

                <p className="text-gray-400 text-sm font-medium tracking-wide">
                    © {new Date().getFullYear()} CAMLIQA. All rights reserved.
                </p>

                <div className="mt-4 flex items-center space-x-2">
                    <span className="text-xs text-gray-300">Made by</span>
                    <span className="text-xs font-bold text-soft-teal/60">Camliqa</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
