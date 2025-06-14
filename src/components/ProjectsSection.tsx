import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(6); // initially show 6 projects

  const categories = ['all', ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 3); // show 3 more projects each click
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            A collection of my recent work spanning various technologies and design approaches.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setFilter(category);
                setVisibleCount(6); // reset to 6 when category changes
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? 'bg-blue-600 text-white dark:bg-blue-500'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-10 text-center">
            <button
              onClick={handleShowMore}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full text-sm transition"
            >
              Show More
            </button>
          </div>
        )}

        {/* Explore More on GitHub */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/thisisbariii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors"
          >
            <Github className="w-4 h-4 mr-2" />
            Explore more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-2">
      <div className="relative overflow-hidden h-60">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                aria-label={`View live site for ${project.title}`}
              >
                <ExternalLink className="w-5 h-5 text-white" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
            {project.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
