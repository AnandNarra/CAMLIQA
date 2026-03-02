import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactCard = ({ icon: Icon, title, value, href }) => (
    <motion.a
        href={href}
        whileHover={{ y: -5, scale: 1.02 }}
        className="flex items-center space-x-4 p-5 bg-white rounded-full border-2 border-soft-teal/20 shadow-sm hover:shadow-md transition-all group"
    >
        <div className="w-12 h-12 flex items-center justify-center bg-teal-gradient text-white rounded-full shadow-inner">
            <Icon className="text-xl" />
        </div>
        <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider text-gray-400 font-bold">{title}</span>
            <span className="text-gray-800 font-semibold md:text-lg truncate">{value}</span>
        </div>
    </motion.a>
);

const ContactSection = () => {
    return (
        <section className="py-20 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-deep-teal mb-4">Contact</h2>
                <div className="h-1 w-20 bg-golden-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <ContactCard
                    icon={FaEnvelope}
                    title="Email"
                    value="camliqanaturals@gmail.com"
                    href="mailto:camliqanaturals@gmail.com"
                />
                <ContactCard
                    icon={FaPhoneAlt}
                    title="Phone"
                    value="+91 80084 66907"
                    href="tel:+918008466907"
                />
            </div>
        </section>
    );
};

export default ContactSection;
