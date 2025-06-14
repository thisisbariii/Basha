import React from 'react';
import { Code, Users, Briefcase, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            Get to know more about my journey, experience, and what drives me.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-tr from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-2xl absolute -top-3 -left-3 z-0 opacity-20"></div>
              <div className="w-full h-96 overflow-hidden rounded-2xl relative z-10 shadow-xl">
               <img
  src="about.jpeg"
  alt="Developer working"
  className="w-full h-full object-cover rounded-2xl shadow-lg grayscale hover:grayscale-0 hover:brightness-110 hover:contrast-110 transition-all duration-500 ease-in-out transform hover:scale-105"
/>

              </div>
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg z-20">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              My Story
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate web developer with over 2 years of experience creating beautiful, functional, and user-centered 
              digital experiences. With a background in both design and development, I bring a unique perspective to every project.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              My journey began when I built my first website in 2nd year of college, and I've been hooked ever since. I'm constantly learning and 
              exploring new technologies to stay at the cutting edge of web development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <Code className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Projects</h4>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">20+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Clients</h4>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">5+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Worldwide</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Experience</h4>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">2+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Years</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Awards</h4>
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">3</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Received</p>
              </div>
            </div>

            <a href="#contact" className="btn-primary inline-block">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;