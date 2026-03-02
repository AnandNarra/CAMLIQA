import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full group"
        >
            <div className="relative h-64 overflow-hidden bg-pastel-blue/30 flex items-center justify-center p-6">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-golden-accent"></div>
                <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-bold text-soft-teal border border-soft-teal/20">
                    Premium
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-bold text-deep-teal mb-2 group-hover:text-soft-teal transition-colors">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {product.description}
                </p>

                <div className="mt-auto pt-4 flex flex-col items-center space-y-4">
                    <span className="text-2xl font-black text-golden-accent">{product.price}</span>
                    <button
                        onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full py-3 bg-soft-teal text-white rounded-xl font-bold hover:bg-deep-teal transition-all transform active:scale-95 shadow-md flex items-center justify-center space-x-2"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
