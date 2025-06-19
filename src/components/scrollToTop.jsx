// components/ScrollToTop.jsx
import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Show button after scrolling 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    isVisible && (
      <button
        onClick={scrollToHero}
        className="fixed bottom-5 right-5 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTop;
