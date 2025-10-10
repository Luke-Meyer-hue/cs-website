import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white relative px-6">
      {/* Name */}
      <div className="text-center mb-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-2">Luke Meyer</h1>
        <p className="text-xl md:text-2xl text-slate-300">
          Computer Science Student | Full-Stack Developer
        </p>
      </div>

      {/* Contact Links */}
      <div className="flex space-x-6 mb-6">
        <a href="mailto:lmeyer0215@gmail.com" className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2">
          <Mail size={24} /> <span className="hidden md:inline">lmeyer0215@gmail.com</span>
        </a>
        <a href="https://github.com/Luke-Meyer-hue" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2">
          <Github size={24} /> <span className="hidden md:inline">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/luke-meyer/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors flex items-center space-x-2">
          <Linkedin size={24} /> <span className="hidden md:inline">LinkedIn</span>
        </a>
      </div>

      {/* Summary */}
      <p className="text-center text-slate-400 max-w-2xl text-lg mb-6">
        Passionate about using machine learning and software development to build impactful, real-world applications.
        Experienced in Python, TypeScript, React, ROS 2, and full-stack development.
      </p>
    </section>
  );
};

export default Hero;
