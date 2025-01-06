import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (id, route = '/') => {
    setIsMenuOpen(false); // Close menu for mobile view
    if (window.location.pathname === route) {
      // If already on the correct route, scroll smoothly to the section
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to the route and include hash
      navigate(route + id);
    }
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">𝕭𝖆𝖘𝖍𝖆</div>
        <div className="hidden md:flex space-x-6">
          <button className="hover:text-gray-400" onClick={() => handleLinkClick('#home')}>Home</button>
          <button className="hover:text-gray-400" onClick={() => handleLinkClick('#about')}>About Me</button>
          <button className="hover:text-gray-400" onClick={() => handleLinkClick('#service')}>Services</button>
          <button className="hover:text-gray-400" onClick={() => handleLinkClick('#project')}>Projects</button>
          <button className="hover:text-gray-400" onClick={() => handleLinkClick('#contact', '/contact')}>Contact</button>
        </div>
        <button
          onClick={() => navigate('/contact')}
          className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
        >
          Connect Me
        </button>
        <button
          className="md:hidden text-white text-2xl"
          onClick={handleMenuClick}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-center">
          <button className="hover:text-gray-400" onClick={() => handleLinkClick('#home')}>Home</button>
          <button className="hover:text-gray-400" onClick={() => handleLinkClick('#about')}>About Me</button>
          <button className="hover:text-gray-400" onClick={() => handleLinkClick('#service')}>Services</button>
          <button className="hover:text-gray-400" onClick={() => handleLinkClick('#project')}>Projects</button>
          <button className="hover:text-gray-400" onClick={() => handleLinkClick('#contact', '/contact')}>Contact</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
