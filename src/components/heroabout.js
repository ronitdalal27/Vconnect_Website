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
        <p className="about-logo-text">Over 400+ business trust us</p>
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
};

export default HeroAbout;
