import Navigation from '../components/navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';
import React from 'react';
import HeroSlider from './heroSlider';
import About from '../pages/about';
import Portfolio from '../pages/portfolio';
import Contact from '../pages/contact';
import ScrollToTop from '../components/scrollToTop';

function Layout() {
  return (
    <>
      <div className="scrollable-div flex-grow snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth relative">
        <Navigation />

        <main className="flex-grow">
          {/* Full-screen section */}
          <section id="hero" className="snap-start h-screen">
            <HeroSlider />
          </section>

          {/* Remove h-screen from content-heavy sections */}
          <section id="about" className="snap-start py-10">
            <About />
          </section>

          <section id="portfolio" className="snap-start py-10">
            <Portfolio />
          </section>

          <section id="contact" className="snap-start py-10">
            <Contact />
          </section>

          <section id="footer" className="snap-start pt-10">
            <Footer />
          </section>

          <ScrollToTop />
        </main>
      </div>
    </>
  );
}

export default Layout;
