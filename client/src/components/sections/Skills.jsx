import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Cloud, BrainCircuit, Terminal } from 'lucide-react';
import TiltCard from '../TiltCard';

const skills = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "HTML/CSS"], icon: <Code2 className="text-blue-500" /> },
  { category: "Frontend & UI", items: ["React.js", "Tailwind CSS", "Three.js"], icon: <Layout className="text-pink-500" /> },
  { category: "Backend & DB", items: ["Node.js", "Express", "MongoDB"], icon: <Database className="text-green-500" /> },
  { category: "Cloud & DevOps", items: ["AWS Academy", "Google Cloud", "Git & GitHub"], icon: <Cloud className="text-orange-500" /> },
  { category: "AI & ML", items: ["Oracle OCI AI", "Gen AI & LLM", "AI Skills Passport"], icon: <BrainCircuit className="text-purple-500" /> },
  { category: "Tools", items: ["VS Code", "Postman", "Figma"], icon: <Terminal className="text-gray-500 dark:text-gray-300" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-end tracking-tight text-gray-900 dark:text-white transition-colors duration-300">
            <div className="h-[1px] bg-gray-300 dark:bg-gray-800 flex-grow mr-8 opacity-40"></div>
            Skills & Certifications <span className="text-primary ml-4">.02</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="clickable"
            >
              <TiltCard className="glass-card p-6 rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/5 shadow-inner">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      {skill.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-slate-800 dark:text-gray-400 flex items-center gap-2.5 text-sm font-semibold transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
