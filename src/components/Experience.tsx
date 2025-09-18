import React from 'react';
import { Calendar, MapPin, Building, GraduationCap, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Engineering Intern',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: 'Jun 2024 - Aug 2024',
      description: [
        'Developed and maintained React-based web applications serving 10,000+ users',
        'Collaborated with senior developers on API design and database optimization',
        'Implemented automated testing suite reducing bug reports by 40%',
        'Participated in agile development processes and code reviews'
      ]
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: 'Jan 2024 - May 2024',
      description: [
        'Built responsive web interfaces using React, TypeScript, and Tailwind CSS',
        'Integrated third-party APIs and payment processing systems',
        'Optimized application performance resulting in 25% faster load times',
        'Mentored junior developers and conducted technical interviews'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'University of Technology',
      location: 'Boston, MA',
      period: '2022 - Present (Expected 2026)',
      description: [
        'GPA: 3.8/4.0, Dean\'s List for 4 consecutive semesters',
        'Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems',
        'President of Computer Science Student Association',
        'Active member of ACM Programming Contest team'
      ]
    },
    {
      type: 'work',
      title: 'Teaching Assistant',
      company: 'University of Technology',
      location: 'Boston, MA',
      period: 'Sep 2023 - Dec 2023',
      description: [
        'Assisted in teaching Introduction to Programming course for 200+ students',
        'Held office hours and provided one-on-one tutoring for struggling students',
        'Graded assignments and provided constructive feedback on code quality',
        'Developed supplementary learning materials and coding exercises'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience & Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              My professional journey and academic achievements in computer science
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-emerald-600"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        {exp.type === 'work' ? (
                          <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-emerald-600 mr-2" />
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          exp.type === 'work' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {exp.type === 'work' ? 'Work' : 'Education'}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{exp.title}</h3>
                      
                      <div className="flex items-center text-slate-600 mb-1">
                        <Building className="w-4 h-4 mr-2" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      
                      <div className="flex items-center text-slate-500 text-sm mb-1">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      
                      <div className="flex items-center text-slate-500 text-sm mb-4">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="text-slate-600 text-sm flex items-start">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;