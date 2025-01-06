import React from "react";
import { useNavigate } from "react-router-dom";
import me from "../assets/me.jpeg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={me}
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
     <h1 className="text-3xl md:text-4xl font-bold">
  I'm{' '}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
    Abdul Basha
  </span>
  , Full-Stack Developer
</h1>

      <p className="mt-4 text-lg text-gray-300">
        I may not be the best when it comes to interviews, but when it’s time to get hands-on with code and deliver
        results,
        <br /> I excel. I’m passionate about problem-solving, writing clean, efficient code, and bringing ideas to life.
        <br />
        Give me a task, and I’ll go above and beyond to get it done.
      </p>
      <div className="mt-8 space-x-4">
        <button
          onClick={() => navigate("/contact")}
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </button>
        <a
          href="/resume.pdf"
          download="Abdul_Basha_Resume"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
