import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg  py-4 px-8 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800">
        UnityFund
      </div>
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMenu}
        className="lg:hidden text-gray-800 focus:outline-none"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> */}
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        )}
      </button>

      {/* Nav Links for Desktop */}
      <div className="hidden lg:flex space-x-6">
        <a href="#who-we-are" className="text-gray-600 hover:text-gray-900">Who We Are</a>
        <a href="#what-we-do" className="text-gray-600 hover:text-gray-900">What We Do</a>
        <a href="#our-impact" className="text-gray-600 hover:text-gray-900">Our Impact</a>
        <a href="#how-to-help" className="text-gray-600 hover:text-gray-900">How to Help</a>
        <a href="#support" className="text-gray-600 hover:text-gray-900">Support</a>
      </div>

      <a
        href="#donate"
        className="hidden lg:block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Donate
      </a>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex flex-col items-center mt-5">
          <button 
            onClick={toggleMenu}
            className="text-white text-2xl self-end mr-4 mt-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <a href="#who-we-are" className="text-white py-2 text-lg">Who We Are</a>
          <a href="#what-we-do" className="text-white py-2 text-lg">What We Do</a>
          <a href="#our-impact" className="text-white py-2 text-lg">Our Impact</a>
          <a href="#how-to-help" className="text-white py-2 text-lg">How to Help</a>
          <a href="#support" className="text-white py-2 text-lg">Support</a>
          <a
            href="#donate"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Donate
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
