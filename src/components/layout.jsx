import Navigation from '../components/navigation'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import React from 'react'
import HeroSlider from './heroSlider'
import About from '../pages/about'
import Portfolio from '../pages/portfolio'
import Contact from '../pages/contact'
import ScrollToTop from '../components/scrollToTop'

function Layout() {
  return (
    <>
      <div className="scrollable-div flex-grow snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth relative">
        <Navigation />

        <main className="flex-grow snap-y snap-mandatory overflow-y-auto h-screen scroll-smooth">
          <section id="hero" className="snap-start h-screen">
            <HeroSlider />
          </section>

          <section id="about" className="snap-start h-screen pt-10">
            <About />
          </section>

          <section id="portfolio" className="snap-start h-screen pt-15">
            <Portfolio />
          </section>

          <section id="contact" className="snap-start h-screen pt-10">
            <Contact />
          </section>
          <section id="" className="snap-start pt-10">
            <Footer />

          </section>
     
          {/* <Outlet /> */}
          <ScrollToTop />
        </main>

      </div>
    </>
  )
}

export default Layout
