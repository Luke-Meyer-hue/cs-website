import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const project = {
    title: 'Combined Workspace',
    description:
      'A full-stack productivity platform that unifies daily tools—calendar, task manager, and search—into an RPG-inspired workspace. Designed to make organization more engaging and efficient.',
    image:
      'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'AWS'],
    liveUrl: 'https://luke-meyer-hue.github.io/combined-workspace/',
    githubUrl: 'https://github.com/Luke-Meyer-hue/combined-workspace',
    date: '2024',
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Project</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My personal full-stack project demonstrating my technical skills and creative problem-solving.
            </p>
          </header>

          <article className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <figure className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <figcaption className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors"></figcaption>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full transition-colors"
                    aria-label="View source code on GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </figure>
            </div>

            <div>
              <div className="flex items-center text-slate-500 text-sm mb-2">
                <Calendar size={16} className="mr-2" />
                {project.date}
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-4">{project.title}</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  <ExternalLink size={18} className="mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  <Github size={18} className="mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
