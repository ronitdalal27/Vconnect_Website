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
            <Service />
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
          </>
        } 
      />
    </Routes>

    {/* Always show Footer */}
    <Footer />
  </Router>
);
