import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm">
          © {currentYear} IEEE Student Branch — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
