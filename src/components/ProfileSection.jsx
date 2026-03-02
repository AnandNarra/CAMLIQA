import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook } from 'react-icons/fa';

const ProfileSection = () => {
    return (
        <section className="py-20 px-6 md:px-12 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card w-full max-w-lg p-8 rounded-[40px] relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-32 h-32 bg-soft-teal/5 rounded-bl-full transition-all group-hover:scale-110"></div>

                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden flex items-center justify-center bg-teal-gradient">
                        <span className="text-white text-4xl font-bold tracking-widest">CDK</span>
                    </div>

                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-deep-teal">Rajeev Deva Kumar Thanuku</h2>
                        <p className="text-soft-teal font-semibold text-lg">Manager</p>
                        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                            Camliqa International leads the way in sustainable skincare, merging ancient wisdom with modern beauty needs.
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <button className="px-8 py-3 bg-soft-teal text-white rounded-full font-bold shadow-md hover:bg-deep-teal transition-all flex items-center space-x-2">
                        <span>Add to Contact</span>
                    </button>

                    <a href="#" className="flex items-center space-x-2 text-deep-teal hover:text-soft-teal transition-colors font-medium">
                        <FaFacebook className="text-2xl" />
                        <span>Follow Us</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default ProfileSection;
