import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const ResumeExperience: React.FC = () => {
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
      title: 'Research Assistant — Machine Learning for Assistive Robots (Robotic Arm)',
      institution: 'Shirley Ryan Ability Lab (Argallab)',
      location: 'Chicago, IL',
      period: 'Sep 2024 - Present',
      details: [
        'Developed Python pipeline translating IMU signals into robotic arm commands for real-time control',
        'Designed filtering techniques to reduce sensor noise, improving control accuracy for daily tasks',
        'Developed and compared ML models (LSTMs, Random Forest) to detect spasms and ensure safety',
        'Evaluated models on augmented inertial datasets to boost spasm detection accuracy while minimizing false positives'
      ]
    },
    {
      type: 'research',
      title: 'Project DRIVE — Sensor Assisted Wheelchair',
      institution: 'Shirley Ryan Ability Lab (Argallab)',
      location: 'Chicago, IL',
      period: 'Sep 2024 - Present',
      details: [
        'Built React-based GUI for LUCI wheelchair, integrating with ROS 2 and Foxglove',
        'Integrated path-planning algorithms for safe, autonomous navigation',
        'Developed APIs for real-time communication between wheelchair and GUI',
        'Collaborated with therapists and patients to refine interface for usability and accessibility'
      ]
    },
    {
      type: 'research',
      title: 'Student Mentee',
      institution: 'Young Stem Scholars',
      location: 'Sioux Falls, SD',
      period: 'Summer 2024',
      details: [
        'Created R pipeline analyzing ChIP-Seq data from 20,000+ proteins to investigate cancer cell senescence'
      ]
    },
    {
      type: 'research',
      title: 'Research Assistant',
      institution: 'University of Nebraska Medical Center',
      location: 'Omaha, NE',
      period: 'Summer 2021',
      details: [
        'Performed western blots to study long-term effects of early Midazolam exposure on infants',
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

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <article key={idx} className="bg-slate-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <header className="flex items-center mb-2">
                {exp.type === 'education' ? (
                  <GraduationCap className="w-5 h-5 text-emerald-600 mr-2" />
                ) : (
                  <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                )}
                <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
              </header>

              <div className="flex items-center text-slate-600 text-sm mb-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{exp.location}</span>
              </div>

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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeExperience;
