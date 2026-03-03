import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Branding Overlay */}
            <div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 z-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="text-white text-5xl md:text-8xl font-black tracking-tighter drop-shadow-2xl">
                        CAMLIQA
                    </h2>
                    <p className="text-white/90 text-xl md:text-2xl font-medium mt-4 drop-shadow-lg italic">
                        Pure Nature, Pure Beauty
                    </p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-8"
                    >
                        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all">
                            Explore Collection
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center z-30"
            >
                <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">Scroll to explore</p>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-[1px] h-12 bg-white/40 rounded-full relative"
                >
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full"></div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
