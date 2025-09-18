import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl font-bold">
            CS
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Computer Science
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Portfolio
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Full-Stack Developer & Problem Solver
        </p>
        
        <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
          Passionate about creating innovative solutions through code. Specializing in modern web technologies, 
          algorithms, and software architecture.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="text-slate-300 hover:text-white hover:scale-110 transition-all">
            <Github size={28} />
          </a>
          <a href="#" className="text-slate-300 hover:text-white hover:scale-110 transition-all">
            <Linkedin size={28} />
          </a>
          <a href="#" className="text-slate-300 hover:text-white hover:scale-110 transition-all">
            <Mail size={28} />
          </a>
        </div>
        
        <button
          onClick={scrollToAbout}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg"
        >
          View My Work
        </button>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;