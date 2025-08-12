// Hero.js
import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/hero.css';
import img2  from '../images/company2.png';
import img3 from '../images/comapny3.png';
import img4 from '../images/comapny4.png';
import img5 from '../images/company5.png';
import img6 from '../images/company6.png';
import img7 from '../images/company7.png';
import img8 from '../images/company8.png';


function Hero() {
  const navigate = useNavigate();

  // Navigate to the dedicated service page (singular) since the services section
  // is not present on the home DOM.
  function scrollToServices() {
    navigate("/service");
  }

  function handleContactClick() {
    navigate("/contact", { state: { scrollTo: "contact" } });
  }

  return (
    <section className="hero" id="hero">
      <div className="star-bg"></div>

      <div className="hero-content">
        <div className="circle-wrapper">
          <div className="circle big-circle"></div>
          <div className="circle small-circle"></div>
        </div>

        <div className="trusted-badge">
          Trusted By 400+ Growing Businesses
        </div>

        <h1 className="prospect-title">
          Turn Prospect Complexity <br /> into Revenue
        </h1>

        <p className="trusted-leaders">
          Trusted by Leaders to Generate High-Intent Leads since 2019
        </p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={handleContactClick}>
            Get in touch →
          </button>
          <button className="btn-secondary" onClick={scrollToServices}>
            View services
          </button>
        </div>
      </div>

      <div className="logo-ribbon">
        <div className="logo-track">
          {/* Repeat logos multiple times for continuous scroll */}
          <img src={img2} alt="Company 2" />
          <img src={img3} alt="Company 3" />
          <img src={img4} alt="Company 4" />
          <img src={img5} alt="Company 5" />
          <img src={img6} alt="Company 6" />
          <img src={img7} alt="Company 7" />
          <img src={img8} alt="Company 8" />
          {/* Repeat logos multiple times for continuous scroll */}
          <img src={img2} alt="Company 2" />
          <img src={img3} alt="Company 3" />
          <img src={img4} alt="Company 4" />
          <img src={img5} alt="Company 5" />
          <img src={img6} alt="Company 6" />
          <img src={img7} alt="Company 7" />
          <img src={img8} alt="Company 8" />
        </div>
      </div>

    </section>
  );
}

export default Hero;
