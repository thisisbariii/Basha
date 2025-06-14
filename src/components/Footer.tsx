import React from 'react';
import { Heart, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Abdul Basha</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Passionate MERN & WordPress developer crafting beautiful digital experiences with a focus on performance and design.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/thisisbariii" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/abdul-basha-shaikh-43962028b" target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400">
                <Linkedin className="w-5 h-5" />
              </a>
             
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="block">Email:</span>
                <a href="mailto:badshashaikh370@gmail.com" className="hover:text-white">badshashaikh370@gmail.com</a>
              </li>
              <li>
                <span className="block">Phone:</span>
                <a href="tel:+918286194040" className="hover:text-white">+91 82861 94040</a>
              </li>
              <li>
                <span className="block">Location:</span>
                <span>Andheri (W), Mumbai</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Abdul Basha. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Abdul Basha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
