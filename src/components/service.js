import React from "react";
import { Link } from "react-router-dom";
import "../css/service.css";
import Img1 from "../images/service1.png";
import Img2 from "../images/service2.png";
import Img3 from "../images/service3.png";

const services = [
  {
    id: "lead-generation",
    img: Img1,
    pill: "Lead Generation",
    heading: "Precision - Target Prospect\nIdentification",
    to: "/services/lead-generation",
  },
  {
    id: "appointment-settings",
    img: Img2,
    pill: "Appointment Settings",
    heading: "End-to-End\nPipeline Conversion",
    to: "/services/appointment-setting",
  },
  {
    id: "email-marketing",
    img: Img3,
    pill: "Email Marketing",
    heading: "High-Impact\nNurture & Conversion",
    to: "/services/email-marketing",
  },
];

function Service() {
  return (
    <section className="services-wrapper" id="services" aria-label="Our Services">
      <div className="services-header">
        <div className="services-tag">Our Services</div>
        <h2 className="services-heading">Meet what we do at<br /> vConnect iDees</h2>
        <p className="services-description">
          Solutions which boost your business to new heights and beyond.
        </p>
      </div>

      <div className="services-cards-grid">
        {services.map((s, idx) => (
          <Link key={s.id} to={s.to} className="service-card-link" aria-label={s.pill}>
            <article className="service-card" role="button">
              <div
                className="service-card-image"
                style={{ backgroundImage: `url(${s.img})` }}
                aria-hidden="true"
              />
              <div className="service-card-footer">
                <div className="service-card-text">
                  <div className="service-card-pill">{s.pill}</div>
                  <div className="service-card-heading">
                    {s.heading.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i !== s.heading.split("\n").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Service;
