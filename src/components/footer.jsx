import React from "react";
import {Link , NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-10 py-10 rounded-lg bottom-0 h-auto ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-200">
       
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
        © 2021 Go Dekho Pakistan. All rights reserved.
          </p>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <a href="/shop" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

    
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Services</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
              Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
              Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
              Return & Exchange Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
              Store Locator
              </a>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>Malir, Karachi, Pakistan.</li>
            <li>info@godekhopakistan.com</li>
            <li>+00 (123) 456 78 900</li>
            <li className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook-f "> </i> Facebook
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    
 
      
    </footer>
  );
};

export default Footer;
