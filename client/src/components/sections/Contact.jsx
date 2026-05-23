import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to connect to server. Is the backend running?');
    }
  };

  return (
    <section id="contact" className="w-full py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white dark:text-white transition-colors duration-300">
            <span className="text-primary">04.</span> Get In Touch
          </h2>
          <p className="text-white dark:text-white max-w-2xl mx-auto font-semibold transition-colors duration-300">
            I'm currently looking for new opportunities and collaborations. Whether you have a question, an idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white dark:text-white mb-6 transition-colors duration-300">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white dark:text-white transition-colors duration-300">
                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-full text-primary border border-black/5 dark:border-white/5">
                      <Mail size={20} />
                    </div>
                    <span className="font-bold text-sm md:text-base">gs7878665@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white dark:text-white transition-colors duration-300">
                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-full text-primary border border-black/5 dark:border-white/5">
                      <Phone size={20} />
                    </div>
                    <span className="font-bold text-sm md:text-base">+91 9026154972</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white dark:text-white transition-colors duration-300">
                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-full text-primary border border-black/5 dark:border-white/5">
                      <MapPin size={20} />
                    </div>
                    <span className="font-bold text-sm md:text-base">Ghaziabad, Uttar Pradesh</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-xs font-bold text-white dark:text-white uppercase tracking-widest mb-4 transition-colors duration-300">
                  Social Profiles
                </h4>
                <div className="flex gap-4">
                  <a 
                    href="https://linkedin.com/in/the-gauravsh" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 bg-black/5 dark:bg-white/5 rounded-full text-gray-600 dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all border border-black/5 dark:border-white/5" 
                    title="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect width="4" height="12" x="2" y="9"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  </a>
                  <a 
                    href="https://github.com/gs7878665-dot" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-3 bg-black/5 dark:bg-white/5 rounded-full text-white dark:text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all border border-black/5 dark:border-white/5" 
                    title="GitHub"
                  >
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-white dark:text-white mb-2 transition-colors duration-300">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm font-bold"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-white dark:text-white mb-2 transition-colors duration-300">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm font-bold"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-white dark:text-white mb-2 transition-colors duration-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none text-sm font-bold"
                  placeholder="Hello Gaurav, I would like to talk about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-primary/20"
              >
                Send Message
              </button>

              {status && (
                <p className={`text-center text-sm font-semibold ${status.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
