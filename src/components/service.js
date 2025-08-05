import React from "react";
import { Link } from "react-router-dom";
import "../css/service.css";

import Img1 from "../images/Lead_gen.png";
import Img2 from "../images/Appointment.png";
import Img3 from "../images/email.png";

const services = [
  {
    id: "lead-generation",
    img: Img1,
    pill: "Lead Generation",
    heading: "Precision - Target Prospect\nIdentification",
    to: "leadgeneration.js",
  },
  {
    id: "appointment-settings",
    img: Img2,
    pill: "Appointment Settings",
    heading: "End-to-End\nPipeline Conversion",
    to: "appointmentsettings.js",
  },
  {
    id: "email-marketing",
    img: Img3,
    pill: "Email Marketing",
    heading: "High-Impact\nNurture & Conversion",
    to: "emailmarketing.js",
  },
];

function Service() {
  return (
    <section className="services-wrapper" id="services" aria-label="Our Services">
      <p className="services-title">Our Services</p>
      <h2 className="services-main-heading">What do we actually do?</h2>
      <p className="services-description">
        Solutions which boost your business to new heights and beyond.
      </p>

      <div className="services-row">
        {services.map((s) => (
          <Link key={s.id} to={s.to} className="service-card-link" aria-label={s.pill}>
            <article className="service-card" role="button">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${s.img})` }}
                aria-hidden="true"
              />
              <div className="card-pill">{s.pill}</div>
              <div className="card-content">
                <h3 className="card-heading">
                  {s.heading.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Service;

