import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const AllProductsSection = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-pastel-blue">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-deep-teal mb-4">Complete Collection</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our full range of natural beauty solutions, crafted with care for your skin and hair.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProductsSection;
