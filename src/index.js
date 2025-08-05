import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer'; 
import Service from './components/service';
import Process from './components/process';
import CaseStudy from './components/casestudy';
import Benefits from './components/benefits';
import Pricing from './components/pricing';
import Testimonial from './components/testimonial';
import Faq from './components/faq';
import HeroAbout from './components/heroabout';
import AboutLogo from './components/aboutlogo';
import WhoWeAre from './components/whoweare';
import Values from './components/values';
import WhyUs from './components/whyus';
import OurTeam from './components/ourteam';
import Contact  from './components/contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* Always show Header */}
    <Header />

    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Process />
            <CaseStudy />
            <Benefits />
            <Pricing />
            <Testimonial />
            <Faq />
          </>
        }
      />

      {/* About Page */}
      <Route path="/about" 
        element={
          <>
            <HeroAbout />
            <AboutLogo/>
            <WhoWeAre />
            <Values />
            <WhyUs/>
            <OurTeam/>
          </>
        }
      />

       {/* Contact Page */}
      <Route 
        path="/contact" 
        element={
          <Contact />
        } 
      />

      {/* service Page */}
      <Route 
        path="/service" 
        element={
          <Service />
        } 
      />

    </Routes>

    {/* Always show Footer */}
    <Footer />
  </Router>
);
