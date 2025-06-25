import React from 'react';
import { Code, Menu } from 'lucide-react'; // You can change 'Code' to any icon you prefer

const Header = () => {
  return (
    <header className="sticky top-5 z-50  px-4">
      {/* <div className="max-w-7xl  px-4 py-4 flex justify-between items-center mx-auto bg-white  rounded-xl"> */}
           <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center bg-white border border-gray-200 rounded-xl shadow-sm">
        {/* Logo + Icon */}
        <div className="flex items-center space-x-2">
          <Code className="w-6 h-6 text-[#56ACF2]" />
          <h1 className="text-2xl font-bold tracking-wide text-gray-800">MyPortfolio</h1>
        </div>

        {/* Centered Nav */}
        <nav className="hidden md:flex space-x-4 absolute left-1/2 transform -translate-x-1/2">
          {['Projects', 'Resume', 'About Me', 'Contact Me'].map((label, i) => (
            <a
              key={i}
              href={`/${label.toLowerCase().replace(/\s+/g, '')}`}
              className="text-sm px-4 py-2 rounded-full text-gray-700 bg-[#f0f8ff] hover:bg-[#56ACF2] hover:text-white transition duration-300"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Empty div as right spacer for symmetry */}
        <div className="md:block hidden w-12 h-6" />

        {/* Mobile Menu */}
        Syed Mudasir Hussain
        <div className="md:hidden">
          <Menu className="w-6 h-6 text-[#56ACF2]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
