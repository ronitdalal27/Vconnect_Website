import React from "react";
import "../css/heroabout.css";
import img2  from '../images/company2.png';
import img3 from '../images/comapny3.png';
import img4 from '../images/comapny4.png';
import img5 from '../images/company5.png';
import img6 from '../images/company6.png';
import img7 from '../images/company7.png';
import img8 from '../images/company8.png';

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
};

export default HeroAbout;
