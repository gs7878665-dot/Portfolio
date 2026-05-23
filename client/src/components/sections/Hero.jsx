import React from 'react';
import { motion } from 'framer-motion';
import Magnetic from '../Magnetic';

const Hero = () => {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center z-10 pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-bold tracking-wider uppercase mb-4 text-xs md:text-sm"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-extrabold tracking-[-0.04em] mb-6 transition-colors duration-300"
        >
          Gaurav Shukla.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-white dark:text-white mb-8 transition-colors duration-300"
        >
          Aspiring Software Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-white dark:text-white max-w-2xl mx-auto mb-10 leading-relaxed font-semibold transition-colors duration-300"
        >
          I'm a first-year Computer Science Engineering student passionate about building modern web applications, AI-driven technologies, and continuously pushing my limits through hands-on projects and hackathons.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          {/* Magnetic Buttons */}
          <Magnetic range={50}>
            <a
              href="#projects"
              className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-primary/20 inline-block"
            >
              View Projects
            </a>
          </Magnetic>
          <Magnetic range={50}>
            <a
              href="#contact"
              className="glass hover:bg-black/5 dark:hover:bg-white/10 text-foreground font-bold py-3 px-8 rounded-full transition-all inline-block"
            >
              Contact Me
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-white mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
