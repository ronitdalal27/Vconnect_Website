import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import WhoWeAre from './components/whoweare';
import Values from './components/values';
import WhyUs from './components/whyus';
import OurTeam from './components/ourteam';
import Contact from './components/contact';
import LeadGeneration from './components/leadgeneration';
import AppointmentSetting from "./components/appointmentsetting";
import EmailMarketing from "./components/emailmarketing";
import Career from './components/career';
import ChannelPartner from './components/channelpartner';
import ScrollToTop from './components/scrolltotop';
import './index.css';

function RootApp() {
  // Disable browser's automatic scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
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

        <Route
          path="/about"
          element={
            <>
              <HeroAbout />
              <WhoWeAre />
              <Values />
              <WhyUs />
              <OurTeam />
            </>
          }
        />

        <Route path="/contact" element={<Contact />} />
        <Route path="/channelpartner" element={<ChannelPartner />} />
        <Route path="/service" element={<Service />} />
        <Route path="/services" element={<Service />} />

        <Route path="/services/lead-generation" element={<LeadGeneration />} />
        <Route path="/services/appointment-setting" element={<AppointmentSetting />} />
        <Route path="/services/email-marketing" element={<EmailMarketing />} />

        <Route path="/career" element={<Career />} />
      </Routes>

      <Footer />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RootApp />);
