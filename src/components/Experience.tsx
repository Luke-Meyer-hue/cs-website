import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const ResumeTimeline: React.FC = () => {
  const experiences = [
    {
      type: 'education',
      title: 'B.S. Computer Science',
      institution: 'Northwestern University',
      location: 'Evanston, IL',
      period: 'June 2027',
      details: ['GPA: 3.7/4.0']
    },
    {
      type: 'research',
      title: 'Research Assistant — Shirley Ryan Ability Lab (Argallab)',
      institution: 'Chicago, IL',
      period: 'Sep 2024 - Present',
      details: [
        'Developed Python pipelines translating IMU signals into robotic arm commands for real-time patient control',
        'Built React-based GUI for LUCI wheelchair integrating ROS 2 and path-planning algorithms for safe navigation',
        'Designed filtering and ML models (LSTMs, Random Forest) to detect spasms, improving safety and accuracy',
        'Collaborated with therapists and patients to refine interface for accessibility and usability'
      ]
    },
    {
      type: 'research',
      title: 'Student Mentee — Young Stem Scholars',
      institution: 'Sioux Falls, SD',
      period: 'Summer 2024',
      details: [
        'Created R pipeline analyzing ChIP-Seq data from 20,000+ proteins to investigate cancer cell senescence'
      ]
    },
    {
      type: 'research',
      title: 'Research Assistant — University of Nebraska Medical Center',
      institution: 'Omaha, NE',
      period: 'Summer 2021',
      details: [
        'Performed western blots to study effects of early Midazolam exposure on infants',
        'Co-authored peer-reviewed paper and presented findings on neonatal polysubstance exposure'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-4"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            My research experience and academic achievements in computer science
          </p>
        </header>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-emerald-600"></div>

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                  <article className="bg-slate-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <header className="flex items-center mb-2">
                      {exp.type === 'education' ? (
                        <GraduationCap className="w-5 h-5 text-emerald-600 mr-2" />
                      ) : (
                        <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                      )}
                      <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                    </header>

                    {exp.institution && (
                      <div className="flex items-center text-slate-600 text-sm mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.institution}</span>
                      </div>
                    )}

                    <div className="flex items-center text-slate-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
                      {exp.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeTimeline;
