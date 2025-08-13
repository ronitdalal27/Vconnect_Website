import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/leadgeneration.css";

function LeadGeneration() {
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Handler must be inside component (hooks cannot be called conditionally/outside)
  const handleBookCallClick = (e) => {
    // If triggered by keyboard, prevent default scroll of spacebar etc.
    if (e && e.type === "keydown" && e.key !== "Enter" && e.key !== " ") {
      return;
    }
    // navigate to contact and optionally pass state
    navigate("/contact", { state: { scrollTo: "contact" } });
    // Removed window.scrollTo here because useEffect handles scroll on mount
  };

  const benefits = [
    {
      title: "Targeted Prospect Acquisition",
      text: "Reach prospects who align with your business goals, ensuring higher conversion potential.",
    },
    {
      title: "Increased Conversion Rates",
      text: "Our data-driven approach focuses on high-intent leads, improving your sales outcomes.",
    },
    {
      title: "Scalable Campaigns",
      text: "Flexible strategies that adapt to your budget and growth objectives, from startups to enterprises.",
    },
    {
      title: "Comprehensive Analytics",
      text: "Gain insights with detailed reports on lead sources, engagement, and campaign performance.",
    },
    {
      title: "Time-Saving Efficiency",
      text: "Let us handle lead generation so your team can focus on closing deals.",
    },
  ];

  return (
    <main className="lg-page">
      <div className="lg-top-wrapper">
        {/* absolute pill that sits below the back link */}
        <div className="lg-pill">Lead Generation</div>
      </div>

      {/* Hero Section with Left Image and Right Text */}
      <div className="lg-hero-container">
      {/* LEFT - Text */}
      <div className="lg-hero-right">
        <h1 className="lg-title">
          Unlock a Steady Stream of High-Quality Leads
        </h1>
        <p className="lg-subtitle">
          Transform your business growth with vConnect iDees' expert lead
          generation services, designed to connect you with prospects who are
          ready to engage.
        </p>
      </div>

      {/* RIGHT - Image */}
      <div className="lg-hero-left">
        <img
          src="/images/service1.png"
          alt="Lead Generation Hero"
          className="lg-hero-image"
        />
      </div>
      </div>

      {/* Benefits heading */}
      <h2 className="lg-benefits-title">Benefits of Our Lead Generation Services</h2>

      {/* Repeated benefit blocks (5 times) */}
      <section className="lg-benefits-list">
        {benefits.map((b, i) => (
          <div className="lg-benefit" key={i}>
            <div className="lg-benefit-title">{b.title}</div>
            <div className="lg-benefit-text">{b.text}</div>
          </div>
        ))}
      </section>

      {/* Final Why Choose section */}
      <section className="lg-why">
        <h3 className="lg-why-title">Why Choose vConnect iDees?</h3>
        <p className="lg-why-desc">
          Our team combines industry expertise with a client-first approach,
          ensuring every campaign is tailored to your specific needs. We stay
          ahead of market trends, using the latest tools and strategies to keep
          your lead pipeline full. With vConnect iDees, you’re not just getting
          leads—you’re building a foundation for long-term business growth.
        </p>
      </section>

      {/* ✅ CTA Section */}
          <div className="cta-container" role="region">
      <div className="cta-heading">
        Let us handle the scheduling so
        <br />
        you can focus on winning clients.
      </div>

      <div className="cta-subheading">Book a Call Today and Start Scaling</div>

      <div
        className="cta-button"
        onClick={handleBookCallClick} // ✅ moved here
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleBookCallClick(e);
        }}
      >
        Book a Call
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="cta-icon"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M4.66168 12.1637L11.3283 5.49707"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66168 5.49707H11.3283V12.1637"
            stroke="white"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
    </main>
  );
}

export default LeadGeneration;
