import React from 'react';
import { Cpu, Brain, Code, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <article className="max-w-4xl mx-auto text-center">
          <header className="mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hi, I’m Luke Meyer — a computer science student at Northwestern University passionate about 
              machine learning, robotics, and human-centered design. I love building systems that help people 
              interact more naturally with technology.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left side — personal background */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">My Journey</h3>
              <p className="text-slate-600 mb-4">
                My path in computer science began with curiosity about how intelligent systems can improve 
                accessibility and autonomy. At the Shirley Ryan AbilityLab, I’ve worked on translating human 
                motion into robotic arm commands and designing interfaces that make assistive technology 
                more usable for patients.
              </p>
              <p className="text-slate-600 mb-6">
                Beyond research, I enjoy full-stack development — combining technical depth with creative 
                design to build interfaces that are both functional and intuitive.
              </p>
              <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Machine Learning
                </li>
                <li className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  Human–Robot Interaction
                </li>
                <li className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  Accessible Design
                </li>
                <li className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Full Stack Development
                </li>
              </ul>
            </div>

            {/* Right side — core focus areas */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Cpu className="w-12 h-12 text-blue-600 mx-auto mb-3" aria-hidden="true" />
                  <h4 className="font-semibold text-slate-800 mb-2">Assistive Robotics</h4>
                  <p className="text-sm text-slate-600">
                    Building intelligent systems that enhance human motion and control.
                  </p>
                </div>
                <div className="text-center">
                  <Brain className="w-12 h-12 text-emerald-600 mx-auto mb-3" aria-hidden="true" />
                  <h4 className="font-semibold text-slate-800 mb-2">Machine Learning</h4>
                  <p className="text-sm text-slate-600">
                    Designing models to detect spasms and improve robotic safety.
                  </p>
                </div>
                <div className="text-center">
                  <Code className="w-12 h-12 text-amber-600 mx-auto mb-3" aria-hidden="true" />
                  <h4 className="font-semibold text-slate-800 mb-2">Software Engineering</h4>
                  <p className="text-sm text-slate-600">
                    Writing clean, efficient code across Python, C++, and TypeScript.
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-3" aria-hidden="true" />
                  <h4 className="font-semibold text-slate-800 mb-2">Collaboration</h4>
                  <p className="text-sm text-slate-600">
                    Working with engineers, therapists, and patients to make technology inclusive.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto">
              I’m always eager to explore new technologies and projects that bridge human ability 
              and intelligent systems. Let’s build something that makes a difference.
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
};

export default About;
