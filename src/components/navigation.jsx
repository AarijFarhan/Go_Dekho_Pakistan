import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import logo from "../assets/logo.png"; // Save logo from site and put it in assets folder

const Navigation = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
      <div className="flex-shrink-0">


  <motion.h2
   initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
    // className="text-3xl font-bold text-center text-gray-800 mb-2"
  >
  
        <Link to="/">
              <img className="h-10 w-auto rounded-3xl" src='/public/logo.jpeg' alt="GoDekho Pakistan" />
            </Link>
  </motion.h2>
 
          </div>




  <motion.div
 initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}
>
  {/* Menu */}
  <nav className="hidden md:flex space-x-8 text-md font-bold items-center">
    <a href="#hero" className="text-gray-700 hover:text-primary transition">Home</a>
    <a href="#about" className="text-gray-700 hover:text-primary transition">About Us</a>
    <a href="#portfolio" className="text-gray-700 hover:text-primary transition">Services</a>
    <a href="#portfolio" className="text-gray-700 hover:text-primary transition">Portfolio</a>
    <a href="#contact" className="text-gray-700 hover:text-primary transition">Contact</a>
    <Link to="#login" className="bg-green-600 px-5 py-3 rounded-md text-white hover:translate-y-1  transition ">Login</Link>
  </nav>
</motion.div>



          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/signup"
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
