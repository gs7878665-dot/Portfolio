import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import TiltCard from '../TiltCard';
import Magnetic from '../Magnetic';

// Specific repository links for Gaurav's Github projects
const projects = [
  {
    title: "Google Solution Challenge Project",
    description: "Built a real-world problem-solving project aligned with Google Solution Challenge goals. Worked on frontend structure, UI implementation, and collaborative workflows.",
    tech: ["React.js", "Tailwind CSS", "Node.js"],
    github: "https://github.com/gs7878665-dot/Google-Solution-Challenge",
    live: "https://github.com/gs7878665-dot/Google-Solution-Challenge"
  },
  {
    title: "Study Sprint AI",
    description: "Developed an AI-assisted productivity platform designed to improve study efficiency. Focused on clean UI, productivity features, and user experience.",
    tech: ["JavaScript", "React", "AI Integration"],
    github: "https://github.com/gs7878665-dot/Study-Sprint-AI",
    live: "https://github.com/gs7878665-dot/Study-Sprint-AI"
  },
  {
    title: "TruthFinder",
    description: "Built a project centered around information analysis and verification concepts. Implemented interactive UI components and JavaScript-based logic handling.",
    tech: ["HTML/CSS", "JavaScript", "DOM Manipulation"],
    github: "https://github.com/gs7878665-dot/TruthFinder",
    live: "https://github.com/gs7878665-dot/TruthFinder"
  },
  {
    title: "Arena Agent",
    description: "Explored AI and automation-inspired workflows through modern web development. Practiced Git workflows and frontend implementation.",
    tech: ["Frontend Web", "Git & GitHub"],
    github: "https://github.com/gs7878665-dot/Arena-Agent",
    live: "https://github.com/gs7878665-dot/Arena-Agent"
  },
  {
    title: "OCI Smart Search Engine",
    description: "Developed a secure compliance retrieval-augmented search tool integrating Oracle Cloud Infrastructure (OCI) generative AI models and MongoDB Atlas Vector Search.",
    tech: ["Oracle OCI", "MongoDB Vector", "LangChain"],
    github: "https://github.com/gs7878665-dot/OCI-Smart-Search",
    live: "https://github.com/gs7878665-dot/OCI-Smart-Search"
  },
  {
    title: "Study Sprint AI Chrome Extension",
    description: "Built a lightweight browser companion for the Study Sprint platform. Extracts and condenses web-page articles or YouTube lectures in real-time.",
    tech: ["JavaScript", "Chrome Extension API", "Gemini AI"],
    github: "https://github.com/gs7878665-dot/Study-Sprint-AI-Chrome-Extension",
    live: "https://github.com/gs7878665-dot/Study-Sprint-AI-Chrome-Extension"
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="w-full py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center tracking-tight text-white dark:text-white transition-colors duration-300">
            <span className="text-primary mr-4">03.</span> Featured Projects
            <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-grow ml-8 opacity-40"></div>
          </h2>
        </motion.div>

        {/* Project Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: showAll && index >= 4 ? (index - 4) * 0.1 : 0 }}
                className="clickable h-full"
              >
                <TiltCard className="glass-card rounded-2xl h-full flex flex-col overflow-hidden group">
                  <div className="p-8 h-full flex flex-col relative">
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-primary text-4xl font-black opacity-10 group-hover:opacity-100 group-hover:text-5xl transition-all duration-300 absolute right-6 top-6 select-none pointer-events-none">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-2xl font-bold text-white dark:text-white relative z-10 w-3/4 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-white dark:text-white mb-8 flex-grow relative z-10 text-sm leading-relaxed font-semibold transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="mt-auto relative z-10">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors p-1" 
                          title="GitHub"
                        >
                          <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                            <path d="M9 18c-4.51 2-5-2-7-2"/>
                          </svg>
                        </a>
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 dark:text-gray-200 hover:text-white dark:hover:text-white transition-colors p-1"
                          title="Live Site"
                        >
                          <ExternalLink size={18} strokeWidth={2.2} />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-12">
          <Magnetic range={45}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg shadow-primary/20 cursor-none"
            >
              <span>{showAll ? 'Show Less Projects' : 'Show More Projects'}</span>
              {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Projects;
