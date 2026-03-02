import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-deep-teal mb-4">Inquiries</h2>
                    <div className="h-1.5 w-24 bg-golden-accent mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-500">Have questions about our products? Send us a message!</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border-2 border-golden-accent/20"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-deep-teal ml-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-full bg-pastel-blue/20 border border-gray-200 focus:border-soft-teal focus:ring-2 focus:ring-soft-teal/20 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-bold text-deep-teal ml-2">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 rounded-full bg-pastel-blue/20 border border-gray-200 focus:border-soft-teal focus:ring-2 focus:ring-soft-teal/20 outline-none transition-all"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-bold text-deep-teal ml-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 rounded-full bg-pastel-blue/20 border border-gray-200 focus:border-soft-teal focus:ring-2 focus:ring-soft-teal/20 outline-none transition-all"
                                placeholder="example@gmail.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-deep-teal ml-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full px-6 py-4 rounded-[2rem] bg-pastel-blue/20 border border-gray-200 focus:border-soft-teal focus:ring-2 focus:ring-soft-teal/20 outline-none transition-all resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="px-12 py-4 bg-teal-gradient text-black text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 active:scale-95"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default InquiryForm;
