import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ title, tagline, showButtons = true }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="absolute inset-0 bg-gradient-radial from-blue-400/10 via-transparent to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {tagline}
          </p>
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="#members" 
                className="btn btn-primary text-lg px-8 py-3"
              >
                Meet Our Team
              </Link>
              <Link 
                to="/events" 
                className="btn text-lg px-8 py-3"
              >
                View Events
              </Link>
              <Link 
                to="#about" 
                className="btn text-lg px-8 py-3"
              >
                About Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
