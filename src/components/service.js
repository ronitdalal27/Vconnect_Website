import React from "react";
import '../css/service.css'; // Import the CSS file
import Img1 from "../images/Lead_gen.png"; 
import Img2 from "../images/Appointment.png";
import Img3 from "../images/email.png";

function Service() {
  return (
    <section className="service" id="services">
      <p className="title">Our Services</p>
      <h2 className="main-heading">
        Solutions that take your <br /> Business to next level
      </h2>
      <p className="description">
        We design, and implement services that help you work<br /> smarter, not harder
      </p>

      {/* === Row 1: Image Left + Description Right === */}
      <div className="service-row">
        <div className="image-container">
          <img src={Img1} alt="Lead Generation" />
        </div>
        <div className="desc-container">
          <p className="desc-title">Lead Generation</p>
          <h3 className="desc-heading">Precision - Target Prospect Identification</h3>
          <p className="desc-text">
            Build and scale prospect lists based on your Ideal Customer Profile (ICP),
            with data that's validated and enriched.
          </p>
        </div>
      </div>

      {/* === Row 2: Description Left + Image Right === */}
      <div className="service-row">
        <div className="image-container">
          <img src={Img2} alt="Appointment Settings" />
        </div>
        <div className="desc-container">
          <p className="desc-title">Appointment Settings</p>
          <h3 className="desc-heading">End-to-End Pipeline Conversion</h3>
          <p className="desc-text">
            We handle the full cycle—from outreach to scheduling meetings with qualified prospects.
          </p>
        </div>
      </div>

      {/* === Row 3: Image Left + Description Right === */}
      <div className="service-row">
        <div className="image-container">
          <img src={Img3} alt="Email Marketing" />
        </div>
        <div className="desc-container">
          <p className="desc-title">Email Marketing</p>
          <h3 className="desc-heading">High-Impact Nurture & Conversion</h3>
          <p className="desc-text">
            Fuel your email marketing with laser-targeted prospect lists. Identify, validate, and enrich contacts that match your ICP.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Service;
