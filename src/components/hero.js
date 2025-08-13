// Hero.js
import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/hero.css';



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
      <img
        src="/images/container.png"
        alt="Stars Background"
        className="star-bg"
      />

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
          <img src="/images/company2.png" alt="Company 2" />
          <img src="/images/company3.png" alt="Company 3" />
          <img src="/images/company4.png" alt="Company 4" />
          <img src="/images/company5.png" alt="Company 5" />
          <img src="/images/company6.png" alt="Company 6" />
          <img src="/images/company7.png" alt="Company 7" />
          <img src="/images/company8.png" alt="Company 8" />
          {/* Repeat logos multiple times for continuous scroll */}
          <img src="/images/company2.png" alt="Company 2" />
          <img src="/images/company3.png" alt="Company 3" />
          <img src="/images/company4.png" alt="Company 4" />
          <img src="/images/company5.png" alt="Company 5" />
          <img src="/images/company6.png" alt="Company 6" />
          <img src="/images/company7.png" alt="Company 7" />
          <img src="/images/company8.png" alt="Company 8" />
        </div>
      </div>

    </section>
  );
}

export default Hero;
