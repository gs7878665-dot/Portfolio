import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from '../TiltCard';

const About = () => {
  return (
    <section id="about" className="w-full min-h-screen py-20 px-6 relative z-10 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center tracking-tight text-white dark:text-white transition-colors duration-300">
            <span className="text-primary mr-4">01.</span> About Me
            <div className="h-[1px] bg-gray-700 dark:bg-gray-800 flex-grow ml-8 opacity-30"></div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white dark:text-white space-y-6 text-lg leading-relaxed font-semibold transition-colors duration-300"
          >
            <p>
              Hello! I'm Gaurav Shukla, a passionate first-year Computer Science Engineering student currently studying at KIET Group of Institutions. My journey in tech started with a profound curiosity for how things work on the internet, and that led me to dive deep into Web Development and Artificial Intelligence.
            </p>
            <p>
              I thrive in collaborative environments and have actively participated in hackathons, including the Google Solution Challenge and DevFest Noida Build-A-Thon 2025 where my team was recognized among the top participants.
            </p>
            <p>
              My focus is on creating beautiful, accessible, and highly performant applications while continuously exploring new technologies in the Gen AI and LLM space.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group flex justify-center clickable"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
            
            {/* Wrap Profile picture in 3D perspective TiltCard */}
            <TiltCard className="glass p-2 rounded-xl relative z-10 w-64 h-64 md:w-80 md:h-80 overflow-hidden group-hover:border-primary/40 transition-colors duration-500">
              <img
                src="/gaurav.jpg"
                alt="Gaurav Shukla"
                className="w-full h-full object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
