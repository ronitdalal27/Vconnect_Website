import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/emailmarketing.css";

function EmailMarketing() {
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
    // Removed window.scrollTo here
  };

  const benefits = [
    {
      title: "Personalized Engagement",
      text: "Deliver tailored content that resonates with your audience’s needs and interests.",
    },
    {
      title: "Higher ROI",
      text: "Optimize campaigns for better open rates, click-throughs, and conversions.",
    },
    {
      title: "Automated Workflows",
      text: "Save time with automated emails that nurture leads and retain customers.",
    },
    {
      title: "Regulatory Compliance",
      text: "Stay worry-free with campaigns that meet industry standards.",
    },
    {
      title: "Detailed Analytics",
      text: "Track performance with clear, actionable insights to improve results.",
    },
  ];

  return (
    <main className="lg-page">
      <div className="lg-top-wrapper">
        {/* absolute pill that sits below the back link */}
        <div className="lg-pill">Email Marketing</div>
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
          src="/images/service3.png"
          alt="Lead Generation Hero"
          className="lg-hero-image"
        />
      </div>
      </div>

      {/* Benefits heading */}
      <h2 className="lg-benefits-title">Benefits of Our Email Marketing Services</h2>

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
          We combine creativity with data-driven precision to deliver email
          campaigns that get results. Our team stays updated on the latest email
          marketing trends, ensuring your campaigns stand out in crowded
          inboxes. With vConnect iDees, you’re partnering with experts dedicated
          to growing your business through effective email strategies.
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

export default EmailMarketing;
