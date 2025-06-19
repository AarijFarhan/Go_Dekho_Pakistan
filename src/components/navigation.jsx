import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi"; // Menu and close icons

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            <Link to="/">
              <img
                className="h-10 w-auto rounded-3xl"
                src="/logo.jpeg"
                alt="GoDekho Pakistan"
              />
            </Link>
          </motion.h2>

          {/* Desktop Menu */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="hidden md:flex space-x-8 text-md font-bold items-center"
          >
            <a href="#hero" className="text-gray-700 hover:text-green-600 transition">Home</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition">About Us</a>
            <a href="#portfolio" className="text-gray-700 hover:text-green-600 transition">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-green-600 transition">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition">Contact</a>
            <Link to="#login" className="bg-green-600 px-5 py-2 rounded-md text-white hover:translate-y-1 transition">Login</Link>
          </motion.nav>

          {/* Desktop Sign Up Button */}
          <div className="hidden md:flex">
            {/* <Link
              to="/signup"
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
            >
              Sign Up
            </Link> */}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl text-gray-800 focus:outline-none">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-lg space-y-4 font-medium text-gray-700">
          <a href="#hero" onClick={closeMenu} className="block hover:text-green-600">Home</a>
          <a href="#about" onClick={closeMenu} className="block hover:text-green-600">About Us</a>
          <a href="#portfolio" onClick={closeMenu} className="block hover:text-green-600">Services</a>
          <a href="#portfolio" onClick={closeMenu} className="block hover:text-green-600">Portfolio</a>
          <a href="#contact" onClick={closeMenu} className="block hover:text-green-600">Contact</a>
          <Link to="#login" onClick={closeMenu} className="block bg-green-600 text-white text-center px-4 py-2 rounded">Login</Link>
          {/* <Link to="/signup" onClick={closeMenu} className="block bg-green-700 text-white text-center px-4 py-2 rounded">Sign Up</Link> */}
        </div>
      )}
    </header>
  );
};

export default Navigation;
