import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Combined Workspace',
      description:
        'A full-stack productivity platform that unifies daily tools—calendar, task manager, and search—into an RPG-inspired workspace. Designed to make organization more engaging and efficient.',
      image:
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'AWS'],
      liveUrl: 'https://luke-meyer-hue.github.io/combined-workspace/',
      githubUrl: 'https://github.com/Luke-Meyer-hue/combined-workspace',
      featured: true,
      date: '2024',
    },
    {
      id: 2,
      title: 'AI Code Review Assistant',
      description:
        'An AI-powered tool that analyzes code quality, suggests improvements, and identifies potential bugs using machine learning and natural language understanding.',
      image:
        'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'OpenAI API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: '2024',
    },
    {
      id: 3,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image:
        'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      date: '2023',
    },
    {
      id: 4,
      title: 'Weather Analytics Dashboard',
      description:
        'A data visualization dashboard that displays weather patterns and predictions using machine learning algorithms.',
      image:
        'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'Flask', 'Pandas', 'Chart.js', 'OpenWeather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2023',
    },
    {
      id: 5,
      title: 'Social Media Clone',
      description:
        'A Twitter-like social media platform with real-time messaging, image uploads, and social interactions.',
      image:
        'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2023',
    },
    {
      id: 6,
      title: 'Blockchain Voting System',
      description:
        'A secure and transparent voting system built on blockchain technology ensuring vote integrity and anonymity.',
      image:
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Solidity', 'Web3.js', 'React', 'Truffle', 'MetaMask'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      date: '2024',
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A showcase of my most impactful work demonstrating technical skills and creative problem-solving
            </p>
          </header>

          {/* Featured Projects */}
          <div className="space-y-16 mb-16">
            {featuredProjects.map((project, index) => (
              <article
                key={project.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
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

                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
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
            ))}
          </div>

          {/* Other Projects */}
          <div className="border-t pt-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Other Notable Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <article
                  key={project.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <figure className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </figure>
                  <div className="p-6">
                    <div className="flex items-center text-slate-500 text-xs mb-2">
                      <Calendar size={14} className="mr-1" />
                      {project.date}
                    </div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h4>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-slate-500 text-xs px-2 py-1">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
