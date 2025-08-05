import React from "react";
import "../css/heroabout.css";

const HeroAbout = () => {
  return (
    <section className="about-hero-section" id="heroabout">
      {/* Outer Container */}
      <div className="about-hero-content">
        
        {/* Small Tag Container */}
        <div className="about-tag">
          <span>About us</span>
        </div>

        {/* Heading Container */}
        <div className="about-heading">
          <h1>Helping Business Grow</h1>
        </div>

        {/* Description Container */}
        <div className="about-description">
          <p>
            vConnect iDees is the data-driven<br /> Lead Generation company that makes
            predictable growth a reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
