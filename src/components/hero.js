import React from "react";
import '../css/hero.css'; // Import the CSS file

function scrollToServices() {
  const servicesSection = document.getElementById("services");
  if (servicesSection) {
    servicesSection.scrollIntoView({ behavior: "smooth" });
  }
}

function Hero() {
  return (
    <section className="hero">
      {/* Full hero background star */}
      <div className="star-bg"></div>

      <div className="hero-content">
        {/* Circle Wrapper - keeps both circles together */}
        <div className="circle-wrapper">
          <div className="circle big-circle"></div>
          <div className="circle small-circle"></div>
        </div>

        {/* Pill Badge */}
        <div className="trusted-badge">
          Trusted By 400+ Growing Businesses
        </div>

        {/* Main Heading */}
        <h1 className="prospect-title">
          Turn Prospect Complexity <br /> into Revenue
        </h1>

        {/* Subheading */}
        <p className="trusted-leaders">
          Trusted by Leaders to Generate High-Intent Leads since 2019
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn-primary">Get in touch →</button>
          <button className="btn-secondary" onClick={scrollToServices}>View services</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
