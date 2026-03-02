import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';

const FeaturedProductCard = ({ product }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative group"
    >
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-white p-2 border-4 border-golden-accent shadow-xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 duration-500">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-deep-teal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-full">
                <button className="px-6 py-2 bg-white text-deep-teal font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Quick View
                </button>
            </div>
        </div>

        <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-deep-teal mb-1">{product.name}</h3>
            <p className="text-golden-accent font-bold text-lg mb-4">{product.price}</p>
            <button className="px-8 py-2 bg-soft-teal text-white rounded-full font-bold shadow-md hover:bg-deep-teal transition-all">
                Add to Contact
            </button>
        </div>
    </motion.div>
);

const ProductsPreview = () => {
    const [showAll, setShowAll] = useState(false);

    const featuredIds = ['sunnipindi-soap', 'red-sandal-soap'];
    const displayedProducts = showAll ? products : products.filter(p => featuredIds.includes(p.id));

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-pastel-blue" id="products">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-deep-teal mb-4">
                    {showAll ? 'All Products' : 'Featured Products'}
                </h2>
                <div className="h-1.5 w-24 bg-golden-accent mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 max-w-7xl mx-auto">
                {displayedProducts.map(product => (
                    <FeaturedProductCard key={product.id} product={product} />
                ))}
            </div>

            <div className="mt-20 text-center">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-12 py-4 border-2 border-soft-teal text-soft-teal text-lg font-bold rounded-full hover:bg-soft-teal hover:text-white transition-all transform hover:scale-105 active:scale-95"
                >
                    {showAll ? 'Show Featured Only' : 'View More Products'}
                </button>
            </div>
        </section>
    );
};

export default ProductsPreview;
