import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SpiralSection = ({ children }) => {
  const containerRef = useRef(null);
  
  // Track viewport-relative scroll position of this section
  // Triggers as the section moves from the bottom of the screen to the center
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Pure, hardware-accelerated fading and un-blurring (completely jank-free!)
  // This removes any rotational/scale jitter and keeps text perfectly crisp
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.1, 1]);
  const blurVal = useTransform(scrollYProgress, [0, 0.8], [15, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [40, 0]); // Gentle, elegant slide-up
  
  const filter = useTransform(blurVal, (val) => `blur(${val}px)`);

  return (
    <div 
      ref={containerRef} 
      className="w-full min-h-screen py-12 flex items-center justify-center overflow-visible"
    >
      <motion.div 
        style={{ 
          opacity, 
          filter,
          y,
        }}
        className="w-full max-w-6xl px-6 flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SpiralSection;
