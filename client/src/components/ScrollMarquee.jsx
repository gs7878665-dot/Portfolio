import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollMarquee = ({ text, direction = 1, speed = 150 }) => {
  const containerRef = useRef(null);
  
  // Track page-wide scroll progress
  const { scrollYProgress } = useScroll();

  // Map scroll progress to horizontal translation
  // Multiplied by speed to make the text move beautifully as you scroll
  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    [direction * -speed, direction * speed]
  );

  return (
    <div 
      ref={containerRef} 
      className="w-full overflow-hidden whitespace-nowrap py-6 select-none pointer-events-none relative z-10 my-4"
    >
      <motion.div 
        style={{ x }} 
        className="text-[9vw] md:text-[11vw] font-black tracking-[-0.05em] uppercase text-transparent stroke-theme leading-none flex gap-8 whitespace-nowrap"
      >
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </motion.div>
    </div>
  );
};

export default ScrollMarquee;
