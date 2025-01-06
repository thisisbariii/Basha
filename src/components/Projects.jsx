import React from "react";
import zome from "../assets/zome.png";
import shah from "../assets/shah.png";
import ortho from "../assets/ortho.png";

const liveWebsites = [
  { id: 1, name: "Zome", url: "https://www.zome.in/", image: zome },
  { id: 2, name: "Shah Funeral Service", url: "https://shahfuneralservice.in/", image: shah },
  { id: 3, name: "OrthoSquare Consult", url: "https://consult.orthosquare.com/", image: ortho },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-16 sm:py-20" id="project">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          My Work & Achievements
        </h2>

        {/* Internship Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Internships
          </h3>
          <p className="text-center text-gray-300 text-sm sm:text-base px-4">
            I have completed <span className="font-bold">4 internships</span>: 2 in coding and 2 in WordPress development.
          </p>
        </div>

        {/* Live Websites Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Live Websites
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {liveWebsites.map((website) => (
              <div
                key={website.id}
                className="relative bg-gray-800 p-6 rounded-lg overflow-hidden hover:shadow-2xl transform transition-transform duration-500 hover:scale-105"
              >
                {/* Image with Hover Effect */}
                <img
                  src={website.image}
                  alt={website.name}
                  className="rounded-lg w-full h-48 sm:h-56 object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-50 transition-opacity duration-500 hover:opacity-60"></div>
                
                {/* Website Name */}
                <h4 className="text-lg sm:text-xl font-semibold text-white mt-4 text-center z-10 relative">
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5l-6 6m0 0h3.75m-3.75 0V12M15 12l6-6m0 0h-3.75m3.75 0v3.75"
                      />
                    </svg>
                    {website.name}
                  </a>
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Explore More Projects Section */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/thisisbariii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-2xl transform transition-transform hover:scale-105"
          >
            Explore More Projects
          </a>
          {/* Funny Salary Proposal Section */}
<div className="mb-16">
  <h3 className="text-2xl sm:text-3xl mt-5 font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
    Salary Proposal Fun
  </h3>
  <div className="bg-gray-800 p-6 rounded-lg text-center hover:shadow-2xl transform transition-transform duration-500 hover:scale-105">
    <p className="text-gray-300 text-sm sm:text-base mb-4">
      <span className="font-bold">The HR was asking about my salary expectations,</span> and I responded:
    </p>
    <div className="text-white text-lg sm:text-xl font-bold italic">
      "साईं इतना दीजिए, जामे कुटुंब समाय,<br />
      मैं भी भूखा न रहूं, साधु न भूखा जाए।"
    </div>
    <p className="text-gray-400 mt-4 text-sm sm:text-base">
      (Translation: Grant me enough, so my family is sustained; <br />
      neither I stay hungry, nor any saint goes unfed.)
    </p>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
