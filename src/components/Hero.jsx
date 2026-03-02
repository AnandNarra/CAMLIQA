import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const totalFrames = 200;

    // Create a large scroll area to pin the animation
    // The animation will take place over 300vh of scrolling
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map the scroll progress of this section to the 184 frames
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, totalFrames]);
    const [currentFrame, setCurrentFrame] = useState(1);

    useEffect(() => {
        return frameIndex.onChange((latest) => {
            setCurrentFrame(Math.floor(latest));
        });
    }, [frameIndex]);

    // Preload images for smooth animation
    useEffect(() => {
        const preload = async () => {
            const framesToPreload = [];
            for (let i = 1; i <= totalFrames; i += 2) { // Preload more frames for smoother full-screen transition
                framesToPreload.push(`/HeroImages/ezgif-frame-${String(i).padStart(3, '0')}.jpg`);
            }

            await Promise.all(
                framesToPreload.map(src => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = src;
                        img.onload = resolve;
                        img.onerror = resolve;
                    });
                })
            );
        };
        preload();
    }, []);

    const formatFrame = (index) => {
        return String(Math.min(totalFrames, Math.max(1, index))).padStart(3, '0');
    };

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-black">
            {/* Sticky container that pins the animation to the viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* The Animation Image - Full Screen Cover, No Margins */}
                <div className="absolute inset-0 w-full h-full">
                    <motion.img
                        key={currentFrame}
                        src={`/HeroImages/ezgif-frame-${formatFrame(currentFrame)}.jpg`}
                        alt="CAMLIQA Product Animation"
                        className="w-full h-full object-cover"
                        initial={false}
                    />
                </div>

                {/* Subtle Overlay for readability if needed, but keeping it clean as requested */}
                <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center z-30"
                >
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">Scroll to animate</p>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-[1px] h-12 bg-white/40 rounded-full relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-white rounded-full"></div>
                    </motion.div>
                </motion.div>

                {/* Branding overlay that stays fixed */}
                <div className="absolute top-1/2 left-10 md:left-20 -translate-y-1/2 z-20 pointer-events-none">
                    <motion.div
                        style={{
                            opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]),
                            x: useTransform(scrollYProgress, [0, 0.2], [-50, 0])
                        }}
                    >
                        <h2 className="text-white text-4xl md:text-7xl font-black tracking-tighter drop-shadow-2xl">
                            CAMLIQA
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl font-medium mt-2 drop-shadow-lg italic">
                            Pure Nature, Pure Beauty
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
