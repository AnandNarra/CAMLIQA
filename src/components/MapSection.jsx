import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const MapSection = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-pastel-blue">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-deep-teal mb-4">Our Location</h2>
                    <div className="h-1.5 w-24 bg-golden-accent mx-auto rounded-full"></div>
                </div>

                <div className="relative glass-card rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
                    <div className="w-full h-[450px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.672535732127!2d81.6575971!3d16.743135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37910000000001%3A0xe733737373719000!2sCamliqa%20International!5e0!3m2!1sen!2sin!4v1709420000000!5m2!1sen!2sin"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-auto">
                        <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-soft-teal/20 flex flex-col md:flex-row items-center gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-soft-teal text-white rounded-full flex items-center justify-center shadow-lg">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <p className="font-bold text-deep-teal">Camliqa International</p>
                                    <p className="text-sm text-gray-500">Vizag, Andhra Pradesh, India</p>
                                </div>
                            </div>

                            <button className="px-8 py-3 bg-teal-gradient text-balck rounded-full font-bold shadow-md hover:bg-deep-teal text-pink transition-all whitespace-nowrap">
                                Add to Contact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
