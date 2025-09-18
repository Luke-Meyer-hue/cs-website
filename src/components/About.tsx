import React from 'react';
import { Code, Lightbulb, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              I'm a passionate computer science student and developer who loves turning complex problems 
              into elegant, simple solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">My Journey</h3>
              <p className="text-slate-600 mb-4">
                Currently pursuing my degree in Computer Science with a focus on software engineering 
                and data structures. I discovered my passion for programming during my first coding class 
                and haven't looked back since.
              </p>
              <p className="text-slate-600 mb-6">
                When I'm not coding, you can find me exploring new technologies, contributing to open 
                source projects, or working on personal projects that challenge me to grow as a developer.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  Team Player
                </span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Code className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 mb-2">Clean Code</h4>
                  <p className="text-sm text-slate-600">Writing maintainable, scalable code</p>
                </div>
                <div className="text-center">
                  <Lightbulb className="w-12 h-12 text-amber-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 mb-2">Innovation</h4>
                  <p className="text-sm text-slate-600">Creative solutions to complex problems</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 mb-2">Performance</h4>
                  <p className="text-sm text-slate-600">Optimized, efficient applications</p>
                </div>
                <div className="text-center">
                  <Target className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-slate-800 mb-2">Focus</h4>
                  <p className="text-sm text-slate-600">User-centered design approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;