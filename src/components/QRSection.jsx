import React from 'react';
import { motion } from 'framer-motion';

const QRSection = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-10 flex flex-col md:flex-row items-center gap-12 border-2 border-white/50">
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative p-6 bg-white rounded-3xl shadow-xl border-2 border-soft-teal/10 group">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-soft-teal to-golden-accent opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>
                        <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://camliqa-official.vercel.app/"
                            alt="Scan QR"
                            className="relative w-48 h-48 md:w-64 md:h-64 object-contain"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-deep-teal mb-4">QR Code</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Scan this code to save my contact quickly. Explore our range of daily beauty rituals and get in touch directly.
                    </p>

                    <div className="flex flex-col space-y-4">
                        <p className="text-lg font-bold text-soft-teal">"Scan to Contact"</p>
                        <button className="px-10 py-4 bg-teal-gradient text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                            Add to Contact
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QRSection;
