import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/hero.css';

function Hero() {
  const navigate = useNavigate();

  function scrollToServices() {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleContactClick() {
    navigate("/contact", { state: { scrollTo: "contact" } });
  }

  return (
    <section className="hero">
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
    </section>
  );
}

export default Hero;
