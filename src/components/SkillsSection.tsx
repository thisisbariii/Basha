import React from 'react';
import { skills } from '../data/skills';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            I've worked with a variety of technologies to create robust and scalable applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div 
              key={category.title} 
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                {category.icon}
                <span className="ml-2">{category.title}</span>
              </h3>
              <ul className="space-y-3">
                {category.items.map((skill, index) => (
                  <li key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h3>
          <div className="max-w-2xl mx-auto bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md">
            <div className="flex items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  B.Sc. in Information Technology
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Valia College of Commerce, Mumbai • 2025
                </p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  Building a solid foundation in full-stack development with a focus on MERN stack, WordPress, and modern web technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
