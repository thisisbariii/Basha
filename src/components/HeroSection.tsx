import React from 'react';
import { ArrowDownCircle, Github as GitHub, Linkedin, Twitter } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>

      {/* Abstract shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 left-40 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="animate-fade-in">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                MERN & WordPress Developer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                Building <span className="text-blue-600 dark:text-blue-400">Clean & Functional</span> Web Experiences
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                Hi, I'm Abdul Basha — a passionate IT student from Mumbai specializing in MERN stack & WordPress. I love turning ideas into real-world web solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-secondary">
                  Get In Touch
                </a>
              </div>
              <div className="flex mt-8 space-x-4">
                <a href="https://github.com/thisisbariii" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <GitHub className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/abdul-basha-shaikh-43962028b/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 animate-pulse"></div>
              <img
                src="hero.png"
                alt="Abdul Basha Portrait"
                className="absolute inset-2 object-cover rounded-full shadow-2xl animate-fade-in"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" aria-label="Scroll down">
            <ArrowDownCircle className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
